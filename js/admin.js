// ==================== ADMIN CONFIG ====================
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

let currentEditIndex = null;
let currentSubjectTab = 'pai';

// ==================== LOGIN ====================

function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
    if (isLoggedIn === 'true') {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('admin-page').style.display = 'block';
        showPage('dashboard');
    }
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorEl = document.getElementById('login-error');

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('admin-page').style.display = 'block';
        showPage('dashboard');
    } else {
        errorEl.textContent = '❌ Username atau password salah!';
        errorEl.style.display = 'block';
    }
}

function handleLogout() {
    sessionStorage.removeItem('adminLoggedIn');
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('admin-page').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// ==================== PAGE NAVIGATION ====================

function showPage(page) {
    document.getElementById('dashboard-section').style.display = page === 'dashboard' ? 'block' : 'none';
    document.getElementById('questions-section').style.display = page === 'questions' ? 'block' : 'none';
    document.getElementById('history-section').style.display = page === 'history' ? 'block' : 'none';

    // Highlight active button
    document.querySelectorAll('.admin-actions .btn').forEach(btn => btn.classList.remove('active'));

    if (page === 'dashboard') {
        renderDashboard();
    } else if (page === 'questions') {
        renderSubjectTabs();
        renderQuestions();
    } else if (page === 'history') {
        renderHistory();
    }
}

// ==================== DASHBOARD / MONITORING ====================

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

function getSubjectIcon(subject) {
    const icons = {
        'pai': '🕌',
        'ppkn': '🇮🇩',
        'matematika': '🔢',
        'bahasa_indonesia': '📖',
        'bahasa_arab': '🌙',
        'bahasa_inggris': '🌍'
    };
    return icons[subject] || '📚';
}

function renderDashboard() {
    const history = getHistory();
    const subjects = ['pai', 'ppkn', 'matematika', 'bahasa_indonesia', 'bahasa_arab', 'bahasa_inggris'];

    const statsGrid = document.getElementById('stats-grid');
    statsGrid.innerHTML = '';

    let totalCorrect = 0;
    let totalWrong = 0;
    let totalAttempts = 0;

    subjects.forEach(subject => {
        const subjectHistory = history.filter(h => h.subject === subject);
        const attempts = subjectHistory.length;
        const correct = subjectHistory.reduce((sum, h) => sum + h.correct, 0);
        const wrong = subjectHistory.reduce((sum, h) => sum + h.wrong, 0);
        const avgScore = attempts > 0 ? Math.round(subjectHistory.reduce((sum, h) => sum + h.score, 0) / attempts) : 0;
        const lastAttempt = subjectHistory.length > 0 ? subjectHistory[0].date : '-';

        totalCorrect += correct;
        totalWrong += wrong;
        totalAttempts += attempts;

        const card = document.createElement('div');
        card.className = 'stat-card';
        card.innerHTML = `
            <div class="stat-icon">${getSubjectIcon(subject)}</div>
            <h3>${getSubjectName(subject)}</h3>
            <div class="stat-details">
                <div class="stat-row">
                    <span>Jumlah Ujian:</span>
                    <strong>${attempts}x</strong>
                </div>
                <div class="stat-row">
                    <span>Total Benar:</span>
                    <strong class="text-success">${correct}</strong>
                </div>
                <div class="stat-row">
                    <span>Total Salah:</span>
                    <strong class="text-danger">${wrong}</strong>
                </div>
                <div class="stat-row">
                    <span>Rata-rata Skor:</span>
                    <strong class="text-primary">${avgScore}/100</strong>
                </div>
                <div class="stat-row">
                    <span>Terakhir Ujian:</span>
                    <small>${lastAttempt}</small>
                </div>
            </div>
            ${attempts > 0 ? `<div class="progress-bar"><div class="progress-fill" style="width: ${avgScore}%"></div></div>` : '<div class="no-data">Belum ada data</div>'}
        `;
        statsGrid.appendChild(card);
    });

    // Summary
    const summaryBox = document.getElementById('summary-box');
    const overallAvg = totalAttempts > 0 ? Math.round(((totalCorrect / (totalCorrect + totalWrong)) * 100)) : 0;
    summaryBox.innerHTML = `
        <div class="summary-stats">
            <div class="summary-item">
                <span class="summary-number">${totalAttempts}</span>
                <span class="summary-label">Total Ujian</span>
            </div>
            <div class="summary-item">
                <span class="summary-number text-success">${totalCorrect}</span>
                <span class="summary-label">Total Benar</span>
            </div>
            <div class="summary-item">
                <span class="summary-number text-danger">${totalWrong}</span>
                <span class="summary-label">Total Salah</span>
            </div>
            <div class="summary-item">
                <span class="summary-number text-primary">${overallAvg}%</span>
                <span class="summary-label">Akurasi</span>
            </div>
        </div>
    `;
}

// ==================== QUESTION MANAGEMENT ====================

function getQuestionBank(subject) {
    // Check localStorage first for custom questions
    const custom = localStorage.getItem(`questions_${subject}`);
    if (custom) return JSON.parse(custom);

    // Fall back to default
    switch(subject) {
        case 'pai': return [...soalPAI];
        case 'ppkn': return [...soalPPKN];
        case 'matematika': return [...soalMatematika];
        case 'bahasa_indonesia': return [...soalBahasaIndonesia];
        case 'bahasa_arab': return [...soalBahasaArab];
        case 'bahasa_inggris': return [...soalBahasaInggris];
        default: return [];
    }
}

function saveQuestionBank(subject, questions) {
    localStorage.setItem(`questions_${subject}`, JSON.stringify(questions));
}

function renderSubjectTabs() {
    const subjects = ['pai', 'ppkn', 'matematika', 'bahasa_indonesia', 'bahasa_arab', 'bahasa_inggris'];
    const tabsContainer = document.getElementById('subject-tabs');
    tabsContainer.innerHTML = '';

    subjects.forEach(subject => {
        const tab = document.createElement('button');
        tab.className = `tab-btn ${subject === currentSubjectTab ? 'active' : ''}`;
        tab.textContent = `${getSubjectIcon(subject)} ${getSubjectName(subject)}`;
        tab.onclick = () => {
            currentSubjectTab = subject;
            renderSubjectTabs();
            renderQuestions();
        };
        tabsContainer.appendChild(tab);
    });
}

function renderQuestions() {
    const questions = getQuestionBank(currentSubjectTab);
    const container = document.getElementById('question-list');
    container.innerHTML = '';

    if (questions.length === 0) {
        container.innerHTML = '<div class="empty-state">Belum ada soal. Klik "Tambah Soal Baru" untuk memulai.</div>';
        return;
    }

    const letters = ['A', 'B', 'C', 'D'];

    questions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.innerHTML = `
            <div class="question-card-header">
                <span class="q-number">Soal ${index + 1}</span>
                <div class="q-actions">
                    <button class="btn btn-sm btn-primary" onclick="editQuestion(${index})">✏️ Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteQuestion(${index})">🗑️ Hapus</button>
                </div>
            </div>
            <p class="q-text">${q.question}</p>
            <div class="q-options">
                ${q.options.map((opt, i) => `<span class="${i === q.answer ? 'correct-answer' : ''}">${letters[i]}. ${opt}</span>`).join('')}
            </div>
        `;
        container.appendChild(card);
    });
}

