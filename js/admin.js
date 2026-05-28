// ==================== ADMIN CONFIG ====================
// Admin uses Google Sign-In - only these emails have access
const ADMIN_EMAILS = ['igustiawan46@gmail.com']; // Email admin yang punya akses

let currentEditIndex = null;
let currentSubjectTab = 'pai';

// ==================== LOGIN ====================

function checkAuth() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user && ADMIN_EMAILS.includes(user.email)) {
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('admin-page').style.display = 'block';
            showPage('dashboard');
        }
    });
}

function handleLogin(e) {
    e.preventDefault();
    var errorEl = document.getElementById('login-error');
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        if (ADMIN_EMAILS.includes(result.user.email)) {
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('admin-page').style.display = 'block';
            showPage('dashboard');
        } else {
            firebase.auth().signOut();
            errorEl.textContent = 'Email ini tidak memiliki akses admin!';
            errorEl.style.display = 'block';
        }
    }).catch(function(error) {
        if (error.code !== 'auth/popup-closed-by-user') {
            errorEl.textContent = 'Gagal login: ' + error.message;
            errorEl.style.display = 'block';
        }
    });
}

function handleLogout() {
    firebase.auth().signOut().then(function() {
        document.getElementById('login-page').style.display = 'block';
        document.getElementById('admin-page').style.display = 'none';
    });
}

// ==================== PAGE NAVIGATION ====================

function showPage(page) {
    document.getElementById('dashboard-section').style.display = page === 'dashboard' ? 'block' : 'none';
    document.getElementById('questions-section').style.display = page === 'questions' ? 'block' : 'none';
    document.getElementById('history-section').style.display = page === 'history' ? 'block' : 'none';
    document.getElementById('settings-section').style.display = page === 'settings' ? 'block' : 'none';

    if (page === 'dashboard') {
        renderDashboard();
    } else if (page === 'questions') {
        renderSubjectTabs();
        renderQuestions();
    } else if (page === 'history') {
        loadUserFilter();
        renderHistory();
    } else if (page === 'settings') {
        loadExamSettings();
    }
}

