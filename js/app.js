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
var showAnswersEnabled = true; // controlled by admin setting

// ==================== GOOGLE SIGN IN ====================

function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
        studentName = user.displayName || 'Siswa';
        studentEmail = user.email || '';
        studentUid = user.uid || '';
        studentPhoto = user.photoURL || '';
        showClassPage();
    }).catch(function(error) {
        console.error('Login error:', error);
        if (error.code !== 'auth/popup-closed-by-user') {
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
        hideAllPages();
        document.getElementById('login-page').style.display = 'flex';
    });
}

function showClassPage() {
    document.getElementById('display-name-class').textContent = studentName;
    if (studentPhoto) {
        document.getElementById('user-avatar-class').src = studentPhoto;
        document.getElementById('user-avatar-class').style.display = 'inline-block';
    }
    hideAllPages();
    document.getElementById('class-page').style.display = 'block';
}

function selectClass(kelas) {
    if (kelas !== 1) {
        alert('Kelas ' + kelas + ' belum tersedia. Coming soon!');
        return;
    }
    window.selectedClass = kelas;
    showHomePage();
}

function showHomePage() {
    document.getElementById('display-name').textContent = studentName;
    if (studentPhoto) {
        document.getElementById('user-avatar').src = studentPhoto;
        document.getElementById('user-avatar').style.display = 'inline-block';
    }
    hideAllPages();
    document.getElementById('home-page').style.display = 'block';
    loadBadges();
}

function hideAllPages() {
    var pages = ['login-page','class-page','home-page','exam-page','result-page','student-history-page','materi-page','leaderboard-page'];
    pages.forEach(function(id) {
        var el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        studentName = user.displayName || 'Siswa';
        studentEmail = user.email || '';
        studentUid = user.uid || '';
        studentPhoto = user.photoURL || '';
        showClassPage();
    }
});

// ==================== BADGES & ACHIEVEMENTS ====================

function getBadgeForScore(score) {
    if (score === 100) return { emoji: '💎', name: 'Sempurna!', color: '#8b5cf6' };
    if (score >= 90) return { emoji: '🏆', name: 'Juara', color: '#f59e0b' };
    if (score >= 80) return { emoji: '🌟', name: 'Bintang', color: '#6366f1' };
    if (score >= 70) return { emoji: '🎯', name: 'Hebat', color: '#10b981' };
    if (score >= 60) return { emoji: '👍', name: 'Bagus', color: '#3b82f6' };
    return null;
}

async function loadBadges() {
    var container = document.getElementById('badge-container');
    if (!container) return;
    container.innerHTML = '';

    var history = [];
    try {
        if (isFirebaseConfigured()) {
            var snapshot = await db.collection('examHistory').get();
            snapshot.forEach(function(doc) {
                var d = doc.data();
                if (d.studentUid === studentUid) history.push(d);
            });
        }
    } catch (e) {
        history = JSON.parse(localStorage.getItem('examHistory') || '[]').filter(function(h) { return h.studentUid === studentUid; });
    }

    if (history.length === 0) {
        container.innerHTML = '<p class="badge-empty">Kerjakan ujian untuk mendapatkan badge! 🎯</p>';
        return;
    }

    // Collect unique badges
    var badges = [];
    var badgeSet = {};
    history.forEach(function(h) {
        var b = getBadgeForScore(h.score);
        if (b && !badgeSet[b.name]) {
            badgeSet[b.name] = true;
            badges.push(b);
        }
    });

    // Count achievements
    var totalExams = history.length;
    var perfectScores = history.filter(function(h) { return h.score === 100; }).length;
    var above80 = history.filter(function(h) { return h.score >= 80; }).length;

    // Special badges
    if (totalExams >= 5) badges.push({ emoji: '🔥', name: 'Rajin (5+ ujian)', color: '#ef4444' });
    if (totalExams >= 10) badges.push({ emoji: '⚡', name: 'Super Rajin (10+)', color: '#f59e0b' });
    if (perfectScores >= 1) badges.push({ emoji: '💯', name: 'Nilai Sempurna', color: '#8b5cf6' });
    if (above80 >= 3) badges.push({ emoji: '🎖️', name: 'Konsisten Hebat', color: '#10b981' });

    if (badges.length === 0) {
        container.innerHTML = '<p class="badge-empty">Raih skor 60+ untuk mendapatkan badge pertamamu! 🎯</p>';
        return;
    }

    badges.forEach(function(b) {
        var badgeEl = document.createElement('div');
        badgeEl.className = 'achievement-badge';
        badgeEl.style.borderColor = b.color;
        badgeEl.innerHTML = '<span class="ab-emoji">' + b.emoji + '</span><span class="ab-name">' + b.name + '</span>';
        container.appendChild(badgeEl);
    });
}