function showAddQuestion() {
    currentEditIndex = null;
    document.getElementById('modal-title').textContent = 'Tambah Soal Baru';
    document.getElementById('q-text').value = '';
    document.getElementById('q-opt-a').value = '';
    document.getElementById('q-opt-b').value = '';
    document.getElementById('q-opt-c').value = '';
    document.getElementById('q-opt-d').value = '';
    document.getElementById('q-answer').value = '0';
    document.getElementById('question-modal').style.display = 'flex';
}

function editQuestion(index) {
    const questions = getQuestionBank(currentSubjectTab);
    const q = questions[index];
    currentEditIndex = index;

    document.getElementById('modal-title').textContent = `Edit Soal ${index + 1}`;
    document.getElementById('q-text').value = q.question;
    document.getElementById('q-opt-a').value = q.options[0];
    document.getElementById('q-opt-b').value = q.options[1];
    document.getElementById('q-opt-c').value = q.options[2];
    document.getElementById('q-opt-d').value = q.options[3];
    document.getElementById('q-answer').value = q.answer.toString();
    document.getElementById('question-modal').style.display = 'flex';
}

function saveQuestion(e) {
    e.preventDefault();

    const question = {
        question: document.getElementById('q-text').value,
        options: [
            document.getElementById('q-opt-a').value,
            document.getElementById('q-opt-b').value,
            document.getElementById('q-opt-c').value,
            document.getElementById('q-opt-d').value
        ],
        answer: parseInt(document.getElementById('q-answer').value)
    };

    const questions = getQuestionBank(currentSubjectTab);

    if (currentEditIndex !== null) {
        questions[currentEditIndex] = question;
    } else {
        questions.push(question);
    }

    saveQuestionBank(currentSubjectTab, questions);
    closeModal();
    renderQuestions();
}