// ==================== HELPERS ====================

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} menit ${secs} detik`;
}

// ==================== DASHBOARD ====================

async function renderDashboard() {
    const statsGrid = document.getElementById('stats-grid');
    const summaryBox = document.getElementById('summary-box');
    statsGrid.innerHTML = '<div class="empty-state">Memuat data...</div>';

    const subjects = ['pai', 'ppkn', 'matematika', 'bahasa_indonesia', 'bahasa_arab', 'bahasa_inggris'];
    var allHistory;

    if (typeof isFirebaseConfigured === 'function' && isFirebaseConfigured()) {
        try {
            allHistory = await getExamHistoryFromFirestore();
        } catch (e) {
            allHistory = getHistory();
        }
    } else {
        allHistory = getHistory();
    }

    // Populate user filter
    var dashUserFilter = document.getElementById('dashboard-user-filter');
    var currentVal = dashUserFilter.value;
    if (dashUserFilter.options.length <= 1) {
        var users = {};
        allHistory.forEach(function(h) {
            if (h.studentName && !users[h.studentName]) {
                users[h.studentName] = h.studentEmail || '';
            }
        });
        Object.keys(users).forEach(function(name) {
            var opt = document.createElement('option');
            opt.value = name;
            opt.textContent = name + (users[name] ? ' (' + users[name] + ')' : '');
            dashUserFilter.appendChild(opt);
        });
        if (currentVal) dashUserFilter.value = currentVal;
    }

    // Apply user filter
    var userFilter = dashUserFilter.value;
    var history = allHistory;
    if (userFilter && userFilter !== 'all') {
        history = allHistory.filter(function(h) { return h.studentName === userFilter; });
    }

    statsGrid.innerHTML = '';
    let totalCorrect = 0;
    let totalWrong = 0;
    let totalAttempts = 0;

    subjects.forEach(function(subject) {
        const subjectHistory = history.filter(function(h) { return h.subject === subject; });
        const attempts = subjectHistory.length;
        const correct = subjectHistory.reduce(function(sum, h) { return sum + (h.correct || 0); }, 0);
        const wrong = subjectHistory.reduce(function(sum, h) { return sum + (h.wrong || 0); }, 0);
        const avgScore = attempts > 0 ? Math.round(subjectHistory.reduce(function(sum, h) { return sum + (h.score || 0); }, 0) / attempts) : 0;
        const lastAttempt = subjectHistory.length > 0 ? (subjectHistory[0].date || '-') : '-';

        totalCorrect += correct;
        totalWrong += wrong;
        totalAttempts += attempts;

        const card = document.createElement('div');
        card.className = 'stat-card';
        card.innerHTML = '<div class="stat-icon">' + getSubjectIcon(subject) + '</div>' +
            '<h3>' + getSubjectName(subject) + '</h3>' +
            '<div class="stat-details">' +
            '<div class="stat-row"><span>Jumlah Ujian:</span><strong>' + attempts + 'x</strong></div>' +
            '<div class="stat-row"><span>Total Benar:</span><strong class="text-success">' + correct + '</strong></div>' +
            '<div class="stat-row"><span>Total Salah:</span><strong class="text-danger">' + wrong + '</strong></div>' +
            '<div class="stat-row"><span>Rata-rata Skor:</span><strong class="text-primary">' + avgScore + '/100</strong></div>' +
            '<div class="stat-row"><span>Terakhir Ujian:</span><small>' + lastAttempt + '</small></div>' +
            '</div>' +
            (attempts > 0 ? '<div class="progress-bar"><div class="progress-fill" style="width: ' + avgScore + '%"></div></div>' : '<div class="no-data">Belum ada data</div>');
        statsGrid.appendChild(card);
    });

    const overallAvg = totalAttempts > 0 ? Math.round(((totalCorrect / (totalCorrect + totalWrong)) * 100)) : 0;
    summaryBox.innerHTML = '<div class="summary-stats">' +
        '<div class="summary-item"><span class="summary-number">' + totalAttempts + '</span><span class="summary-label">Total Ujian</span></div>' +
        '<div class="summary-item"><span class="summary-number text-success">' + totalCorrect + '</span><span class="summary-label">Total Benar</span></div>' +
        '<div class="summary-item"><span class="summary-number text-danger">' + totalWrong + '</span><span class="summary-label">Total Salah</span></div>' +
        '<div class="summary-item"><span class="summary-number text-primary">' + overallAvg + '%</span><span class="summary-label">Akurasi</span></div>' +
        '</div>';
}

// ==================== QUESTION MANAGEMENT ====================

async function getQuestionBankFromDB(subject) {
    var firestoreQ = await getQuestionsFromFirestore(subject);
    if (firestoreQ && firestoreQ.length > 0) return firestoreQ;
    var custom = localStorage.getItem('questions_' + subject);
    if (custom) return JSON.parse(custom);
    return [];
}

function saveQuestionBank(subject, questions) {
    localStorage.setItem('questions_' + subject, JSON.stringify(questions));
    if (typeof saveQuestionsToFirestore === 'function' && typeof isFirebaseConfigured === 'function' && isFirebaseConfigured()) {
        saveQuestionsToFirestore(subject, questions);
    }
}

function renderSubjectTabs() {
    var subjects = ['pai', 'ppkn', 'matematika', 'bahasa_indonesia', 'bahasa_arab', 'bahasa_inggris'];
    var tabsContainer = document.getElementById('subject-tabs');
    tabsContainer.innerHTML = '';

    subjects.forEach(function(subject) {
        var tab = document.createElement('button');
        tab.className = 'tab-btn' + (subject === currentSubjectTab ? ' active' : '');
        tab.textContent = getSubjectIcon(subject) + ' ' + getSubjectName(subject);
        tab.onclick = function() {
            currentSubjectTab = subject;
            renderSubjectTabs();
            renderQuestions();
        };
        tabsContainer.appendChild(tab);
    });
}

async function renderQuestions() {
    var container = document.getElementById('question-list');
    container.innerHTML = '<div class="empty-state">Memuat soal...</div>';

    var questions = await getQuestionBankFromDB(currentSubjectTab);
    container.innerHTML = '';

    if (questions.length === 0) {
        container.innerHTML = '<div class="empty-state">Belum ada soal. Gunakan AI Generate atau tambah manual.</div>';
        return;
    }

    var letters = ['A', 'B', 'C', 'D'];
    questions.forEach(function(q, index) {
        var card = document.createElement('div');
        card.className = 'question-card';
        card.innerHTML = '<div class="question-card-header"><span class="q-number">Soal ' + (index + 1) + '</span>' +
            '<div class="q-actions"><button class="btn btn-sm btn-primary" onclick="editQuestion(' + index + ')">Edit</button>' +
            '<button class="btn btn-sm btn-danger" onclick="deleteQuestion(' + index + ')">Hapus</button></div></div>' +
            '<p class="q-text">' + q.question + '</p>' +
            '<div class="q-options">' + q.options.map(function(opt, i) {
                return '<span class="' + (i === q.answer ? 'correct-answer' : '') + '">' + letters[i] + '. ' + opt + '</span>';
            }).join('') + '</div>';
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

async function editQuestion(index) {
    var questions = await getQuestionBankFromDB(currentSubjectTab);
    var q = questions[index];
    currentEditIndex = index;
    document.getElementById('modal-title').textContent = 'Edit Soal ' + (index + 1);
    document.getElementById('q-text').value = q.question;
    document.getElementById('q-opt-a').value = q.options[0];
    document.getElementById('q-opt-b').value = q.options[1];
    document.getElementById('q-opt-c').value = q.options[2];
    document.getElementById('q-opt-d').value = q.options[3];
    document.getElementById('q-answer').value = q.answer.toString();
    document.getElementById('question-modal').style.display = 'flex';
}

async function saveQuestion(e) {
    e.preventDefault();
    var question = {
        question: document.getElementById('q-text').value,
        options: [
            document.getElementById('q-opt-a').value,
            document.getElementById('q-opt-b').value,
            document.getElementById('q-opt-c').value,
            document.getElementById('q-opt-d').value
        ],
        answer: parseInt(document.getElementById('q-answer').value)
    };
    var questions = await getQuestionBankFromDB(currentSubjectTab);
    if (currentEditIndex !== null) {
        questions[currentEditIndex] = question;
    } else {
        questions.push(question);
    }
    saveQuestionBank(currentSubjectTab, questions);
    closeModal();
    renderQuestions();
}

async function deleteQuestion(index) {
    if (!confirm('Yakin ingin menghapus soal ' + (index + 1) + '?')) return;
    var questions = await getQuestionBankFromDB(currentSubjectTab);
    questions.splice(index, 1);
    saveQuestionBank(currentSubjectTab, questions);
    renderQuestions();
}

function closeModal() {
    document.getElementById('question-modal').style.display = 'none';
}

// ==================== HISTORY ====================

async function loadUserFilter() {
    var userSelect = document.getElementById('history-user-filter');
    var currentVal = userSelect.value;
    userSelect.innerHTML = '<option value="all">Semua Siswa</option>';

    try {
        var history;
        if (typeof isFirebaseConfigured === 'function' && isFirebaseConfigured()) {
            history = await getExamHistoryFromFirestore();
        } else {
            history = getHistory();
        }
        var users = {};
        history.forEach(function(h) {
            if (h.studentName && !users[h.studentName]) {
                users[h.studentName] = h.studentEmail || '';
            }
        });
        Object.keys(users).forEach(function(name) {
            var opt = document.createElement('option');
            opt.value = name;
            opt.textContent = name + (users[name] ? ' (' + users[name] + ')' : '');
            userSelect.appendChild(opt);
        });
        if (currentVal) userSelect.value = currentVal;
    } catch (e) {
        console.error('loadUserFilter error:', e);
    }
}

async function renderHistory() {
    var filter = document.getElementById('history-filter').value;
    var userFilter = document.getElementById('history-user-filter').value;
    var container = document.getElementById('history-list');
    container.innerHTML = '<div class="empty-state">Memuat riwayat...</div>';

    var filtered;
    if (typeof isFirebaseConfigured === 'function' && isFirebaseConfigured()) {
        try {
            filtered = await getExamHistoryFromFirestore(filter);
        } catch (e) {
            var history = getHistory();
            filtered = filter === 'all' ? history : history.filter(function(h) { return h.subject === filter; });
        }
    } else {
        var history2 = getHistory();
        filtered = filter === 'all' ? history2 : history2.filter(function(h) { return h.subject === filter; });
    }

    // Apply user filter
    if (userFilter && userFilter !== 'all') {
        filtered = filtered.filter(function(h) { return h.studentName === userFilter; });
    }

    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state">Belum ada riwayat ujian.</div>';
        return;
    }

    container.innerHTML = '';
    filtered.forEach(function(record, idx) {
        var timeUsed = record.timeUsed ? formatTime(record.timeUsed) : '-';
        var dateStr = record.date || '-';
        var card = document.createElement('div');
        card.className = 'history-card';
        card.innerHTML = '<div class="history-card-header"><div>' +
            '<span class="history-subject">' + getSubjectIcon(record.subject) + ' ' + (record.subjectName || getSubjectName(record.subject)) + '</span>' +
            '<span class="history-date">' + dateStr + '</span></div>' +
            '<div class="history-score ' + (record.score >= 60 ? 'good' : 'bad') + '">' + record.score + '/100</div></div>' +
            '<div class="history-stats"><span class="text-success">Benar: ' + record.correct + '</span>' +
            '<span class="text-danger">Salah: ' + record.wrong + '</span>' +
            '<span>Waktu: ' + timeUsed + '</span>' +
            (record.studentName ? '<span>👤 ' + record.studentName + '</span>' : '') + '</div>' +
            '<button class="btn btn-sm btn-secondary" onclick="toggleDetails(' + idx + ')">Lihat Detail</button>' +
            '<div class="history-details" id="details-' + idx + '" style="display:none;"></div>';
        container.appendChild(card);
    });
    window._currentFilteredHistory = filtered;
}

function toggleDetails(idx) {
    var filtered = window._currentFilteredHistory || [];
    var record = filtered[idx];
    var detailsEl = document.getElementById('details-' + idx);
    if (!record || !detailsEl) return;

    if (detailsEl.style.display === 'none') {
        detailsEl.style.display = 'block';
        if (record.details) {
            detailsEl.innerHTML = record.details.map(function(d) {
                return '<div class="detail-row ' + (d.isCorrect ? 'correct' : 'wrong') + '">' +
                    '<span>' + (d.isCorrect ? '✅' : '❌') + ' Soal ' + d.number + ': ' + d.question + '</span>' +
                    '<small>Jawaban: ' + d.userAnswer + (d.isCorrect ? '' : ' | Benar: ' + d.correctAnswer) + '</small></div>';
            }).join('');
        } else {
            detailsEl.innerHTML = '<p>Detail tidak tersedia.</p>';
        }
    } else {
        detailsEl.style.display = 'none';
    }
}

async function clearHistory() {
    if (!confirm('Yakin ingin menghapus SEMUA riwayat ujian?')) return;
    if (typeof isFirebaseConfigured === 'function' && isFirebaseConfigured()) {
        await clearAllHistory();
    }
    localStorage.removeItem('examHistory');
    renderHistory();
    renderDashboard();
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    var savedKey = localStorage.getItem('openai_api_key');
    if (savedKey) {
        var keyInput = document.getElementById('ai-api-key');
        if (keyInput) keyInput.value = savedKey;
    }
});

// ==================== AI GENERATE SOAL ====================

async function generateWithAI() {
    var apiKey = document.getElementById('ai-api-key').value.trim();
    var count = parseInt(document.getElementById('ai-count').value);
    var mode = document.getElementById('ai-mode').value;
    var btnEl = document.getElementById('btn-ai-generate');

    if (!apiKey) {
        showAIStatus('Masukkan API Key OpenAI terlebih dahulu!', 'error');
        return;
    }
    localStorage.setItem('openai_api_key', apiKey);

    var materi = MATERI_KISI[currentSubjectTab];
    if (!materi) {
        showAIStatus('Materi tidak ditemukan untuk mata pelajaran ini.', 'error');
        return;
    }

    var prompt = buildPrompt(materi, count);
    btnEl.disabled = true;
    btnEl.textContent = 'Generating...';
    showAIStatus('Sedang generate soal dengan AI... Mohon tunggu...', 'loading');

    try {
        var response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + apiKey },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                    { role: 'system', content: 'Kamu adalah guru SD kelas 1 yang sangat berpengalaman membuat soal ujian pilihan ganda berdasarkan Kurikulum Merdeka 2026 Indonesia. Buat soal sederhana untuk anak usia 6-7 tahun. SELALU jawab dalam format JSON yang valid.' },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.8,
                max_tokens: 4000
            })
        });

        if (!response.ok) {
            var errorData = await response.json();
            throw new Error(errorData.error?.message || 'HTTP ' + response.status);
        }

        var data = await response.json();
        var content = data.choices[0].message.content;
        var questions = parseAIResponse(content);

        if (questions.length === 0) {
            throw new Error('AI tidak menghasilkan soal yang valid. Coba lagi.');
        }

        if (mode === 'ganti') {
            saveQuestionBank(currentSubjectTab, questions);
        } else {
            var existing = await getQuestionBankFromDB(currentSubjectTab);
            saveQuestionBank(currentSubjectTab, existing.concat(questions));
        }

        showAIStatus('Berhasil generate ' + questions.length + ' soal baru!', 'success');
        renderQuestions();
    } catch (error) {
        showAIStatus('Error: ' + error.message, 'error');
    } finally {
        btnEl.disabled = false;
        btnEl.textContent = 'Generate Soal AI';
    }
}

function buildPrompt(materi, count) {
    var cpText = materi.capaianPembelajaran ? '\nCAPAIAN PEMBELAJARAN:\n' + materi.capaianPembelajaran + '\n' : '';
    return 'Buatkan ' + count + ' soal pilihan ganda untuk SAT ' + materi.name + ' ' + materi.kelas + '.\n\nKURIKULUM: Kurikulum Merdeka 2026\nJENJANG: SD/MI Kelas 1 (usia 6-7 tahun)\n' + cpText + '\nMATERI:\n' + materi.materi.map(function(m, i) { return (i + 1) + '. ' + m; }).join('\n') + '\n\nATURAN:\n- 4 pilihan jawaban (A,B,C,D)\n- Soal sederhana untuk anak kelas 1\n- Sebar merata dari semua materi\n- Jawaban benar tersebar merata\n\nFORMAT (JSON VALID):\n[{"question":"...","options":["A","B","C","D"],"answer":0}]\n\nJawab HANYA JSON array.';
}

function parseAIResponse(content) {
    try {
        var jsonStr = content.trim();
        if (jsonStr.startsWith('```json')) jsonStr = jsonStr.replace(/^```json\s*/, '').replace(/\s*```$/, '');
        else if (jsonStr.startsWith('```')) jsonStr = jsonStr.replace(/^```\s*/, '').replace(/\s*```$/, '');
        var parsed = JSON.parse(jsonStr);
        if (!Array.isArray(parsed)) return [];
        return parsed.filter(function(q) {
            return q.question && Array.isArray(q.options) && q.options.length === 4 && typeof q.answer === 'number' && q.answer >= 0 && q.answer <= 3;
        });
    } catch (e) {
        var match = content.match(/\[[\s\S]*\]/);
        if (match) {
            try {
                var parsed2 = JSON.parse(match[0]);
                if (Array.isArray(parsed2)) {
                    return parsed2.filter(function(q) {
                        return q.question && Array.isArray(q.options) && q.options.length === 4 && typeof q.answer === 'number' && q.answer >= 0 && q.answer <= 3;
                    });
                }
            } catch (e2) {}
        }
        return [];
    }
}

