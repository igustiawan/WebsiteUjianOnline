// ==================== VARIABEL GLOBAL ====================
let currentSubject = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval = null;
let timeLeft = 1800; // 30 menit dalam detik

// ==================== FUNGSI UTAMA ====================

function startExam(subject) {
    currentSubject = subject;
    currentQuestionIndex = 0;
    timeLeft = 1800; // 30 menit

    // Load soal berdasarkan mata pelajaran
    switch(subject) {
        case 'pai':
            currentQuestions = soalPAI;
            break;
        case 'ppkn':
            currentQuestions = soalPPKN;
            break;
        case 'matematika':
            currentQuestions = soalMatematika;
            break;
        case 'bahasa_indonesia':
            currentQuestions = soalBahasaIndonesia;
            break;
        case 'bahasa_arab':
            currentQuestions = soalBahasaArab;
            break;
        case 'bahasa_inggris':
            currentQuestions = soalBahasaInggris;
            break;
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
    showQuestion(); // Re-render untuk update tampilan selected
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
    // Cek apakah semua soal sudah dijawab
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
    // Hentikan timer
    clearInterval(timerInterval);

    // Hitung skor
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

    const score = Math.round((correct / currentQuestions.length) * 100);

    // Tampilkan hasil
    showResult(score, correct, currentQuestions.length, details);
}

function showResult(score, correct, total, details) {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('exam-page').style.display = 'none';
    document.getElementById('result-page').style.display = 'block';

    // Icon dan pesan berdasarkan skor
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

    // Detail jawaban
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

function goHome() {
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('exam-page').style.display = 'none';
    document.getElementById('result-page').style.display = 'none';
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
    
    // Warna merah kalau waktu hampir habis
    const timerEl = document.getElementById('timer');
    if (timeLeft <= 60) {
        timerEl.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
        timerEl.style.animation = 'pulse 1s infinite';
    }
}
