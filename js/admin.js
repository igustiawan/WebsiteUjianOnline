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

// Firebase-powered dashboard render
async function renderDashboard() {
    const statsGrid = document.getElementById('stats-grid');
    const summaryBox = document.getElementById('summary-box');
    statsGrid.innerHTML = '<div class="empty-state">⏳ Memuat data...</div>';

    const subjects = ['pai', 'ppkn', 'matematika', 'bahasa_indonesia', 'bahasa_arab', 'bahasa_inggris'];
    let history;

    // Try Firebase first, fallback to localStorage
    if (typeof isFirebaseConfigured === 'function' && isFirebaseConfigured()) {
        try {
            history = await getExamHistoryFromFirestore();
        } catch (e) {
            history = getHistory();
        }
    } else {
        history = getHistory();
    }

    statsGrid.innerHTML = '';
    let totalCorrect = 0;
    let totalWrong = 0;
    let totalAttempts = 0;

    subjects.forEach(subject => {
        const subjectHistory = history.filter(h => h.subject === subject);
        const attempts = subjectHistory.length;
        const correct = subjectHistory.reduce((sum, h) => sum + (h.correct || 0), 0);
        const wrong = subjectHistory.reduce((sum, h) => sum + (h.wrong || 0), 0);
        const avgScore = attempts > 0 ? Math.round(subjectHistory.reduce((sum, h) => sum + (h.score || 0), 0) / attempts) : 0;
        const lastAttempt = subjectHistory.length > 0 ? (subjectHistory[0].date || '-') : '-';

        totalCorrect += correct;
        totalWrong += wrong;
        totalAttempts += attempts;
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
    // Also save to Firestore
    if (typeof saveQuestionsToFirestore === 'function' && typeof isFirebaseConfigured === 'function' && isFirebaseConfigured()) {
        saveQuestionsToFirestore(subject, questions);
    }
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

async function renderHistory() {
    const filter = document.getElementById('history-filter').value;
    const container = document.getElementById('history-list');
    container.innerHTML = '<div class="empty-state">⏳ Memuat riwayat...</div>';

    let filtered;

    // Try Firebase first, fallback to localStorage
    if (typeof isFirebaseConfigured === 'function' && isFirebaseConfigured()) {
        try {
            const history = await getExamHistoryFromFirestore(filter);
            filtered = history;
        } catch (e) {
            const history = getHistory();
            filtered = filter === 'all' ? history : history.filter(h => h.subject === filter);
        }
    } else {
        const history = getHistory();
        filtered = filter === 'all' ? history : history.filter(h => h.subject === filter);
    }

    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state">Belum ada riwayat ujian.</div>';
        return;
    }

    container.innerHTML = '';

    filtered.forEach((record, idx) => {
        const timeUsed = record.timeUsed ? formatTime(record.timeUsed) : '-';
        const dateStr = record.date || (record.timestamp ? new Date(record.timestamp.seconds * 1000).toLocaleString('id-ID') : '-');
        const card = document.createElement('div');
        card.className = 'history-card';
        card.innerHTML = `
            <div class="history-card-header">
                <div>
                    <span class="history-subject">${getSubjectIcon(record.subject)} ${record.subjectName || getSubjectName(record.subject)}</span>
                    <span class="history-date">${dateStr}</span>
                </div>
                <div class="history-score ${record.score >= 60 ? 'good' : 'bad'}">${record.score}/100</div>
            </div>
            <div class="history-stats">
                <span class="text-success">✅ Benar: ${record.correct}</span>
                <span class="text-danger">❌ Salah: ${record.wrong}</span>
                <span>⏱️ Waktu: ${timeUsed}</span>
            </div>
            <button class="btn btn-sm btn-secondary" onclick="toggleDetails(${idx}, '${filter}')">Lihat Detail</button>
            <div class="history-details" id="details-${idx}" style="display:none;"></div>
        `;
        container.appendChild(card);
    });

    // Store filtered data for detail toggle
    window._currentFilteredHistory = filtered;
}

function toggleDetails(idx, filter) {
    const filtered = window._currentFilteredHistory || [];
    const record = filtered[idx];
    const detailsEl = document.getElementById(`details-${idx}`);

    if (!record || !detailsEl) return;

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

async function clearHistory() {
    if (!confirm('Yakin ingin menghapus SEMUA riwayat ujian? Data tidak bisa dikembalikan.')) return;

    // Clear Firebase
    if (typeof isFirebaseConfigured === 'function' && isFirebaseConfigured()) {
        await clearAllHistory();
    }
    // Also clear localStorage
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
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    // Load saved API key
    const savedKey = localStorage.getItem('openai_api_key');
    if (savedKey) {
        const keyInput = document.getElementById('ai-api-key');
        if (keyInput) keyInput.value = savedKey;
    }
    // Auto-seed questions to Firestore on first load
    if (typeof seedQuestionsToFirestore === 'function' && typeof isFirebaseConfigured === 'function' && isFirebaseConfigured()) {
        seedQuestionsToFirestore().then(() => {
            console.log('✅ Question bank check/seed complete');
        });
    }
});

// ==================== AI GENERATE SOAL ====================

async function generateWithAI() {
    const apiKey = document.getElementById('ai-api-key').value.trim();
    const count = parseInt(document.getElementById('ai-count').value);
    const mode = document.getElementById('ai-mode').value;
    const statusEl = document.getElementById('ai-status');
    const btnEl = document.getElementById('btn-ai-generate');

    if (!apiKey) {
        showAIStatus('❌ Masukkan API Key OpenAI terlebih dahulu!', 'error');
        return;
    }

    // Save API key for convenience
    localStorage.setItem('openai_api_key', apiKey);

    const materi = MATERI_KISI[currentSubjectTab];
    if (!materi) {
        showAIStatus('❌ Materi tidak ditemukan untuk mata pelajaran ini.', 'error');
        return;
    }

    // Build prompt
    const prompt = buildPrompt(materi, count);

    // Show loading
    btnEl.disabled = true;
    btnEl.textContent = '⏳ Generating...';
    showAIStatus('🔄 Sedang generate soal dengan AI... Mohon tunggu...', 'loading');

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                    {
                        role: 'system',
                        content: 'Kamu adalah guru SD kelas 1 yang sangat berpengalaman dan ahli dalam membuat soal ujian pilihan ganda berdasarkan Kurikulum Merdeka / Kurikulum 2026 Indonesia. Kamu memahami Capaian Pembelajaran (CP) dan Alur Tujuan Pembelajaran (ATP) untuk jenjang SD kelas 1. Buat soal yang sesuai untuk anak kelas 1 SD (usia 6-7 tahun) dengan pendekatan kontekstual dan menyenangkan. Soal harus sederhana, jelas, konkret, dan mudah dipahami anak-anak Indonesia. SELALU jawab dalam format JSON yang valid.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.8,
                max_tokens: 4000
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `HTTP ${response.status}`);
        }

        const data = await response.json();
        const content = data.choices[0].message.content;

        // Parse JSON from response
        const questions = parseAIResponse(content);

        if (questions.length === 0) {
            throw new Error('AI tidak menghasilkan soal yang valid. Coba lagi.');
        }

        // Save to question bank
        if (mode === 'ganti') {
            saveQuestionBank(currentSubjectTab, questions);
        } else {
            const existing = getQuestionBank(currentSubjectTab);
            const combined = [...existing, ...questions];
            saveQuestionBank(currentSubjectTab, combined);
        }

        showAIStatus(`✅ Berhasil generate ${questions.length} soal baru!`, 'success');
        renderQuestions();

    } catch (error) {
        showAIStatus(`❌ Error: ${error.message}`, 'error');
    } finally {
        btnEl.disabled = false;
        btnEl.textContent = '🤖 Generate Soal AI';
    }
}

