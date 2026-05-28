// Soal Bahasa Arab - Kurikulum Merdeka 2026 - Kelas 1 SD
// SAT TA 2025/2026 Semester 2
// Bank Soal: 100 soal | Keluar di ujian: 15 soal (acak)
const soalBahasaArab = [
    // === BAB 6: PERABOT DI DAPUR 1 ===
    {
        question: "Apa bahasa Arab dari 'piring'?",
        options: ["صَحْن (Shahn)", "مِلْعَقَة (Mil'aqah)", "كُوْب (Kuub)", "سِكِّيْن (Sikkiin)"],
        answer: 0
    },
    {
        question: "Apa bahasa Arab dari 'gelas'?",
        options: ["صَحْن (Shahn)", "كُوْب (Kuub)", "قِدْر (Qidr)", "مِلْعَقَة (Mil'aqah)"],
        answer: 1
    },
    {
        question: "Apa bahasa Arab dari 'sendok'?",
        options: ["سِكِّيْن (Sikkiin)", "مِلْعَقَة (Mil'aqah)", "صَحْن (Shahn)", "كُوْب (Kuub)"],
        answer: 1
    },
    {
        question: "Apa bahasa Arab dari 'pisau'?",
        options: ["مِلْعَقَة (Mil'aqah)", "سِكِّيْن (Sikkiin)", "صَحْن (Shahn)", "كُوْب (Kuub)"],
        answer: 1
    },
    {
        question: "Apa bahasa Arab dari 'panci/periuk'?",
        options: ["صَحْن (Shahn)", "كُوْب (Kuub)", "قِدْر (Qidr)", "مِلْعَقَة (Mil'aqah)"],
        answer: 2
    },
    {
        question: "صَحْن (Shahn) artinya ...",
        options: ["Gelas", "Piring", "Sendok", "Pisau"],
        answer: 1
    },
    {
        question: "كُوْب (Kuub) artinya ...",
        options: ["Piring", "Sendok", "Gelas", "Pisau"],
        answer: 2
    },
    {
        question: "مِلْعَقَة (Mil'aqah) artinya ...",
        options: ["Pisau", "Piring", "Gelas", "Sendok"],
        answer: 3
    },
    {
        question: "سِكِّيْن (Sikkiin) artinya ...",
        options: ["Pisau", "Sendok", "Gelas", "Piring"],
        answer: 0
    },
    {
        question: "قِدْر (Qidr) artinya ...",
        options: ["Piring", "Gelas", "Panci", "Sendok"],
        answer: 2
    },

    // === BAB 7: PERABOT DI DAPUR 2 ===
    {
        question: "Apa bahasa Arab dari 'garpu'?",
        options: ["شَوْكَة (Syaukah)", "مِلْعَقَة (Mil'aqah)", "سِكِّيْن (Sikkiin)", "صَحْن (Shahn)"],
        answer: 0
    },
    {
        question: "Apa bahasa Arab dari 'teko'?",
        options: ["كُوْب (Kuub)", "إِبْرِيْق (Ibriiq)", "قِدْر (Qidr)", "صَحْن (Shahn)"],
        answer: 1
    },
    {
        question: "Apa bahasa Arab dari 'mangkuk'?",
        options: ["صَحْن (Shahn)", "زُبْدِيَّة (Zubdiyyah)", "كُوْب (Kuub)", "قِدْر (Qidr)"],
        answer: 1
    },
    {
        question: "Apa bahasa Arab dari 'termos'?",
        options: ["إِبْرِيْق (Ibriiq)", "تِرْمُس (Tirmus)", "كُوْب (Kuub)", "قِدْر (Qidr)"],
        answer: 1
    },
    {
        question: "Apa bahasa Arab dari 'kompor'?",
        options: ["فُرْن (Furn)", "مَوْقِد (Mauqid)", "قِدْر (Qidr)", "إِبْرِيْق (Ibriiq)"],
        answer: 1
    },
    {
        question: "شَوْكَة (Syaukah) artinya ...",
        options: ["Sendok", "Garpu", "Pisau", "Piring"],
        answer: 1
    },
    {
        question: "إِبْرِيْق (Ibriiq) artinya ...",
        options: ["Gelas", "Mangkuk", "Teko", "Panci"],
        answer: 2
    },
    {
        question: "زُبْدِيَّة (Zubdiyyah) artinya ...",
        options: ["Piring", "Mangkuk", "Gelas", "Sendok"],
        answer: 1
    },
    {
        question: "Perabot dapur yang digunakan untuk memotong adalah ...",
        options: ["مِلْعَقَة (Mil'aqah)", "سِكِّيْن (Sikkiin)", "صَحْن (Shahn)", "كُوْب (Kuub)"],
        answer: 1
    },
    {
        question: "Perabot dapur yang digunakan untuk memasak air adalah ...",
        options: ["صَحْن (Shahn)", "سِكِّيْن (Sikkiin)", "إِبْرِيْق (Ibriiq)", "مِلْعَقَة (Mil'aqah)"],
        answer: 2
    },

    // === BAB 8: HEWAN ===
    {
        question: "Apa bahasa Arab dari 'kucing'?",
        options: ["كَلْب (Kalb)", "قِطَّة (Qiththah)", "دَجَاجَة (Dajaajah)", "حِصَان (Hishaan)"],
        answer: 1
    },
    {
        question: "Apa bahasa Arab dari 'anjing'?",
        options: ["قِطَّة (Qiththah)", "دَجَاجَة (Dajaajah)", "كَلْب (Kalb)", "حِصَان (Hishaan)"],
        answer: 2
    },
    {
        question: "Apa bahasa Arab dari 'ayam'?",
        options: ["قِطَّة (Qiththah)", "كَلْب (Kalb)", "دَجَاجَة (Dajaajah)", "حِصَان (Hishaan)"],
        answer: 2
    },
    {
        question: "Apa bahasa Arab dari 'kuda'?",
        options: ["قِطَّة (Qiththah)", "كَلْب (Kalb)", "دَجَاجَة (Dajaajah)", "حِصَان (Hishaan)"],
        answer: 3
    },
    {
        question: "Apa bahasa Arab dari 'burung'?",
        options: ["عُصْفُوْر ('Ushfuur)", "سَمَكَة (Samakah)", "قِطَّة (Qiththah)", "كَلْب (Kalb)"],
        answer: 0
    },
    {
        question: "Apa bahasa Arab dari 'ikan'?",
        options: ["عُصْفُوْر ('Ushfuur)", "سَمَكَة (Samakah)", "دَجَاجَة (Dajaajah)", "حِصَان (Hishaan)"],
        answer: 1
    },
    {
        question: "Apa bahasa Arab dari 'kambing'?",
        options: ["بَقَرَة (Baqarah)", "مَاعِز (Maa'iz)", "حِصَان (Hishaan)", "دَجَاجَة (Dajaajah)"],
        answer: 1
    },
    {
        question: "Apa bahasa Arab dari 'sapi'?",
        options: ["مَاعِز (Maa'iz)", "بَقَرَة (Baqarah)", "حِصَان (Hishaan)", "كَلْب (Kalb)"],
        answer: 1
    },
    {
        question: "Apa bahasa Arab dari 'kelinci'?",
        options: ["أَرْنَب (Arnab)", "قِطَّة (Qiththah)", "كَلْب (Kalb)", "عُصْفُوْر ('Ushfuur)"],
        answer: 0
    },
    {
        question: "Apa bahasa Arab dari 'semut'?",
        options: ["عُصْفُوْر ('Ushfuur)", "سَمَكَة (Samakah)", "نَمْلَة (Namlah)", "أَرْنَب (Arnab)"],
        answer: 2
    },
    {
        question: "قِطَّة (Qiththah) artinya ...",
        options: ["Anjing", "Kucing", "Ayam", "Burung"],
        answer: 1
    },
    {
        question: "دَجَاجَة (Dajaajah) artinya ...",
        options: ["Kucing", "Anjing", "Ayam", "Kuda"],
        answer: 2
    },
    {
        question: "حِصَان (Hishaan) artinya ...",
        options: ["Sapi", "Kambing", "Ayam", "Kuda"],
        answer: 3
    },
    {
        question: "عُصْفُوْر ('Ushfuur) artinya ...",
        options: ["Ikan", "Burung", "Semut", "Kelinci"],
        answer: 1
    },
    {
        question: "سَمَكَة (Samakah) artinya ...",
        options: ["Burung", "Ikan", "Kelinci", "Semut"],
        answer: 1
    },
    {
        question: "أَرْنَب (Arnab) artinya ...",
        options: ["Kucing", "Anjing", "Kelinci", "Burung"],
        answer: 2
    },
    {
        question: "بَقَرَة (Baqarah) artinya ...",
        options: ["Kambing", "Sapi", "Kuda", "Ayam"],
        answer: 1
    },
    {
        question: "مَاعِز (Maa'iz) artinya ...",
        options: ["Sapi", "Kambing", "Kuda", "Kelinci"],
        answer: 1
    },
    {
        question: "Hewan yang hidup di air dalam bahasa Arab adalah ...",
        options: ["عُصْفُوْر ('Ushfuur)", "سَمَكَة (Samakah)", "قِطَّة (Qiththah)", "أَرْنَب (Arnab)"],
        answer: 1
    },
    {
        question: "نَمْلَة (Namlah) artinya ...",
        options: ["Lebah", "Kupu-kupu", "Semut", "Nyamuk"],
        answer: 2
    },

    // === BAB 9: BUAH-BUAHAN ===
    {
        question: "Apa bahasa Arab dari 'apel'?",
        options: ["مَوْز (Mauz)", "تُفَّاحَة (Tuffaahah)", "بُرْتُقَال (Burtuqaal)", "عِنَب ('Inab)"],
        answer: 1
    },
    {
        question: "Apa bahasa Arab dari 'pisang'?",
        options: ["تُفَّاحَة (Tuffaahah)", "بُرْتُقَال (Burtuqaal)", "مَوْز (Mauz)", "عِنَب ('Inab)"],
        answer: 2
    },
    {
        question: "Apa bahasa Arab dari 'jeruk'?",
        options: ["مَوْز (Mauz)", "تُفَّاحَة (Tuffaahah)", "عِنَب ('Inab)", "بُرْتُقَال (Burtuqaal)"],
        answer: 3
    },
    {
        question: "Apa bahasa Arab dari 'anggur'?",
        options: ["مَوْز (Mauz)", "عِنَب ('Inab)", "تُفَّاحَة (Tuffaahah)", "بُرْتُقَال (Burtuqaal)"],
        answer: 1
    },
    {
        question: "Apa bahasa Arab dari 'semangka'?",
        options: ["بِطِّيْخ (Biththiikh)", "مَوْز (Mauz)", "تُفَّاحَة (Tuffaahah)", "عِنَب ('Inab)"],
        answer: 0
    },
    {
        question: "Apa bahasa Arab dari 'mangga'?",
        options: ["بُرْتُقَال (Burtuqaal)", "مَانْجَا (Maanjaa)", "تُفَّاحَة (Tuffaahah)", "مَوْز (Mauz)"],
        answer: 1
    },
    {
        question: "Apa bahasa Arab dari 'kurma'?",
        options: ["عِنَب ('Inab)", "مَوْز (Mauz)", "تَمْر (Tamr)", "بُرْتُقَال (Burtuqaal)"],
        answer: 2
    },
    {
        question: "Apa bahasa Arab dari 'pepaya'?",
        options: ["بَابَايَا (Babaayaa)", "مَوْز (Mauz)", "تُفَّاحَة (Tuffaahah)", "بِطِّيْخ (Biththiikh)"],
        answer: 0
    },
    {
        question: "تُفَّاحَة (Tuffaahah) artinya ...",
        options: ["Pisang", "Jeruk", "Apel", "Anggur"],
        answer: 2
    },
    {
        question: "مَوْز (Mauz) artinya ...",
        options: ["Apel", "Pisang", "Jeruk", "Semangka"],
        answer: 1
    },
    {
        question: "بُرْتُقَال (Burtuqaal) artinya ...",
        options: ["Apel", "Pisang", "Jeruk", "Anggur"],
        answer: 2
    },
    {
        question: "عِنَب ('Inab) artinya ...",
        options: ["Semangka", "Mangga", "Kurma", "Anggur"],
        answer: 3
    },
    {
        question: "تَمْر (Tamr) artinya ...",
        options: ["Anggur", "Kurma", "Pisang", "Apel"],
        answer: 1
    },
    {
        question: "بِطِّيْخ (Biththiikh) artinya ...",
        options: ["Semangka", "Mangga", "Pepaya", "Jeruk"],
        answer: 0
    },
    {
        question: "Buah yang sering dimakan saat Ramadhan dalam bahasa Arab disebut ...",
        options: ["تُفَّاحَة (Tuffaahah)", "تَمْر (Tamr)", "مَوْز (Mauz)", "عِنَب ('Inab)"],
        answer: 1
    },
    {
        question: "Buah berwarna kuning panjang dalam bahasa Arab adalah ...",
        options: ["تُفَّاحَة (Tuffaahah)", "بُرْتُقَال (Burtuqaal)", "مَوْز (Mauz)", "عِنَب ('Inab)"],
        answer: 2
    },
    {
        question: "Buah berwarna oranye dan bulat dalam bahasa Arab adalah ...",
        options: ["تُفَّاحَة (Tuffaahah)", "بُرْتُقَال (Burtuqaal)", "مَوْز (Mauz)", "عِنَب ('Inab)"],
        answer: 1
    },
    {
        question: "Buah yang kecil-kecil dan bisa berwarna hijau/ungu dalam bahasa Arab adalah ...",
        options: ["تُفَّاحَة (Tuffaahah)", "بُرْتُقَال (Burtuqaal)", "مَوْز (Mauz)", "عِنَب ('Inab)"],
        answer: 3
    },
    {
        question: "Apa bahasa Arab dari 'nanas'?",
        options: ["أَنَانَاس (Anaanaas)", "مَوْز (Mauz)", "تُفَّاحَة (Tuffaahah)", "بِطِّيْخ (Biththiikh)"],
        answer: 0
    },
    {
        question: "أَنَانَاس (Anaanaas) artinya ...",
        options: ["Mangga", "Nanas", "Semangka", "Pepaya"],
        answer: 1
    },

    // === BAB 10: ALAT TRANSPORTASI ===
    {
        question: "Apa bahasa Arab dari 'mobil'?",
        options: ["سَيَّارَة (Sayyaarah)", "دَرَّاجَة (Darraajah)", "طَائِرَة (Thaa'irah)", "قِطَار (Qithaar)"],
        answer: 0
    },
    {
        question: "Apa bahasa Arab dari 'pesawat'?",
        options: ["سَيَّارَة (Sayyaarah)", "قِطَار (Qithaar)", "طَائِرَة (Thaa'irah)", "دَرَّاجَة (Darraajah)"],
        answer: 2
    },
    {
        question: "Apa bahasa Arab dari 'kereta api'?",
        options: ["سَيَّارَة (Sayyaarah)", "طَائِرَة (Thaa'irah)", "دَرَّاجَة (Darraajah)", "قِطَار (Qithaar)"],
        answer: 3
    },
    {
        question: "Apa bahasa Arab dari 'sepeda'?",
        options: ["سَيَّارَة (Sayyaarah)", "دَرَّاجَة (Darraajah)", "طَائِرَة (Thaa'irah)", "قِطَار (Qithaar)"],
        answer: 1
    },
    {
        question: "Apa bahasa Arab dari 'kapal'?",
        options: ["سَفِيْنَة (Safiinah)", "سَيَّارَة (Sayyaarah)", "طَائِرَة (Thaa'irah)", "قِطَار (Qithaar)"],
        answer: 0
    },
    {
        question: "Apa bahasa Arab dari 'bus'?",
        options: ["سَيَّارَة (Sayyaarah)", "حَافِلَة (Haafilah)", "قِطَار (Qithaar)", "دَرَّاجَة (Darraajah)"],
        answer: 1
    },
    {
        question: "Apa bahasa Arab dari 'sepeda motor'?",
        options: ["دَرَّاجَة نَارِيَّة (Darraajah Naariyyah)", "سَيَّارَة (Sayyaarah)", "حَافِلَة (Haafilah)", "قِطَار (Qithaar)"],
        answer: 0
    },
    {
        question: "سَيَّارَة (Sayyaarah) artinya ...",
        options: ["Pesawat", "Kereta", "Mobil", "Sepeda"],
        answer: 2
    },
    {
        question: "طَائِرَة (Thaa'irah) artinya ...",
        options: ["Mobil", "Pesawat", "Kereta", "Bus"],
        answer: 1
    },
    {
        question: "قِطَار (Qithaar) artinya ...",
        options: ["Mobil", "Bus", "Kapal", "Kereta api"],
        answer: 3
    },
    {
        question: "دَرَّاجَة (Darraajah) artinya ...",
        options: ["Sepeda", "Motor", "Mobil", "Bus"],
        answer: 0
    },
    {
        question: "سَفِيْنَة (Safiinah) artinya ...",
        options: ["Pesawat", "Kereta", "Bus", "Kapal"],
        answer: 3
    },
    {
        question: "حَافِلَة (Haafilah) artinya ...",
        options: ["Mobil", "Sepeda", "Bus", "Kapal"],
        answer: 2
    },
    {
        question: "Alat transportasi yang terbang di udara dalam bahasa Arab adalah ...",
        options: ["سَيَّارَة (Sayyaarah)", "سَفِيْنَة (Safiinah)", "طَائِرَة (Thaa'irah)", "قِطَار (Qithaar)"],
        answer: 2
    },
    {
        question: "Alat transportasi yang berjalan di atas rel dalam bahasa Arab adalah ...",
        options: ["سَيَّارَة (Sayyaarah)", "حَافِلَة (Haafilah)", "سَفِيْنَة (Safiinah)", "قِطَار (Qithaar)"],
        answer: 3
    },
    {
        question: "Alat transportasi yang berlayar di laut dalam bahasa Arab adalah ...",
        options: ["طَائِرَة (Thaa'irah)", "سَفِيْنَة (Safiinah)", "قِطَار (Qithaar)", "حَافِلَة (Haafilah)"],
        answer: 1
    },
    {
        question: "Alat transportasi roda dua tanpa mesin dalam bahasa Arab adalah ...",
        options: ["دَرَّاجَة نَارِيَّة (Darraajah Naariyyah)", "دَرَّاجَة (Darraajah)", "سَيَّارَة (Sayyaarah)", "حَافِلَة (Haafilah)"],
        answer: 1
    },
    {
        question: "Alat transportasi roda empat untuk keluarga dalam bahasa Arab adalah ...",
        options: ["دَرَّاجَة (Darraajah)", "قِطَار (Qithaar)", "سَيَّارَة (Sayyaarah)", "سَفِيْنَة (Safiinah)"],
        answer: 2
    },
    {
        question: "Alat transportasi besar yang mengangkut banyak penumpang di jalan raya adalah ...",
        options: ["دَرَّاجَة (Darraajah)", "سَيَّارَة (Sayyaarah)", "حَافِلَة (Haafilah)", "طَائِرَة (Thaa'irah)"],
        answer: 2
    },
    {
        question: "دَرَّاجَة نَارِيَّة (Darraajah Naariyyah) artinya ...",
        options: ["Sepeda", "Sepeda motor", "Mobil", "Bus"],
        answer: 1
    },
    // === CAMPURAN: REVIEW SEMUA BAB ===
    {
        question: "Tempat memasak makanan di rumah disebut ... (dapur)",
        options: ["مَطْبَخ (Mathbakh)", "غُرْفَة (Ghurfah)", "حَمَّام (Hammaam)", "فَصْل (Fashl)"],
        answer: 0
    },
    {
        question: "مَطْبَخ (Mathbakh) artinya ...",
        options: ["Kamar tidur", "Dapur", "Kamar mandi", "Ruang tamu"],
        answer: 1
    },
    {
        question: "Hewan berkaki empat yang suka minum susu dalam bahasa Arab ...",
        options: ["دَجَاجَة (Dajaajah)", "قِطَّة (Qiththah)", "سَمَكَة (Samakah)", "عُصْفُوْر ('Ushfuur)"],
        answer: 1
    },
    {
        question: "Hewan yang berkokok di pagi hari dalam bahasa Arab ...",
        options: ["قِطَّة (Qiththah)", "كَلْب (Kalb)", "دِيْك (Diik)", "أَرْنَب (Arnab)"],
        answer: 2
    },
    {
        question: "دِيْك (Diik) artinya ...",
        options: ["Bebek", "Ayam jantan/ayam jago", "Kucing", "Burung"],
        answer: 1
    },
    {
        question: "Buah yang berwarna merah dan sering dimakan mentah ...",
        options: ["مَوْز (Mauz)", "تُفَّاحَة (Tuffaahah)", "بُرْتُقَال (Burtuqaal)", "تَمْر (Tamr)"],
        answer: 1
    },
    {
        question: "Kendaraan yang paling cepat untuk perjalanan jauh antar negara ...",
        options: ["سَيَّارَة (Sayyaarah)", "حَافِلَة (Haafilah)", "طَائِرَة (Thaa'irah)", "دَرَّاجَة (Darraajah)"],
        answer: 2
    },
    {
        question: "Alat makan yang digunakan untuk mengaduk dalam bahasa Arab ...",
        options: ["سِكِّيْن (Sikkiin)", "شَوْكَة (Syaukah)", "مِلْعَقَة (Mil'aqah)", "صَحْن (Shahn)"],
        answer: 2
    },
    {
        question: "Alat makan yang digunakan untuk menusuk makanan dalam bahasa Arab ...",
        options: ["سِكِّيْن (Sikkiin)", "شَوْكَة (Syaukah)", "مِلْعَقَة (Mil'aqah)", "صَحْن (Shahn)"],
        answer: 1
    },
    {
        question: "Hewan yang bisa terbang dalam bahasa Arab ...",
        options: ["سَمَكَة (Samakah)", "أَرْنَب (Arnab)", "عُصْفُوْر ('Ushfuur)", "قِطَّة (Qiththah)"],
        answer: 2
    },
    {
        question: "Hewan yang hidup di padang rumput dan menghasilkan susu ...",
        options: ["قِطَّة (Qiththah)", "بَقَرَة (Baqarah)", "دَجَاجَة (Dajaajah)", "نَمْلَة (Namlah)"],
        answer: 1
    },
    {
        question: "Tempat meletakkan makanan sebelum dimakan dalam bahasa Arab ...",
        options: ["كُوْب (Kuub)", "صَحْن (Shahn)", "قِدْر (Qidr)", "إِبْرِيْق (Ibriiq)"],
        answer: 1
    },
    {
        question: "Tempat minum air/teh dalam bahasa Arab ...",
        options: ["صَحْن (Shahn)", "كُوْب (Kuub)", "قِدْر (Qidr)", "مِلْعَقَة (Mil'aqah)"],
        answer: 1
    },
    {
        question: "Buah berduri yang berwarna kuning dalam bahasa Arab ...",
        options: ["أَنَانَاس (Anaanaas)", "مَوْز (Mauz)", "تَمْر (Tamr)", "عِنَب ('Inab)"],
        answer: 0
    },
    {
        question: "Kendaraan umum yang berhenti di halte dalam bahasa Arab ...",
        options: ["سَيَّارَة (Sayyaarah)", "حَافِلَة (Haafilah)", "دَرَّاجَة (Darraajah)", "قِطَار (Qithaar)"],
        answer: 1
    },
    {
        question: "Hewan kecil yang hidup berkoloni dan rajin bekerja dalam bahasa Arab ...",
        options: ["أَرْنَب (Arnab)", "عُصْفُوْر ('Ushfuur)", "نَمْلَة (Namlah)", "سَمَكَة (Samakah)"],
        answer: 2
    },
    {
        question: "Kendaraan yang berjalan di atas air/laut ...",
        options: ["قِطَار (Qithaar)", "طَائِرَة (Thaa'irah)", "حَافِلَة (Haafilah)", "سَفِيْنَة (Safiinah)"],
        answer: 3
    },
    {
        question: "Hewan yang melompat dan telinganya panjang ...",
        options: ["قِطَّة (Qiththah)", "أَرْنَب (Arnab)", "كَلْب (Kalb)", "حِصَان (Hishaan)"],
        answer: 1
    },
    {
        question: "Buah yang besar, hijau di luar dan merah di dalam ...",
        options: ["تُفَّاحَة (Tuffaahah)", "مَوْز (Mauz)", "بِطِّيْخ (Biththiikh)", "بُرْتُقَال (Burtuqaal)"],
        answer: 2
    },
    {
        question: "Hewan yang bisa berlari kencang dan dinaiki manusia ...",
        options: ["بَقَرَة (Baqarah)", "مَاعِز (Maa'iz)", "حِصَان (Hishaan)", "دَجَاجَة (Dajaajah)"],
        answer: 2
    }
];
