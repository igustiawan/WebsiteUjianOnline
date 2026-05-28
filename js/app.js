// ==================== VARIABEL GLOBAL ====================
var currentSubject = '';
var currentQuestions = [];
var currentQuestionIndex = 0;
var userAnswers = [];
var timerInterval = null;
var timeLeft = 1800;
var studentName = '';
var studentEmail = '';
var studentUid = '';
var studentPhoto = '';

// ==================== GOOGLE SIGN IN ====================

function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
        studentName = user.displayName || 'Siswa';
        studentEmail = user.email || '';
        studentUid = user.uid || '';
        studentPhoto = user.photoURL || '';
        showHomePage();
    }).catch(function(error) {
        console.error('Login error:', error);
        if (error.code === 'auth/popup-closed-by-user') {
            // User closed popup, do nothing
        } else {
            alert('Gagal login: ' + error.message);
        }
    });
}

function signOut() {
    firebase.auth().signOut().then(function() {
        studentName = '';
        studentEmail = '';
        studentUid = '';
        studentPhoto = '';
        document.getElementById('name-page').style.display = 'flex';
        document.getElementById('home-page').style.display = 'none';
        document.getElementById('exam-page').style.display = 'none';
        document.getElementById('result-page').style.display = 'none';
    });
}

function showHomePage() {
    document.getElementById('display-name').textContent = studentName;
    if (studentPhoto) {
        document.getElementById('user-avatar').src = studentPhoto;
        document.getElementById('user-avatar').style.display = 'inline-block';
    }
    document.getElementById('name-page').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
}

// Check if user already logged in
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        studentName = user.displayName || 'Siswa';
        studentEmail = user.email || '';
        studentUid = user.uid || '';
        studentPhoto = user.photoURL || '';
        showHomePage();
    }
});

// ==================== DATA MANAGEMENT ====================

function shuffleArray(array) {
    var shuffled = array.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}

async function generateExamQuestions(subject) {
    try {
        var bank = await getQuestionsFromFirestore(subject);
        if (!bank || bank.length === 0) {
            alert('Soal untuk mata pelajaran ini belum tersedia di database.\n\nHubungi admin untuk mengupload soal.');
            return [];
        }

        // Get question count from Firestore settings
        var questionCount = 20; // default
        try {
            var settingsDoc = await db.collection('settings').doc('exam').get();
            if (settingsDoc.exists && settingsDoc.data().questionsPerExam && settingsDoc.data().questionsPerExam[subject]) {
                questionCount = settingsDoc.data().questionsPerExam[subject];
            }
        } catch (e) {
            // Try localStorage fallback
            var localSettings = localStorage.getItem('examSettings');
            if (localSettings) {
                var parsed = JSON.parse(localSettings);
                if (parsed[subject]) questionCount = parsed[subject];
            }
        }

        var shuffled = shuffleArray(bank);
        return shuffled.slice(0, Math.min(questionCount, bank.length));
    } catch (error) {
        console.error('generateExamQuestions error:', error);
        alert('Gagal mengambil soal: ' + error.message);
        return [];
    }
}

function saveHistory(record) {
    if (typeof isFirebaseConfigured === 'function' && isFirebaseConfigured()) {
        saveExamToFirestore(record);
    }
    var history = JSON.parse(localStorage.getItem('examHistory') || '[]');
    history.unshift(record);
    localStorage.setItem('examHistory', JSON.stringify(history));
}

function getSubjectName(subject) {
    var names = {
        'pai': 'PAI',
        'ppkn': 'Pendidikan Pancasila',
        'matematika': 'Matematika',
        'bahasa_indonesia': 'Bahasa Indonesia',
        'bahasa_arab': 'Bahasa Arab',
        'bahasa_inggris': 'Bahasa Inggris'
    };
    return names[subject] || subject;
}

// ==================== FUNGSI UTAMA ====================

async function startExam(subject) {
    currentSubject = subject;
    currentQuestionIndex = 0;
    timeLeft = 1800;

    document.getElementById('loading-overlay').classList.add('show');

    try {
        currentQuestions = await generateExamQuestions(subject);
    } catch (error) {
        console.error('startExam error:', error);
        currentQuestions = [];
    }

    document.getElementById('loading-overlay').classList.remove('show');

    if (!currentQuestions || currentQuestions.length === 0) {
        return;
    }

    userAnswers = new Array(currentQuestions.length).fill(null);

    document.getElementById('home-page').style.display = 'none';
    document.getElementById('exam-page').style.display = 'block';
    document.getElementById('result-page').style.display = 'none';

    var titles = {
        'pai': '🕌 PAI',
        'ppkn': '🏛️ Pendidikan Pancasila',
        'matematika': '🧮 Matematika',
        'bahasa_indonesia': '📝 Bahasa Indonesia',
        'bahasa_arab': '🌙 Bahasa Arab',
        'bahasa_inggris': '🌍 Bahasa Inggris'
    };
    document.getElementById('exam-title').textContent = titles[subject] || subject;

    startTimer();
    showQuestion();
}