function buildPrompt(materi, count) {
    const cpText = materi.capaianPembelajaran ? `\nCAPAIAN PEMBELAJARAN:\n${materi.capaianPembelajaran}\n` : '';

    return `Buatkan ${count} soal pilihan ganda untuk Sumatif Akhir Tahun (SAT) mata pelajaran ${materi.name} ${materi.kelas}.

KURIKULUM: ${materi.kurikulum || 'Kurikulum Merdeka 2026'}
JENJANG: SD/MI Kelas 1 (usia 6-7 tahun)
TAHUN AJARAN: 2025/2026
JENIS UJIAN: Sumatif Akhir Tahun (SAT) Semester 2
${cpText}
MATERI/KISI-KISI SESUAI KURIKULUM 2026:
${materi.materi.map((m, i) => `${i + 1}. ${m}`).join('\n')}

ATURAN PEMBUATAN SOAL:
- Soal WAJIB berdasarkan Kurikulum Merdeka / Kurikulum 2026 Indonesia
- Setiap soal memiliki 4 pilihan jawaban (A, B, C, D)
- Soal harus sesuai tingkat perkembangan anak kelas 1 SD (sederhana, konkret, dan mudah dipahami)
- Gunakan pendekatan kontekstual sesuai kehidupan sehari-hari anak Indonesia
- Sebar soal merata dari SEMUA materi/kisi-kisi di atas
- Bahasa yang digunakan sederhana, kalimat pendek, menggunakan Bahasa Indonesia baku
- Pastikan jawaban benar tersebar merata (tidak selalu A atau B)
- Soal mengukur pemahaman, bukan hanya hafalan
- Hindari soal yang ambigu atau membingungkan anak kelas 1

FORMAT JAWABAN (WAJIB JSON VALID):
[
  {
    "question": "Pertanyaan soal?",
    "options": ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
    "answer": 0
  }
]

Keterangan: "answer" adalah index (0=A, 1=B, 2=C, 3=D)

PENTING: Jawab HANYA dengan JSON array, tanpa teks tambahan di luar JSON.`;
}

