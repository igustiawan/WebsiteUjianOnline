// ==================== VARIABEL GLOBAL ====================
let currentSubject = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval = null;
let timeLeft = 1800;
let studentName = '';

// ==================== NAME INPUT ====================

function submitName(e) {
    e.preventDefault();
    const nameInput = document.getElementById('student-name').value.trim();
    if (!nameInput) return;

    studentName = nameInput;
    document.getElementById('display-name').textContent = studentName;
    document.getElementById('name-page').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
}

// ==================== DATA MANAGEMENT ====================

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

async function generateExamQuestions(subject) {
    try {
        const bank = await getQuestionsFromFirestore(subject);
        if (!bank || bank.length === 0) {
            alert('Soal belum tersedia untuk mata pelajaran ini. Hubungi admin untuk mengupload soal ke database.');
            return [];
        }
        const shuffled = shuffleArray(bank);
        return shuffled.slice(0, 15);
    } catch (error) {
        console.error('Error fetching questions:', error);
        alert('Gagal mengambil soal. Periksa koneksi internet dan coba lagi.');
        return [];
    }
}

function saveHistory(record) {
    // Simpan ke Firebase jika configured
    if (typeof isFirebaseConfigured === 'function' && isFirebaseConfigured()) {
        saveExamToFirestore(record);
    }
    // Selalu simpan juga ke localStorage sebagai backup
    const history = JSON.parse(localStorage.getItem('examHistory') || '[]');
    history.unshift(record);
    localStorage.setItem('examHistory', JSON.stringify(history));
}

function getHistory() {
    return JSON.parse(localStorage.getItem('examHistory') || '[]');
}

function getSubjectName(subject) {
    const names = {
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

    // Show loading
    document.getElementById('loading-overlay').classList.add('show');

    try {
        currentQuestions = await generateExamQuestions(subject);
    } catch (error) {
        console.error('startExam error:', error);
        currentQuestions = [];
    }

    // Always hide loading
    document.getElementById('loading-overlay').classList.remove('show');

    if (!currentQuestions || currentQuestions.length === 0) {
        return;
    }

    // Reset jawaban
    userAnswers = new Array(currentQuestions.length).fill(null);

    // Tampilkan halaman ujian
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('exam-page').style.display = 'block';
    document.getElementById('result-page').style.display = 'none';

    // Set judul
    const titles = {
        'pai': '🕌 PAI - Pendidikan Agama Islam',
        'ppkn': '🇮🇩 Pendidikan Pancasila',
        'matematika': '🔢 Matematika',
        'bahasa_indonesia': '📖 Bahasa Indonesia',
        'bahasa_arab': '🌙 Bahasa Arab',
        'bahasa_inggris': '🌍 Bahasa Inggris'
    };
    document.getElementById('exam-title').textContent = titles[subject];

    // Mulai timer
    startTimer();

    // Tampilkan soal pertama
    showQuestion();
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const total = currentQuestions.length;

    // Update progress
    document.getElementById('exam-progress').textContent = `Soal ${currentQuestionIndex + 1} dari ${total}`;
    document.getElementById('question-number').textContent = `Soal ${currentQuestionIndex + 1}`;
    document.getElementById('question-text').textContent = question.question;

    // Render pilihan jawaban
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option' + (userAnswers[currentQuestionIndex] === index ? ' selected' : '');
        optionDiv.innerHTML = `
            <span class="option-letter">${letters[index]}</span>
            <span>${option}</span>
        `;
        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });

    // Update tombol navigasi
    document.getElementById('btn-prev').style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    
    if (currentQuestionIndex === total - 1) {
        document.getElementById('btn-next').style.display = 'none';
        document.getElementById('btn-submit').style.display = 'inline-block';
    } else {
        document.getElementById('btn-next').style.display = 'inline-block';
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
    const unanswered = userAnswers.filter(a => a === null).length;
    if (unanswered > 0) {
        if (!confirm(`Masih ada ${unanswered} soal yang belum dijawab. Yakin ingin mengumpulkan?`)) {
            return;
        }
    } else {
        if (!confirm('Yakin ingin mengumpulkan jawaban?')) {
            return;
        }
    }

    finishExam();
}

function finishExam() {
    clearInterval(timerInterval);

    let correct = 0;
    const details = [];

    currentQuestions.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.answer;
        if (isCorrect) correct++;
        
        details.push({
            number: index + 1,
            question: question.question,
            userAnswer: userAnswers[index] !== null ? question.options[userAnswers[index]] : 'Tidak dijawab',
            correctAnswer: question.options[question.answer],
            isCorrect: isCorrect
        });
    });

    const total = currentQuestions.length;
    const score = Math.round((correct / total) * 100);
    const wrong = total - correct;

    // Simpan ke history
    const record = {
        id: Date.now(),
        studentName: studentName,
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

    // Tampilkan hasil
    showResult(score, correct, total, details);
}

function showResult(score, correct, total, details) {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('exam-page').style.display = 'none';
    document.getElementById('result-page').style.display = 'block';

    let icon, title, message;
    if (score >= 80) {
        icon = '🌟';
        title = 'Luar Biasa!';
        message = 'Kamu hebat! Pertahankan terus ya! 🎉';
    } else if (score >= 60) {
        icon = '👍';
        title = 'Bagus!';
        message = 'Sudah cukup baik, terus belajar ya! 💪';
    } else if (score >= 40) {
        icon = '📚';
        title = 'Cukup';
        message = 'Ayo belajar lagi supaya lebih baik! 📖';
    } else {
        icon = '💪';
        title = 'Semangat!';
        message = 'Jangan menyerah, terus belajar ya! 🌈';
    }

    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = title;
    document.getElementById('score-display').textContent = `${score}/100`;
    document.getElementById('result-message').textContent = `${message}\nBenar: ${correct} dari ${total} soal`;

    const detailsContainer = document.getElementById('result-details');
    detailsContainer.innerHTML = '<h3>📋 Detail Jawaban:</h3>';
    
    details.forEach(item => {
        const div = document.createElement('div');
        div.className = `result-item ${item.isCorrect ? 'correct' : 'wrong'}`;
        div.innerHTML = `
            <span>${item.isCorrect ? '✅' : '❌'}</span>
            <div>
                <strong>Soal ${item.number}:</strong> ${item.question}<br>
                <small>Jawabanmu: ${item.userAnswer}</small><br>
                ${!item.isCorrect ? `<small>Jawaban benar: ${item.correctAnswer}</small>` : ''}
            </div>
        `;
        detailsContainer.appendChild(div);
    });
}

function cancelExam() {
    if (confirm('Yakin ingin keluar dari ujian?\n\nProgress kamu tidak akan disimpan dan harus mengulang dari awal.')) {
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
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('⏰ Waktu habis! Jawaban akan dikumpulkan otomatis.');
            finishExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer-display').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const timerEl = document.getElementById('timer');
    if (timeLeft <= 60) {
        timerEl.classList.add('warning');
    }
}