function showQuestion() {
    var question = currentQuestions[currentQuestionIndex];
    var total = currentQuestions.length;

    document.getElementById('exam-progress').textContent = 'Soal ' + (currentQuestionIndex + 1) + ' dari ' + total;
    document.getElementById('question-number').textContent = 'Soal ' + (currentQuestionIndex + 1);
    document.getElementById('question-text').textContent = question.question;

    var optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    var letters = ['A', 'B', 'C', 'D'];
    question.options.forEach(function(option, index) {
        var optionDiv = document.createElement('div');
        optionDiv.className = 'option' + (userAnswers[currentQuestionIndex] === index ? ' selected' : '');
        optionDiv.innerHTML = '<span class="option-letter">' + letters[index] + '</span><span>' + option + '</span>';
        optionDiv.onclick = function() { selectOption(index); };
        optionsContainer.appendChild(optionDiv);
    });

    document.getElementById('btn-prev').style.display = currentQuestionIndex === 0 ? 'none' : 'inline-flex';
    if (currentQuestionIndex === total - 1) {
        document.getElementById('btn-next').style.display = 'none';
        document.getElementById('btn-submit').style.display = 'inline-flex';
    } else {
        document.getElementById('btn-next').style.display = 'inline-flex';
        document.getElementById('btn-submit').style.display = 'none';
    }
}

function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    showQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function submitExam() {
    var unanswered = userAnswers.filter(function(a) { return a === null; }).length;
    if (unanswered > 0) {
        if (!confirm('Masih ada ' + unanswered + ' soal yang belum dijawab. Yakin ingin mengumpulkan?')) return;
    } else {
        if (!confirm('Yakin ingin mengumpulkan jawaban?')) return;
    }
    finishExam();
}

function finishExam() {
    clearInterval(timerInterval);

    var correct = 0;
    var details = [];

    currentQuestions.forEach(function(question, index) {
        var isCorrect = userAnswers[index] === question.answer;
        if (isCorrect) correct++;
        details.push({
            number: index + 1,
            question: question.question,
            userAnswer: userAnswers[index] !== null ? question.options[userAnswers[index]] : 'Tidak dijawab',
            correctAnswer: question.options[question.answer],
            isCorrect: isCorrect
        });
    });

    var total = currentQuestions.length;
    var score = Math.round((correct / total) * 100);
    var wrong = total - correct;

    var record = {
        id: Date.now(),
        studentName: studentName,
        studentEmail: studentEmail,
        studentUid: studentUid,
        subject: currentSubject,
        subjectName: getSubjectName(currentSubject),
        date: new Date().toLocaleString('id-ID'),
        score: score,
        correct: correct,
        wrong: wrong,
        total: total,
        timeUsed: 1800 - timeLeft,
        details: details
    };
    saveHistory(record);
    showResult(score, correct, total, details);
}

function showResult(score, correct, total, details) {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('exam-page').style.display = 'none';
    document.getElementById('result-page').style.display = 'block';

    var icon, title, message;
    if (score >= 80) { icon = '🌟'; title = 'Luar Biasa!'; message = 'Kamu hebat! Pertahankan terus ya!'; }
    else if (score >= 60) { icon = '👍'; title = 'Bagus!'; message = 'Sudah cukup baik, terus belajar ya!'; }
    else if (score >= 40) { icon = '📚'; title = 'Cukup'; message = 'Ayo belajar lagi supaya lebih baik!'; }
    else { icon = '💪'; title = 'Semangat!'; message = 'Jangan menyerah, terus belajar ya!'; }

    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = title;
    document.getElementById('score-display').textContent = score + '/100';
    document.getElementById('result-message').textContent = message + '\nBenar: ' + correct + ' dari ' + total + ' soal';

    var detailsContainer = document.getElementById('result-details');
    detailsContainer.innerHTML = '<h3>Detail Jawaban:</h3>';
    details.forEach(function(item) {
        var div = document.createElement('div');
        div.className = 'result-item ' + (item.isCorrect ? 'correct' : 'wrong');
        div.innerHTML = '<span>' + (item.isCorrect ? '✅' : '❌') + '</span><div><strong>Soal ' + item.number + ':</strong> ' + item.question + '<br><small>Jawabanmu: ' + item.userAnswer + '</small><br>' + (!item.isCorrect ? '<small>Jawaban benar: ' + item.correctAnswer + '</small>' : '') + '</div>';
        detailsContainer.appendChild(div);
    });
}

function cancelExam() {
    if (confirm('Yakin ingin keluar dari ujian?\n\nProgress tidak disimpan dan harus mengulang dari awal.')) {
        clearInterval(timerInterval);
        currentQuestions = [];
        currentQuestionIndex = 0;
        userAnswers = [];
        timeLeft = 1800;
        document.getElementById('home-page').style.display = 'block';
        document.getElementById('exam-page').style.display = 'none';
        document.getElementById('result-page').style.display = 'none';
    }
}

function goHome() {
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('exam-page').style.display = 'none';
    document.getElementById('result-page').style.display = 'none';
    document.getElementById('name-page').style.display = 'none';
    clearInterval(timerInterval);
}

// ==================== TIMER ====================

function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(function() {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Waktu habis! Jawaban dikumpulkan otomatis.');
            finishExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    document.getElementById('timer-display').textContent =
        (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    var timerEl = document.getElementById('timer');
    if (timeLeft <= 60) {
        timerEl.classList.add('warning');
    }
}
