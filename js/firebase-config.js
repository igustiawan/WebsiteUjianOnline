// ==================== FIREBASE CONFIGURATION ====================
// INSTRUKSI SETUP:
// 1. Buka https://console.firebase.google.com/
// 2. Buat project baru (atau pakai yang sudah ada)
// 3. Tambahkan Web App di project settings
// 4. Copy konfigurasi Firebase ke bawah ini
// 5. Aktifkan Firestore Database di Firebase Console
//    - Pilih "Start in test mode" untuk development
//    - Atau set rules untuk production

const firebaseConfig = {
    apiKey: "AIzaSyCishYiSD8YZIf_jSmelKA96n8bRcmTnws",
    authDomain: "ujian-online-anak.firebaseapp.com",
    projectId: "ujian-online-anak",
    storageBucket: "ujian-online-anak.firebasestorage.app",
    messagingSenderId: "935415091174",
    appId: "1:935415091174:web:937ecdb9109f50df709027",
    measurementId: "G-TNRV9KPV6E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ==================== FIRESTORE HELPER FUNCTIONS ====================

// Simpan hasil ujian ke Firestore
async function saveExamToFirestore(record) {
    try {
        await db.collection('examHistory').add({
            ...record,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('✅ Data berhasil disimpan ke Firebase');
        return true;
    } catch (error) {
        console.error('❌ Gagal simpan ke Firebase:', error);
        // Fallback ke localStorage
        saveToLocalStorage(record);
        return false;
    }
}

// Ambil semua history dari Firestore
async function getExamHistoryFromFirestore(subjectFilter = null) {
    try {
        let query = db.collection('examHistory').orderBy('timestamp', 'desc');
        
        if (subjectFilter && subjectFilter !== 'all') {
            query = query.where('subject', '==', subjectFilter);
        }

        const snapshot = await query.get();
        const history = [];
        snapshot.forEach(doc => {
            history.push({ id: doc.id, ...doc.data() });
        });
        return history;
    } catch (error) {
        console.error('❌ Gagal ambil data dari Firebase:', error);
        // Fallback ke localStorage
        return getFromLocalStorage();
    }
}

// Ambil statistik per mata pelajaran
async function getSubjectStats() {
    try {
        const snapshot = await db.collection('examHistory').get();
        const stats = {};
        
        snapshot.forEach(doc => {
            const data = doc.data();
            if (!stats[data.subject]) {
                stats[data.subject] = {
                    attempts: 0,
                    totalCorrect: 0,
                    totalWrong: 0,
                    totalScore: 0,
                    lastAttempt: null
                };
            }
            stats[data.subject].attempts++;
            stats[data.subject].totalCorrect += data.correct || 0;
            stats[data.subject].totalWrong += data.wrong || 0;
            stats[data.subject].totalScore += data.score || 0;
            
            const date = data.timestamp ? data.timestamp.toDate() : new Date(data.date);
            if (!stats[data.subject].lastAttempt || date > stats[data.subject].lastAttempt) {
                stats[data.subject].lastAttempt = date;
            }
        });

        return stats;
    } catch (error) {
        console.error('❌ Gagal ambil statistik:', error);
        return {};
    }
}

// Hapus semua history dari Firestore
async function clearAllHistory() {
    try {
        const snapshot = await db.collection('examHistory').get();
        const batch = db.batch();
        snapshot.forEach(doc => {
            batch.delete(doc.ref);
        });
        await batch.commit();
        console.log('✅ Semua history berhasil dihapus');
        return true;
    } catch (error) {
        console.error('❌ Gagal hapus history:', error);
        return false;
    }
}

// Hapus satu record
async function deleteExamRecord(docId) {
    try {
        await db.collection('examHistory').doc(docId).delete();
        return true;
    } catch (error) {
        console.error('❌ Gagal hapus record:', error);
        return false;
    }
}

// ==================== FALLBACK: LOCALSTORAGE ====================

function saveToLocalStorage(record) {
    const history = JSON.parse(localStorage.getItem('examHistory') || '[]');
    history.unshift(record);
    localStorage.setItem('examHistory', JSON.stringify(history));
}

function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('examHistory') || '[]');
}

// ==================== CHECK FIREBASE CONNECTION ====================

function isFirebaseConfigured() {
    return firebaseConfig.apiKey !== "YOUR_API_KEY" && firebaseConfig.projectId !== "YOUR_PROJECT_ID";
}

// ==================== QUESTION BANK IN FIRESTORE ====================

// Upload semua soal default ke Firestore (1x saja saat pertama kali)
async function seedQuestionsToFirestore() {
    if (!isFirebaseConfigured()) return false;

    const subjects = {
        'pai': typeof soalPAI !== 'undefined' ? soalPAI : [],
        'ppkn': typeof soalPPKN !== 'undefined' ? soalPPKN : [],
        'matematika': typeof soalMatematika !== 'undefined' ? soalMatematika : [],
        'bahasa_indonesia': typeof soalBahasaIndonesia !== 'undefined' ? soalBahasaIndonesia : [],
        'bahasa_arab': typeof soalBahasaArab !== 'undefined' ? soalBahasaArab : [],
        'bahasa_inggris': typeof soalBahasaInggris !== 'undefined' ? soalBahasaInggris : []
    };

    try {
        for (const [subject, questions] of Object.entries(subjects)) {
            if (questions.length === 0) continue;
            const existing = await db.collection('questionBank').doc(subject).get();
            if (existing.exists && existing.data().questions && existing.data().questions.length > 0) {
                continue;
            }
            await db.collection('questionBank').doc(subject).set({
                subject: subject,
                questions: questions,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            console.log(`✅ Seeded ${questions.length} soal ${subject} ke Firestore`);
        }
        return true;
    } catch (error) {
        console.error('❌ Gagal seed soal ke Firestore:', error);
        return false;
    }
}

// Ambil bank soal dari Firestore
async function getQuestionsFromFirestore(subject) {
    if (!isFirebaseConfigured()) return null;
    try {
        const doc = await db.collection('questionBank').doc(subject).get();
        if (doc.exists && doc.data().questions) {
            return doc.data().questions;
        }
        return null;
    } catch (error) {
        console.error('❌ Gagal ambil soal dari Firestore:', error);
        return null;
    }
}

// Simpan bank soal ke Firestore
async function saveQuestionsToFirestore(subject, questions) {
    if (!isFirebaseConfigured()) return false;
    try {
        await db.collection('questionBank').doc(subject).set({
            subject: subject,
            questions: questions,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log(`✅ Soal ${subject} disimpan ke Firestore (${questions.length} soal)`);
        return true;
    } catch (error) {
        console.error('❌ Gagal simpan soal ke Firestore:', error);
        return false;
    }
}

// Get question bank - tries Firestore first, then localStorage, then default JS
async function getQuestionBankAsync(subject) {
    if (isFirebaseConfigured()) {
        const firestoreQ = await getQuestionsFromFirestore(subject);
        if (firestoreQ && firestoreQ.length > 0) return firestoreQ;
    }
    const custom = localStorage.getItem(`questions_${subject}`);
    if (custom) return JSON.parse(custom);
    switch(subject) {
        case 'pai': return typeof soalPAI !== 'undefined' ? [...soalPAI] : [];
        case 'ppkn': return typeof soalPPKN !== 'undefined' ? [...soalPPKN] : [];
        case 'matematika': return typeof soalMatematika !== 'undefined' ? [...soalMatematika] : [];
        case 'bahasa_indonesia': return typeof soalBahasaIndonesia !== 'undefined' ? [...soalBahasaIndonesia] : [];
        case 'bahasa_arab': return typeof soalBahasaArab !== 'undefined' ? [...soalBahasaArab] : [];
        case 'bahasa_inggris': return typeof soalBahasaInggris !== 'undefined' ? [...soalBahasaInggris] : [];
        default: return [];
    }
}