// ==================== MATERI / PEMBAHASAN ====================

function showMateri(subject) {
    hideAllPages();
    document.getElementById('materi-page').style.display = 'block';

    var materiData = {
        pai: { title: '🕌 PAI', topics: ['Mengenal harakat (fathah, kasrah, dhammah)', 'Membaca Surah Al-Ikhlas (4 ayat, tentang keesaan Allah)', 'Asmaul Husna: Ar-Rahman (Maha Pengasih) & Ar-Rahim (Maha Penyayang)', 'Berterima kasih, disiplin, jujur, dan saling memaafkan', 'Perilaku hidup bersih, wudhu, dan tayamum', 'Kisah Nabi Adam As dan Nabi Muhammad Saw'] },
        ppkn: { title: '🏛️ Pendidikan Pancasila', topics: ['Bendera Indonesia (Merah Putih) - merah=berani, putih=suci', 'Lagu kebangsaan Indonesia Raya (W.R. Supratman)', 'Lambang Garuda Pancasila (5 sila)', 'Bhinneka Tunggal Ika = Berbeda-beda tetapi tetap satu', 'Gotong royong di lingkungan rumah dan sekolah', 'Peduli lingkungan: kebersihan, hemat air, rawat tanaman'] },
        matematika: { title: '🧮 Matematika', topics: ['Bilangan 11-20 (sebelas sampai dua puluh)', 'Nilai tempat: puluhan dan satuan (misal 18 = 1 puluhan 8 satuan)', 'Membandingkan bilangan: lebih besar (>), lebih kecil (<), sama (=)', 'Penjumlahan bilangan sampai 20', 'Pengurangan bilangan sampai 20', 'Mengukur panjang dengan alat ukur baku dan tidak baku', 'Menyajikan data dengan tabel dan diagram gambar'] },
        bahasa_indonesia: { title: '📝 Bahasa Indonesia', topics: ['Kalimat perintah (diakhiri tanda seru !)', 'Suku kata: ma-mi-mu-me-mo, ga-gi-gu-ge-go', 'Deskripsi diri dan teman', 'Melengkapi kalimat rumpang', 'Mengenal bentuk uang (logam dan kertas)', 'Menyusun kata acak menjadi kalimat', 'Kata petunjuk letak dan arah (di depan, di belakang, di atas, dll)', 'Mengenal profesi: guru, dokter, polisi, petani, pilot, dll'] },
        bahasa_arab: { title: '🌙 Bahasa Arab', topics: ['Perabot dapur: piring (صحن), gelas (كوب), sendok (ملعقة), pisau (سكين)', 'Hewan: kucing (قطة), anjing (كلب), ayam (دجاجة), burung (عصفور), ikan (سمكة)', 'Buah-buahan: apel (تفاحة), pisang (موز), jeruk (برتقال), anggur (عنب)', 'Alat transportasi: mobil (سيارة), pesawat (طائرة), kereta (قطار), kapal (سفينة)'] },
        bahasa_inggris: { title: '🌍 Bahasa Inggris', topics: ['Have/Has untuk kepemilikan (I have, He has)', 'Hewan peliharaan dan kemampuannya (A rabbit can jump)', 'Subject pronoun: I, You, He, She, It, We, They', 'To be: am (I), is (he/she/it), are (you/we/they)', 'Anggota keluarga: father, mother, brother, sister, dll', 'Buah dan sayuran: apple, banana, carrot, spinach', 'Likes untuk menyatakan kesukaan (She likes apples)'] }
    };

    var data = materiData[subject];
    document.getElementById('materi-title').textContent = data.title;
    var list = document.getElementById('materi-list');
    list.innerHTML = '';
    data.topics.forEach(function(topic) {
        var li = document.createElement('li');
        li.textContent = topic;
        list.appendChild(li);
    });
    document.getElementById('materi-start-btn').onclick = function() { startExam(subject); };
}