function showAIStatus(message, type) {
    var statusEl = document.getElementById('ai-status');
    statusEl.style.display = 'block';
    statusEl.className = 'ai-status ' + type;
    statusEl.textContent = message;
    if (type === 'success') {
        setTimeout(function() { statusEl.style.display = 'none'; }, 5000);
    }
}

// ==================== EXAM SETTINGS ====================

var examSettings = {
    pai: 20,
    ppkn: 20,
    matematika: 20,
    bahasa_indonesia: 20,
    bahasa_arab: 20,
    bahasa_inggris: 20
};

async function loadExamSettings() {
    var grid = document.getElementById('settings-grid');
    grid.innerHTML = '<div class="empty-state">Memuat pengaturan...</div>';

    if (typeof isFirebaseConfigured === 'function' && isFirebaseConfigured()) {
        try {
            var doc = await db.collection('settings').doc('exam').get();
            if (doc.exists && doc.data().questionsPerExam) {
                examSettings = doc.data().questionsPerExam;
            }
            if (doc.exists && typeof doc.data().showAnswers !== 'undefined') {
                document.getElementById('setting-show-answers').value = doc.data().showAnswers.toString();
            }
        } catch (e) {
            console.error('loadExamSettings error:', e);
        }
    }

    var subjects = ['pai', 'ppkn', 'matematika', 'bahasa_indonesia', 'bahasa_arab', 'bahasa_inggris'];
    grid.innerHTML = '';

    subjects.forEach(function(subject) {
        var count = examSettings[subject] || 20;
        var row = document.createElement('div');
        row.className = 'settings-row';
        row.innerHTML = '<label>' + getSubjectIcon(subject) + ' ' + getSubjectName(subject) + '</label>' +
            '<input type="number" id="setting-' + subject + '" value="' + count + '" min="5" max="50" step="5">' +
            '<span class="settings-hint">soal</span>';
        grid.appendChild(row);
    });
}