function parseAIResponse(content) {
    try {
        // Try to extract JSON from the response
        let jsonStr = content.trim();
        
        // Remove markdown code block if present
        if (jsonStr.startsWith('```json')) {
            jsonStr = jsonStr.replace(/^```json\s*/, '').replace(/\s*```$/, '');
        } else if (jsonStr.startsWith('```')) {
            jsonStr = jsonStr.replace(/^```\s*/, '').replace(/\s*```$/, '');
        }

        const parsed = JSON.parse(jsonStr);

        // Validate structure
        if (!Array.isArray(parsed)) return [];

        return parsed.filter(q => {
            return q.question && 
                   Array.isArray(q.options) && 
                   q.options.length === 4 &&
                   typeof q.answer === 'number' &&
                   q.answer >= 0 && q.answer <= 3;
        });
    } catch (e) {
        // Try to find JSON array in the content
        const match = content.match(/\[[\s\S]*\]/);
        if (match) {
            try {
                const parsed = JSON.parse(match[0]);
                if (Array.isArray(parsed)) {
                    return parsed.filter(q => {
                        return q.question && 
                               Array.isArray(q.options) && 
                               q.options.length === 4 &&
                               typeof q.answer === 'number' &&
                               q.answer >= 0 && q.answer <= 3;
                    });
                }
            } catch (e2) {}
        }
        return [];
    }
}

function showAIStatus(message, type) {
    const statusEl = document.getElementById('ai-status');
    statusEl.style.display = 'block';
    statusEl.className = `ai-status ${type}`;
    statusEl.textContent = message;

    if (type === 'success') {
        setTimeout(() => {
            statusEl.style.display = 'none';
        }, 5000);
    }
}