function deleteQuestion(index) {
    if (!confirm(`Yakin ingin menghapus soal ${index + 1}?`)) return;

    const questions = getQuestionBank(currentSubjectTab);
    questions.splice(index, 1);
    saveQuestionBank(currentSubjectTab, questions);
    renderQuestions();
}

function closeModal() {
    document.getElementById('question-modal').style.display = 'none';
}

// ==================== HISTORY ====================

function renderHistory() {
    const history = getHistory();
    const filter = document.getElementById('history-filter').value;
    const container = document.getElementById('history-list');

    const filtered = filter === 'all' ? history : history.filter(h => h.subject === filter);

    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state">📭 Belum ada riwayat ujian.</div>';
        return;
    }

    container.innerHTML = '';

    filtered.forEach((record, idx) => {
        const timeUsed = record.timeUsed ? formatTime(record.timeUsed) : '-';
        const card = document.createElement('div');
        card.className = 'history-card';
        card.innerHTML = `
            <div class="history-card-header">
                <div>
                    <span class="history-subject">${getSubjectIcon(record.subject)} ${record.subjectName}</span>
                    <span class="history-date">${record.date}</span>
                </div>
                <div class="history-score ${record.score >= 60 ? 'good' : 'bad'}">${record.score}/100</div>
            </div>
            <div class="history-stats">
                <span class="text-success">✅ Benar: ${record.correct}</span>
                <span class="text-danger">❌ Salah: ${record.wrong}</span>
                <span>⏱️ Waktu: ${timeUsed}</span>
            </div>
            <button class="btn btn-sm btn-secondary" onclick="toggleDetails(${idx}, '${filter}')">📋 Lihat Detail</button>
            <div class="history-details" id="details-${idx}" style="display:none;"></div>
        `;
        container.appendChild(card);
    });
}

function toggleDetails(idx, filter) {
    const history = getHistory();
    const filtered = filter === 'all' ? history : history.filter(h => h.subject === filter);
    const record = filtered[idx];
    const detailsEl = document.getElementById(`details-${idx}`);

    if (detailsEl.style.display === 'none') {
        detailsEl.style.display = 'block';
        if (record.details) {
            detailsEl.innerHTML = record.details.map(d => `
                <div class="detail-row ${d.isCorrect ? 'correct' : 'wrong'}">
                    <span>${d.isCorrect ? '✅' : '❌'} Soal ${d.number}: ${d.question}</span>
                    <small>Jawaban: ${d.userAnswer}${!d.isCorrect ? ` | Benar: ${d.correctAnswer}` : ''}</small>
                </div>
            `).join('');
        } else {
            detailsEl.innerHTML = '<p>Detail tidak tersedia.</p>';
        }
    } else {
        detailsEl.style.display = 'none';
    }
}

function clearHistory() {
    if (!confirm('Yakin ingin menghapus SEMUA riwayat ujian? Data tidak bisa dikembalikan.')) return;
    localStorage.removeItem('examHistory');
    renderHistory();
    renderDashboard();
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} menit ${secs} detik`;
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', checkAuth);