async function saveExamSettings() {
    var subjects = ['pai', 'ppkn', 'matematika', 'bahasa_indonesia', 'bahasa_arab', 'bahasa_inggris'];
    var newSettings = {};

    subjects.forEach(function(subject) {
        var input = document.getElementById('setting-' + subject);
        newSettings[subject] = parseInt(input.value) || 20;
    });

    examSettings = newSettings;
    var showAnswers = document.getElementById('setting-show-answers').value === 'true';

    var statusEl = document.getElementById('settings-status');
    statusEl.style.display = 'block';
    statusEl.className = 'ai-status loading';
    statusEl.textContent = 'Menyimpan pengaturan...';

    try {
        if (typeof isFirebaseConfigured === 'function' && isFirebaseConfigured()) {
            await db.collection('settings').doc('exam').set({
                questionsPerExam: newSettings,
                showAnswers: showAnswers,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        }
        localStorage.setItem('examSettings', JSON.stringify(newSettings));
        statusEl.className = 'ai-status success';
        statusEl.textContent = 'Pengaturan berhasil disimpan!';
        setTimeout(function() { statusEl.style.display = 'none'; }, 3000);
    } catch (e) {
        statusEl.className = 'ai-status error';
        statusEl.textContent = 'Gagal menyimpan: ' + e.message;
    }
}
