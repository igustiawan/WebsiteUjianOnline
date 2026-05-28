// Soal PAI - Kurikulum Merdeka 2026 - Kelas 1 SD
// SAT TA 2025/2026 Semester 2
// Bank Soal: 100 soal | Keluar di ujian: 15 soal (acak)
const soalPAI = [
    // === MENGENAL HARAKAT & SURAH AL-IKHLAS ===
    {
        question: "Surah Al-Ikhlas terdiri dari berapa ayat?",
        options: ["3 ayat", "4 ayat", "5 ayat", "6 ayat"],
        answer: 1
    },
    {
        question: "Harakat fathah dibaca ...",
        options: ["I", "U", "A", "O"],
        answer: 2
    },
    {
        question: "Harakat kasrah dibaca ...",
        options: ["A", "I", "U", "O"],
        answer: 1
    },
    {
        question: "Harakat dhammah dibaca ...",
        options: ["A", "I", "U", "E"],
        answer: 2
    },
    {
        question: "Pesan pokok Surah Al-Ikhlas adalah tentang ...",
        options: ["Keesaan Allah Swt", "Kisah para nabi", "Hari kiamat", "Surga dan neraka"],
        answer: 0
    },
    {
        question: "Surah Al-Ikhlas terletak di juz ...",
        options: ["29", "30", "28", "27"],
        answer: 1
    },
    {
        question: "Arti kata 'Al-Ikhlas' adalah ...",
        options: ["Pembuka", "Kemurnian/Keikhlasan", "Penutup", "Pertolongan"],
        answer: 1
    },
    {
        question: "Ayat pertama Surah Al-Ikhlas berbunyi 'Qul huwallahu ...'",
        options: ["Ahad", "Shamad", "Akbar", "Rahman"],
        answer: 0
    },
    {
        question: "Dalam Surah Al-Ikhlas disebutkan bahwa Allah itu ...",
        options: ["Banyak", "Esa/Satu", "Dua", "Tiga"],
        answer: 1
    },
    {
        question: "Allah tidak beranak dan tidak pula diperanakkan. Ini terdapat dalam surah ...",
        options: ["Al-Fatihah", "An-Nas", "Al-Ikhlas", "Al-Falaq"],
        answer: 2
    },
    {
        question: "Tanda baca dalam Al-Quran disebut ...",
        options: ["Huruf", "Harakat", "Angka", "Titik"],
        answer: 1
    },
    {
        question: "Membaca Al-Quran harus dimulai dengan ...",
        options: ["Hamdalah", "Basmalah", "Takbir", "Salam"],
        answer: 1
    },
    {
        question: "Surah Al-Ikhlas diturunkan di kota ...",
        options: ["Madinah", "Makkah", "Jeddah", "Thaif"],
        answer: 1
    },
    {
        question: "Huruf pertama dalam Surah Al-Ikhlas adalah ...",
        options: ["Alif", "Qaf", "Ba", "Lam"],
        answer: 1
    },
    {
        question: "Membaca Surah Al-Ikhlas termasuk perbuatan ...",
        options: ["Tercela", "Terpuji/ibadah", "Biasa saja", "Dilarang"],
        answer: 1
    },
    // === BERIMAN KEPADA ALLAH SWT, ASMAUL HUSNA ===
    {
        question: "Asmaul Husna 'Ar-Rahman' artinya Allah Maha ...",
        options: ["Adil", "Besar", "Pengasih", "Mengetahui"],
        answer: 2
    },
    {
        question: "Asmaul Husna 'Ar-Rahim' artinya Allah Maha ...",
        options: ["Penyayang", "Kuasa", "Pengasih", "Pencipta"],
        answer: 0
    },
    {
        question: "Asmaul Husna artinya ...",
        options: ["Nama-nama buruk", "Nama-nama indah/baik milik Allah", "Nama malaikat", "Nama nabi"],
        answer: 1
    },
    {
        question: "Beriman kepada Allah artinya ...",
        options: ["Tidak percaya", "Percaya dan yakin bahwa Allah itu ada", "Ragu-ragu", "Takut"],
        answer: 1
    },
    {
        question: "Allah Maha Pengasih kepada ...",
        options: ["Orang kaya saja", "Semua makhluk", "Orang dewasa saja", "Hewan saja"],
        answer: 1
    },
    {
        question: "Allah Maha Penyayang, maka kita harus ...",
        options: ["Sombong", "Bersyukur dan beribadah", "Malas", "Takut berlebihan"],
        answer: 1
    },
    {
        question: "Siapa yang menciptakan langit dan bumi?",
        options: ["Manusia", "Allah Swt", "Malaikat", "Nabi"],
        answer: 1
    },
    {
        question: "Jumlah Asmaul Husna ada ...",
        options: ["25", "99", "100", "50"],
        answer: 1
    },
    {
        question: "Contoh sifat Ar-Rahman Allah dalam kehidupan sehari-hari adalah ...",
        options: ["Memberi hujan untuk semua makhluk", "Menghukum manusia", "Membuat manusia sengsara", "Tidak peduli"],
        answer: 0
    },
    {
        question: "Kita beriman kepada Allah karena Allah ...",
        options: ["Tidak ada", "Ada dan menciptakan semua", "Hanya dongeng", "Tidak penting"],
        answer: 1
    },
    // === BERTERIMA KASIH, DISIPLIN, JUJUR, MEMAAFKAN ===
    {
        question: "Ani meminjam pensil temannya. Setelah selesai, Ani harus ...",
        options: ["Menyimpannya sendiri", "Membuangnya", "Mengembalikan dan berterima kasih", "Diam saja"],
        answer: 2
    },
    {
        question: "Teman Budi tidak sengaja menumpahkan air ke bukunya. Sikap terbaik Budi adalah ...",
        options: ["Marah dan memukul", "Memaafkan teman", "Menangis keras", "Membalas dendam"],
        answer: 1
    },
    {
        question: "Berperilaku disiplin artinya kita harus ...",
        options: ["Datang terlambat", "Melakukan sesuatu tepat waktu", "Bermain terus", "Tidak mengerjakan tugas"],
        answer: 1
    },
    {
        question: "Anak yang jujur akan selalu ...",
        options: ["Berbohong", "Berkata yang sebenarnya", "Menipu teman", "Menyembunyikan kesalahan"],
        answer: 1
    },
    {
        question: "Ketika dibantu teman, kita mengucapkan ...",
        options: ["Maaf", "Terima kasih", "Permisi", "Selamat"],
        answer: 1
    },
    {
        question: "Saling memaafkan membuat hidup menjadi ...",
        options: ["Susah", "Damai dan tentram", "Membosankan", "Sedih"],
        answer: 1
    },
    {
        question: "Contoh perilaku disiplin di sekolah adalah ...",
        options: ["Datang terlambat", "Memakai seragam rapi dan datang tepat waktu", "Tidak mengerjakan PR", "Bermain saat pelajaran"],
        answer: 1
    },
    {
        question: "Dani menemukan uang di kelas. Sikap jujur Dani adalah ...",
        options: ["Menyimpan sendiri", "Menyerahkan kepada guru", "Membeli jajan", "Membuangnya"],
        answer: 1
    },
    {
        question: "Berkata jujur akan membuat kita ...",
        options: ["Dibenci teman", "Dipercaya orang lain", "Dihukum", "Dijauhi"],
        answer: 1
    },
    {
        question: "Ketika berbuat salah kepada teman, kita harus ...",
        options: ["Diam saja", "Meminta maaf", "Menyalahkan orang lain", "Kabur"],
        answer: 1
    },
    {
        question: "Orang yang selalu berterima kasih kepada Allah disebut orang yang ...",
        options: ["Sombong", "Bersyukur", "Kufur", "Malas"],
        answer: 1
    },
    {
        question: "Ibu memberi kita makanan enak. Kita harus ...",
        options: ["Diam saja", "Mengucapkan terima kasih", "Membuang makanan", "Marah"],
        answer: 1
    },
    {
        question: "Rina tidak sengaja menginjak kaki temannya. Rina sebaiknya ...",
        options: ["Pura-pura tidak tahu", "Segera minta maaf", "Lari", "Tertawa"],
        answer: 1
    },
    {
        question: "Memaafkan kesalahan teman membuat hati kita ...",
        options: ["Berat", "Tenang dan lega", "Sakit", "Marah"],
        answer: 1
    },
    {
        question: "Disiplin bangun pagi membuat kita ...",
        options: ["Terlambat ke sekolah", "Bisa beribadah dan siap-siap tepat waktu", "Malas", "Sakit"],
        answer: 1
    },
    // === PERILAKU HIDUP BERSIH, BERSUCI, WUDHU, TAYAMUM ===
    {
        question: "Sebelum shalat, kita harus bersuci dengan cara ...",
        options: ["Mandi", "Berwudhu", "Makan", "Tidur"],
        answer: 1
    },
    {
        question: "Jika tidak ada air, kita bisa bersuci dengan cara ...",
        options: ["Berwudhu", "Mencuci tangan", "Bertayamum", "Mandi hujan"],
        answer: 2
    },
    {
        question: "Wudhu dimulai dengan membaca ...",
        options: ["Salam", "Basmalah (Bismillah)", "Hamdalah", "Takbir"],
        answer: 1
    },
    {
        question: "Contoh perilaku hidup bersih adalah ...",
        options: ["Membuang sampah sembarangan", "Tidak mandi", "Mencuci tangan sebelum makan", "Membiarkan sampah berserakan"],
        answer: 2
    },
    {
        question: "Tayamum menggunakan ...",
        options: ["Air", "Debu/tanah yang suci", "Pasir pantai", "Batu"],
        answer: 1
    },
    {
        question: "Anggota wudhu yang pertama kali dibasuh adalah ...",
        options: ["Kaki", "Tangan sampai siku", "Wajah/muka", "Kepala"],
        answer: 0
    },
    {
        question: "Bersuci dari hadas kecil dilakukan dengan ...",
        options: ["Mandi wajib", "Berwudhu", "Tayamum saja", "Tidak perlu bersuci"],
        answer: 1
    },
    {
        question: "Menjaga kebersihan badan termasuk ajaran ...",
        options: ["Yang tidak penting", "Islam", "Yang membosankan", "Yang sulit"],
        answer: 1
    },
    {
        question: "Sebelum makan, kita harus ...",
        options: ["Langsung makan", "Mencuci tangan", "Bermain dulu", "Tidur dulu"],
        answer: 1
    },
    {
        question: "Kebersihan sebagian dari ...",
        options: ["Kemalasan", "Iman", "Permainan", "Pekerjaan"],
        answer: 1
    },
    {
        question: "Setelah buang air, kita harus ...",
        options: ["Langsung bermain", "Bersuci/membersihkan diri", "Tidur", "Makan"],
        answer: 1
    },
    {
        question: "Memotong kuku termasuk menjaga ...",
        options: ["Kemalasan", "Kebersihan", "Kesombongan", "Keburukan"],
        answer: 1
    },
    {
        question: "Pakaian yang kita pakai untuk shalat harus ...",
        options: ["Kotor", "Bersih dan suci", "Basah", "Robek"],
        answer: 1
    },
    {
        question: "Hal yang membatalkan wudhu salah satunya adalah ...",
        options: ["Makan", "Buang angin", "Minum", "Berbicara"],
        answer: 1
    },
    {
        question: "Mandi setiap hari termasuk perilaku ...",
        options: ["Boros", "Hidup bersih", "Tidak perlu", "Membuang waktu"],
        answer: 1
    },
    // === KISAH NABI ADAM AS & NABI MUHAMMAD SAW ===
    {
        question: "Nabi pertama yang diciptakan Allah Swt adalah ...",
        options: ["Nabi Muhammad Saw", "Nabi Ibrahim As", "Nabi Adam As", "Nabi Musa As"],
        answer: 2
    },
    {
        question: "Istri Nabi Adam As bernama ...",
        options: ["Siti Khadijah", "Siti Hawa", "Siti Maryam", "Siti Aisyah"],
        answer: 1
    },
    {
        question: "Nabi Adam As diciptakan Allah dari ...",
        options: ["Air", "Tanah", "Api", "Cahaya"],
        answer: 1
    },
    {
        question: "Nabi Adam As adalah manusia ... yang diciptakan Allah.",
        options: ["Terakhir", "Pertama", "Kedua", "Ketiga"],
        answer: 1
    },
    {
        question: "Keteladanan Nabi Adam As yang bisa kita contoh adalah ...",
        options: ["Sombong", "Bertaubat ketika berbuat salah", "Membantah perintah Allah", "Malas"],
        answer: 1
    },
    {
        question: "Nabi Muhammad Saw dikenal memiliki sifat ...",
        options: ["Pemarah", "Jujur dan dapat dipercaya", "Sombong", "Pemalas"],
        answer: 1
    },
    {
        question: "Nabi Muhammad Saw lahir di kota ...",
        options: ["Madinah", "Makkah", "Jeddah", "Thaif"],
        answer: 1
    },
    {
        question: "Gelar Nabi Muhammad Saw karena kejujurannya adalah ...",
        options: ["Al-Amin", "Al-Fatih", "Al-Hakim", "Ar-Rasyid"],
        answer: 0
    },
    {
        question: "Nabi Muhammad Saw diutus untuk ...",
        options: ["Berperang", "Menyempurnakan akhlak mulia", "Mencari harta", "Bermain"],
        answer: 1
    },
    {
        question: "Sifat Nabi Muhammad Saw yang berarti jujur adalah ...",
        options: ["Amanah", "Shiddiq", "Tabligh", "Fathonah"],
        answer: 1
    },
    {
        question: "Sifat Nabi Muhammad Saw yang berarti dapat dipercaya adalah ...",
        options: ["Shiddiq", "Amanah", "Tabligh", "Fathonah"],
        answer: 1
    },
    {
        question: "Keteladanan Nabi Muhammad Saw yang bisa kita contoh di sekolah adalah ...",
        options: ["Berbohong", "Berkata jujur dan menyayangi teman", "Berkelahi", "Sombong"],
        answer: 1
    },
    {
        question: "Nabi Adam As ditempatkan Allah di ...",
        options: ["Bumi langsung", "Surga", "Bulan", "Laut"],
        answer: 1
    },
    {
        question: "Malaikat diperintahkan Allah untuk sujud kepada ...",
        options: ["Nabi Muhammad", "Nabi Adam As", "Nabi Ibrahim", "Nabi Musa"],
        answer: 1
    },
    {
        question: "Yang tidak mau sujud kepada Nabi Adam As adalah ...",
        options: ["Malaikat Jibril", "Iblis", "Malaikat Mikail", "Malaikat Israfil"],
        answer: 1
    },
    {
        question: "Nabi Muhammad Saw menyayangi ...",
        options: ["Orang kaya saja", "Semua makhluk", "Diri sendiri saja", "Orang dewasa saja"],
        answer: 1
    },
    {
        question: "Kita mencintai Nabi Muhammad Saw dengan cara ...",
        options: ["Melanggar ajarannya", "Mengikuti sunnahnya", "Melupakannya", "Tidak peduli"],
        answer: 1
    },
    {
        question: "Nabi Adam As bertaubat kepada Allah setelah ...",
        options: ["Tidur", "Makan buah yang dilarang", "Bermain", "Berjalan-jalan"],
        answer: 1
    },
    {
        question: "Sifat Fathonah Nabi Muhammad Saw artinya ...",
        options: ["Jujur", "Menyampaikan", "Cerdas/pandai", "Dipercaya"],
        answer: 2
    },
    {
        question: "Agama yang dibawa Nabi Muhammad Saw adalah agama ...",
        options: ["Hindu", "Islam", "Budha", "Kristen"],
        answer: 1
    },
    // === CAMPURAN: ADAB & AKHLAK ===
    {
        question: "Sebelum tidur, kita sebaiknya ...",
        options: ["Bermain HP", "Berdoa", "Makan banyak", "Menonton TV"],
        answer: 1
    },
    {
        question: "Ketika bangun tidur, kita membaca ...",
        options: ["Doa sebelum makan", "Doa bangun tidur", "Doa bepergian", "Doa sebelum tidur"],
        answer: 1
    },
    {
        question: "Masuk rumah sebaiknya mengucapkan ...",
        options: ["Hai", "Assalamualaikum", "Halo", "Permisi"],
        answer: 1
    },
    {
        question: "Makan dan minum menggunakan tangan ...",
        options: ["Kiri", "Kanan", "Dua-duanya", "Tidak pakai tangan"],
        answer: 1
    },
    {
        question: "Sebelum makan, kita membaca ...",
        options: ["Doa sebelum tidur", "Doa sebelum makan (Bismillah)", "Doa bepergian", "Doa bangun tidur"],
        answer: 1
    },
    {
        question: "Sesudah makan, kita membaca ...",
        options: ["Basmalah", "Hamdalah (Alhamdulillah)", "Takbir", "Istighfar"],
        answer: 1
    },
    {
        question: "Kepada orang tua, kita harus ...",
        options: ["Membantah", "Berbakti dan patuh", "Marah-marah", "Tidak peduli"],
        answer: 1
    },
    {
        question: "Kepada guru, kita harus ...",
        options: ["Tidak sopan", "Hormat dan patuh", "Mengejek", "Membantah"],
        answer: 1
    },
    {
        question: "Ketika bertemu teman, kita mengucapkan ...",
        options: ["Diam saja", "Salam", "Mengejek", "Memukul"],
        answer: 1
    },
    {
        question: "Sikap sabar artinya ...",
        options: ["Marah-marah", "Menahan diri dan tidak mudah emosi", "Menangis", "Memukul"],
        answer: 1
    },
    {
        question: "Kita tidak boleh sombong karena semua yang kita punya berasal dari ...",
        options: ["Diri sendiri", "Allah Swt", "Teman", "Sekolah"],
        answer: 1
    },
    {
        question: "Berbagi dengan teman yang membutuhkan termasuk sifat ...",
        options: ["Pelit", "Dermawan", "Sombong", "Kikir"],
        answer: 1
    },
    {
        question: "Menghormati yang lebih tua dan menyayangi yang lebih muda adalah ajaran ...",
        options: ["Yang sulit", "Islam", "Yang aneh", "Yang tidak perlu"],
        answer: 1
    },
    {
        question: "Ketika menguap, kita sebaiknya ...",
        options: ["Berteriak", "Menutup mulut", "Membuka mulut lebar-lebar", "Tertawa"],
        answer: 1
    },
    {
        question: "Berkata yang baik atau ...",
        options: ["Berbicara terus", "Diam", "Berteriak", "Marah"],
        answer: 1
    },
    {
        question: "Shalat wajib dalam sehari dilakukan ... kali.",
        options: ["3", "4", "5", "6"],
        answer: 2
    },
    {
        question: "Sebelum belajar, kita membaca ...",
        options: ["Doa sebelum makan", "Doa sebelum belajar", "Doa tidur", "Doa bepergian"],
        answer: 1
    },
    {
        question: "Allah Swt menciptakan manusia dari ...",
        options: ["Cahaya", "Api", "Tanah", "Air"],
        answer: 2
    },
    {
        question: "Malaikat diciptakan Allah dari ...",
        options: ["Tanah", "Api", "Air", "Cahaya"],
        answer: 3
    },
    {
        question: "Kitab suci umat Islam adalah ...",
        options: ["Injil", "Taurat", "Al-Quran", "Zabur"],
        answer: 2
    },
    {
        question: "Rukun Islam yang pertama adalah ...",
        options: ["Shalat", "Puasa", "Syahadat", "Zakat"],
        answer: 2
    },
    {
        question: "Tempat ibadah umat Islam disebut ...",
        options: ["Gereja", "Masjid", "Pura", "Vihara"],
        answer: 1
    },
    {
        question: "Hari raya umat Islam ada dua yaitu Idul Fitri dan ...",
        options: ["Natal", "Idul Adha", "Nyepi", "Waisak"],
        answer: 1
    },
    {
        question: "Puasa di bulan Ramadhan termasuk rukun Islam ke ...",
        options: ["2", "3", "4", "5"],
        answer: 2
    },
    {
        question: "Sifat Tabligh Nabi Muhammad Saw artinya ...",
        options: ["Jujur", "Dipercaya", "Menyampaikan", "Cerdas"],
        answer: 2
    }
];