// ==================== STUDENT HISTORY ====================

function showStudentHistory() {
    document.getElementById('history-student-name').textContent = studentName;
    hideAllPages();
    document.getElementById('student-history-page').style.display = 'block';
    renderStudentHistory();
}

async function renderStudentHistory() {
    var container = document.getElementById('student-history-list');
    var filter = document.getElementById('student-history-filter').value;
    container.innerHTML = '<div class="empty-state-student">Memuat riwayat...</div>';

    var history = [];
    try {
        if (isFirebaseConfigured()) {
            var snapshot = await db.collection('examHistory').get();
            snapshot.forEach(function(doc) {
                var d = doc.data();
                if (d.studentUid === studentUid) history.push(d);
            });
            history.sort(function(a, b) { return (b.id || 0) - (a.id || 0); });
        }
    } catch (e) {
        console.error('renderStudentHistory Firestore error:', e);
    }

    // Fallback to localStorage if Firestore returned nothing
    if (history.length === 0) {
        var localHistory = JSON.parse(localStorage.getItem('examHistory') || '[]');
        history = localHistory.filter(function(h) { return h.studentUid === studentUid; });
    }

    if (filter && filter !== 'all') {
        history = history.filter(function(h) { return h.subject === filter; });
    }

    if (history.length === 0) {
        container.innerHTML = '<div class="empty-state-student">Belum ada riwayat ujian.</div>';
        return;
    }

    container.innerHTML = '';
    history.forEach(function(record) {
        var div = document.createElement('div');
        div.className = 'history-card-student';
        var subjectNames = { pai:'PAI', ppkn:'Pendidikan Pancasila', matematika:'Matematika', bahasa_indonesia:'Bahasa Indonesia', bahasa_arab:'Bahasa Arab', bahasa_inggris:'Bahasa Inggris' };
        var icons = { pai:'🕌', ppkn:'🏛️', matematika:'🧮', bahasa_indonesia:'📝', bahasa_arab:'🌙', bahasa_inggris:'🌍' };
        var badge = getBadgeForScore(record.score);
        div.innerHTML = '<div class="hcs-header">' +
            '<span class="hcs-subject">' + (icons[record.subject] || '') + ' ' + (subjectNames[record.subject] || record.subject) + '</span>' +
            '<span class="hcs-score ' + (record.score >= 60 ? 'good' : 'bad') + '">' + (badge ? badge.emoji + ' ' : '') + record.score + '/100</span></div>' +
            '<div class="hcs-stats"><span>✅ ' + record.correct + ' benar</span><span>❌ ' + record.wrong + ' salah</span><span>📅 ' + (record.date || '-') + '</span></div>';
        container.appendChild(div);
    });
}

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
            alert('Soal untuk mata pelajaran ini belum tersedia di database.');
            return [];
        }
        var questionCount = 20;
        try {
            var settingsDoc = await db.collection('settings').doc('exam').get();
            if (settingsDoc.exists && settingsDoc.data().questionsPerExam && settingsDoc.data().questionsPerExam[subject]) {
                questionCount = settingsDoc.data().questionsPerExam[subject];
            }
            // Also check showAnswers setting
            if (settingsDoc.exists && typeof settingsDoc.data().showAnswers !== 'undefined') {
                showAnswersEnabled = settingsDoc.data().showAnswers;
            }
        } catch (e) {
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
    var names = { pai:'PAI', ppkn:'Pendidikan Pancasila', matematika:'Matematika', bahasa_indonesia:'Bahasa Indonesia', bahasa_arab:'Bahasa Arab', bahasa_inggris:'Bahasa Inggris' };
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

    if (!currentQuestions || currentQuestions.length === 0) return;

    userAnswers = new Array(currentQuestions.length).fill(null);
    hideAllPages();
    document.getElementById('exam-page').style.display = 'block';

    var titles = { pai:'🕌 PAI', ppkn:'🏛️ Pancasila', matematika:'🧮 Matematika', bahasa_indonesia:'📝 B. Indonesia', bahasa_arab:'🌙 B. Arab', bahasa_inggris:'🌍 B. Inggris' };
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

function selectOption(index) { userAnswers[currentQuestionIndex] = index; showQuestion(); }
function nextQuestion() { if (currentQuestionIndex < currentQuestions.length - 1) { currentQuestionIndex++; showQuestion(); } }
function prevQuestion() { if (currentQuestionIndex > 0) { currentQuestionIndex--; showQuestion(); } }

function submitExam() {
    var unanswered = userAnswers.filter(function(a) { return a === null; }).length;
    if (unanswered > 0) { if (!confirm('Masih ada ' + unanswered + ' soal belum dijawab. Yakin mengumpulkan?')) return; }
    else { if (!confirm('Yakin ingin mengumpulkan jawaban?')) return; }
    finishExam();
}

function finishExam() {
    clearInterval(timerInterval);
    var correct = 0;
    var details = [];
    currentQuestions.forEach(function(question, index) {
        var isCorrect = userAnswers[index] === question.answer;
        if (isCorrect) correct++;
        details.push({ number: index + 1, question: question.question, userAnswer: userAnswers[index] !== null ? question.options[userAnswers[index]] : 'Tidak dijawab', correctAnswer: question.options[question.answer], isCorrect: isCorrect });
    });
    var total = currentQuestions.length;
    var score = Math.round((correct / total) * 100);
    var wrong = total - correct;
    var record = { id: Date.now(), studentName: studentName, studentEmail: studentEmail, studentUid: studentUid, kelas: window.selectedClass || 1, subject: currentSubject, subjectName: getSubjectName(currentSubject), date: new Date().toLocaleString('id-ID'), score: score, correct: correct, wrong: wrong, total: total, timeUsed: 1800 - timeLeft, details: details };
    saveHistory(record);
    showResult(score, correct, total, details);
}

function showResult(score, correct, total, details) {
    hideAllPages();
    document.getElementById('result-page').style.display = 'block';

    var badge = getBadgeForScore(score);
    var icon, title, message;
    if (score >= 80) { icon = '🌟'; title = 'Luar Biasa!'; message = 'Kamu hebat! Pertahankan terus ya!'; }
    else if (score >= 60) { icon = '👍'; title = 'Bagus!'; message = 'Sudah cukup baik, terus belajar ya!'; }
    else if (score >= 40) { icon = '📚'; title = 'Cukup'; message = 'Ayo belajar lagi supaya lebih baik!'; }
    else { icon = '💪'; title = 'Semangat!'; message = 'Jangan menyerah, terus belajar ya!'; }

    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = title;
    document.getElementById('score-display').textContent = score + '/100';

    // Show badge if earned
    var badgeHtml = '';
    if (badge) {
        badgeHtml = '<div class="result-badge"><span>' + badge.emoji + '</span> Badge: <strong>' + badge.name + '</strong></div>';
    }
    document.getElementById('result-badge-area').innerHTML = badgeHtml;
    document.getElementById('result-message').textContent = message + '\nBenar: ' + correct + ' dari ' + total + ' soal';

    // Show/hide answer details based on admin setting
    var detailsContainer = document.getElementById('result-details');
    if (showAnswersEnabled) {
        detailsContainer.style.display = 'block';
        detailsContainer.innerHTML = '<h3>Detail Jawaban:</h3>';
        details.forEach(function(item) {
            var div = document.createElement('div');
            div.className = 'result-item ' + (item.isCorrect ? 'correct' : 'wrong');
            div.innerHTML = '<span>' + (item.isCorrect ? '✅' : '❌') + '</span><div><strong>Soal ' + item.number + ':</strong> ' + item.question + '<br><small>Jawabanmu: ' + item.userAnswer + '</small><br>' + (!item.isCorrect ? '<small>Jawaban benar: ' + item.correctAnswer + '</small>' : '') + '</div>';
            detailsContainer.appendChild(div);
        });
    } else {
        detailsContainer.style.display = 'none';
        detailsContainer.innerHTML = '<p class="answers-locked">🔒 Kunci jawaban dikunci oleh admin.</p>';
        detailsContainer.style.display = 'block';
    }
}

function cancelExam() {
    if (confirm('Yakin ingin keluar?\n\nProgress tidak disimpan.')) {
        clearInterval(timerInterval);
        currentQuestions = []; currentQuestionIndex = 0; userAnswers = []; timeLeft = 1800;
        hideAllPages();
        document.getElementById('home-page').style.display = 'block';
    }
}

function goHome() { hideAllPages(); document.getElementById('home-page').style.display = 'block'; clearInterval(timerInterval); }

// ==================== LEADERBOARD ====================

function showLeaderboard() {
    hideAllPages();
    document.getElementById('leaderboard-page').style.display = 'block';
    renderLeaderboard();
}

async function renderLeaderboard() {
    var container = document.getElementById('leaderboard-list');
    var filter = document.getElementById('leaderboard-filter').value;
    container.innerHTML = '<div class="empty-state-student">Memuat ranking...</div>';

    var history = [];
    var currentClass = window.selectedClass || 1;

    try {
        if (isFirebaseConfigured()) {
            var snapshot = await db.collection('examHistory').get();
            snapshot.forEach(function(doc) {
                var d = doc.data();
                var recordClass = d.kelas || 1;
                if (recordClass === currentClass) history.push(d);
            });
        }
    } catch (e) {
        history = JSON.parse(localStorage.getItem('examHistory') || '[]');
        history = history.filter(function(h) { return (h.kelas || 1) === currentClass; });
    }

    if (history.length === 0) {
        history = JSON.parse(localStorage.getItem('examHistory') || '[]');
        history = history.filter(function(h) { return (h.kelas || 1) === currentClass; });
    }

    if (filter && filter !== 'all') {
        history = history.filter(function(h) { return h.subject === filter; });
    }

    // Group by student, calculate average score
    var students = {};
    history.forEach(function(h) {
        var key = h.studentUid || h.studentName || 'Anonim';
        if (!students[key]) {
            students[key] = { name: h.studentName || 'Anonim', totalScore: 0, count: 0, bestScore: 0 };
        }
        students[key].totalScore += (h.score || 0);
        students[key].count++;
        if ((h.score || 0) > students[key].bestScore) {
            students[key].bestScore = h.score;
        }
    });

    // Convert to array and sort by best score then avg
    var ranking = Object.values(students);
    ranking.sort(function(a, b) {
        if (b.bestScore !== a.bestScore) return b.bestScore - a.bestScore;
        return (b.totalScore / b.count) - (a.totalScore / a.count);
    });

    if (ranking.length === 0) {
        container.innerHTML = '<div class="empty-state-student">Belum ada data ranking untuk Kelas ' + currentClass + '.</div>';
        return;
    }

    container.innerHTML = '';
    ranking.forEach(function(student, idx) {
        var rank = idx + 1;
        var avg = Math.round(student.totalScore / student.count);
        var medal = '';
        if (rank === 1) medal = '🥇';
        else if (rank === 2) medal = '🥈';
        else if (rank === 3) medal = '🥉';
        else medal = '#' + rank;

        var isMe = student.name === studentName;
        var div = document.createElement('div');
        div.className = 'leaderboard-item' + (isMe ? ' is-me' : '');
        div.innerHTML = '<div class="lb-rank">' + medal + '</div>' +
            '<div class="lb-info"><span class="lb-name">' + student.name + (isMe ? ' (Kamu)' : '') + '</span>' +
            '<span class="lb-stats">' + student.count + ' ujian • Rata-rata: ' + avg + '</span></div>' +
            '<div class="lb-score">' + student.bestScore + '<small>/100</small></div>';
        container.appendChild(div);
    });
}

// ==================== TIMER ====================
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(function() {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) { clearInterval(timerInterval); alert('Waktu habis!'); finishExam(); }
    }, 1000);
}

function updateTimerDisplay() {
    var m = Math.floor(timeLeft / 60), s = timeLeft % 60;
    document.getElementById('timer-display').textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    if (timeLeft <= 60) document.getElementById('timer').classList.add('warning');
}
