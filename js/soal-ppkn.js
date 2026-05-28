// Soal Pendidikan Pancasila - Kurikulum Merdeka 2026 - Kelas 1 SD
// SAT TA 2025/2026 Semester 2
// Bank Soal: 100 soal | Keluar di ujian: 15 soal (acak)
const soalPPKN = [
    // === BENDERA INDONESIA ===
    {
        question: "Apa warna bendera Indonesia?",
        options: ["Merah dan Putih", "Merah dan Biru", "Putih dan Hijau", "Kuning dan Merah"],
        answer: 0
    },
    {
        question: "Bendera Indonesia disebut juga ...",
        options: ["Sang Saka Merah Putih", "Sang Pusaka", "Bendera Garuda", "Panji Negara"],
        answer: 0
    },
    {
        question: "Warna merah pada bendera Indonesia melambangkan ...",
        options: ["Kesucian", "Keberanian", "Kebaikan", "Keindahan"],
        answer: 1
    },
    {
        question: "Warna putih pada bendera Indonesia melambangkan ...",
        options: ["Keberanian", "Kesucian", "Kekuatan", "Kecerdasan"],
        answer: 1
    },
    {
        question: "Bendera Merah Putih dikibarkan pada tanggal ...",
        options: ["17 Agustus", "1 Juni", "10 November", "28 Oktober"],
        answer: 0
    },
    {
        question: "Bendera Indonesia berbentuk ...",
        options: ["Segitiga", "Persegi panjang", "Lingkaran", "Bintang"],
        answer: 1
    },
    {
        question: "Saat upacara bendera, kita harus bersikap ...",
        options: ["Bermain", "Tertib dan khidmat", "Berlari", "Berbicara"],
        answer: 1
    },
    {
        question: "Warna yang ada di bagian atas bendera Indonesia adalah ...",
        options: ["Putih", "Merah", "Biru", "Kuning"],
        answer: 1
    },
    {
        question: "Warna yang ada di bagian bawah bendera Indonesia adalah ...",
        options: ["Merah", "Putih", "Hijau", "Hitam"],
        answer: 1
    },
    {
        question: "Kita harus menghormati bendera Indonesia karena bendera adalah ...",
        options: ["Mainan", "Simbol negara", "Hiasan", "Kain biasa"],
        answer: 1
    },
    // === LAGU KEBANGSAAN ===
    {
        question: "Lagu kebangsaan Indonesia adalah ...",
        options: ["Garuda Pancasila", "Indonesia Raya", "Tanah Airku", "Bagimu Negeri"],
        answer: 1
    },
    {
        question: "Siapa pencipta lagu Indonesia Raya?",
        options: ["Ibu Sud", "W.R. Supratman", "A.T. Mahmud", "Kusbini"],
        answer: 1
    },
    {
        question: "Lagu Indonesia Raya dinyanyikan saat ...",
        options: ["Bermain", "Upacara bendera", "Istirahat", "Pulang sekolah"],
        answer: 1
    },
    {
        question: "Saat menyanyikan lagu Indonesia Raya, sikap kita adalah ...",
        options: ["Duduk santai", "Berdiri tegap", "Berlari", "Tidur"],
        answer: 1
    },
    {
        question: "Lagu 'Garuda Pancasila' menceritakan tentang ...",
        options: ["Hewan", "Lambang negara Indonesia", "Permainan", "Makanan"],
        answer: 1
    },
    {
        question: "Saat lagu kebangsaan berkumandang, kita tidak boleh ...",
        options: ["Berdiri tegap", "Bermain dan berbicara", "Menghormati bendera", "Diam"],
        answer: 1
    },
    {
        question: "Lagu wajib nasional dinyanyikan untuk menumbuhkan rasa ...",
        options: ["Malas", "Cinta tanah air", "Takut", "Bosan"],
        answer: 1
    },
    // === LAMBANG GARUDA PANCASILA ===
    {
        question: "Lambang negara Indonesia berbentuk burung ...",
        options: ["Elang", "Garuda", "Rajawali", "Merak"],
        answer: 1
    },
    {
        question: "Berapa jumlah sila dalam Pancasila?",
        options: ["4", "5", "6", "3"],
        answer: 1
    },
    {
        question: "Tulisan pada pita yang dicengkeram Garuda adalah ...",
        options: ["Indonesia Raya", "Bhinneka Tunggal Ika", "Pancasila", "Merdeka"],
        answer: 1
    },
    {
        question: "Bhinneka Tunggal Ika artinya ...",
        options: ["Satu untuk semua", "Berbeda-beda tetapi tetap satu", "Bersatu kita teguh", "Indonesia merdeka"],
        answer: 1
    },
    {
        question: "Gambar bintang pada perisai Garuda melambangkan sila ke ...",
        options: ["1", "2", "3", "4"],
        answer: 0
    },
    {
        question: "Gambar rantai pada perisai Garuda melambangkan sila ke ...",
        options: ["1", "2", "3", "4"],
        answer: 1
    },
    {
        question: "Gambar pohon beringin pada perisai Garuda melambangkan sila ke ...",
        options: ["1", "2", "3", "4"],
        answer: 2
    },
    {
        question: "Gambar kepala banteng pada perisai Garuda melambangkan sila ke ...",
        options: ["2", "3", "4", "5"],
        answer: 2
    },
    {
        question: "Gambar padi dan kapas pada perisai Garuda melambangkan sila ke ...",
        options: ["2", "3", "4", "5"],
        answer: 3
    },
    {
        question: "Bulu sayap Garuda Pancasila berjumlah ...",
        options: ["15", "17", "19", "20"],
        answer: 1
    },
    {
        question: "Bulu ekor Garuda Pancasila berjumlah ...",
        options: ["6", "7", "8", "9"],
        answer: 2
    },
    {
        question: "Warna dasar perisai Garuda Pancasila bagian tengah adalah ...",
        options: ["Merah", "Hitam", "Putih", "Kuning"],
        answer: 1
    },
    {
        question: "Pancasila merupakan ... negara Indonesia.",
        options: ["Lagu", "Dasar", "Bendera", "Cerita"],
        answer: 1
    },
    // === LINGKUNGAN TEMPAT TINGGAL ===
    {
        question: "Di lingkungan tempat tinggal, kita harus hidup ...",
        options: ["Bermusuhan", "Sendiri-sendiri", "Rukun dan damai", "Bertengkar"],
        answer: 2
    },
    {
        question: "Contoh sikap baik di lingkungan rumah adalah ...",
        options: ["Berteriak-teriak", "Membantu orang tua", "Mengotori halaman", "Mengganggu tetangga"],
        answer: 1
    },
    {
        question: "Ketika ada tetangga yang sakit, sebaiknya kita ...",
        options: ["Membiarkannya", "Menjenguk dan mendoakan", "Mengejeknya", "Menjauhinya"],
        answer: 1
    },
    {
        question: "Bermain dengan teman di lingkungan rumah harus ...",
        options: ["Berkelahi", "Saling menghormati", "Bermusuhan", "Saling mengejek"],
        answer: 1
    },
    {
        question: "Jika ada teman baru pindah ke lingkungan rumah kita, sebaiknya kita ...",
        options: ["Menjauhinya", "Menyambutnya dengan baik", "Mengusirnya", "Tidak peduli"],
        answer: 1
    },
    {
        question: "Saling menyapa tetangga termasuk sikap ...",
        options: ["Sombong", "Ramah", "Malas", "Takut"],
        answer: 1
    },
    {
        question: "Di rumah, kita harus menghormati ...",
        options: ["Hanya teman", "Orang tua dan keluarga", "Hanya guru", "Tidak ada"],
        answer: 1
    },
    {
        question: "Rudi bertemu Pak RT di jalan. Sikap Rudi yang baik adalah ...",
        options: ["Diam saja", "Lari menjauh", "Memberi salam dan menyapa", "Pura-pura tidak melihat"],
        answer: 2
    },
    {
        question: "Lingkungan tempat tinggal yang baik adalah lingkungan yang ...",
        options: ["Kotor dan berisik", "Bersih dan damai", "Ramai dan kumuh", "Gelap dan sepi"],
        answer: 1
    },
    {
        question: "Menjaga keamanan lingkungan tempat tinggal adalah tanggung jawab ...",
        options: ["Pak RT saja", "Polisi saja", "Semua warga", "Anak-anak saja"],
        answer: 2
    },
    // === GOTONG ROYONG ===
    {
        question: "Gotong royong artinya ...",
        options: ["Bekerja sendiri", "Bekerja bersama-sama", "Bermain sendiri", "Tidur bersama"],
        answer: 1
    },
    {
        question: "Kerja bakti membersihkan sekolah termasuk kegiatan ...",
        options: ["Bermain", "Olahraga", "Gotong royong", "Istirahat"],
        answer: 2
    },
    {
        question: "Manfaat gotong royong adalah ...",
        options: ["Pekerjaan menjadi berat", "Pekerjaan menjadi cepat selesai", "Pekerjaan tidak selesai", "Membuat lelah sendiri"],
        answer: 1
    },
    {
        question: "Contoh gotong royong di rumah adalah ...",
        options: ["Bermain game", "Membersihkan rumah bersama keluarga", "Tidur seharian", "Menonton TV"],
        answer: 1
    },
    {
        question: "Contoh gotong royong di lingkungan tempat tinggal adalah ...",
        options: ["Membuang sampah di sungai", "Kerja bakti membersihkan selokan", "Mengotori jalan", "Merusak taman"],
        answer: 1
    },
    {
        question: "Saat ada tetangga yang sedang membangun rumah, sikap kita sebaiknya ...",
        options: ["Mengejek", "Membantu semampunya", "Tidak peduli", "Mengganggu"],
        answer: 1
    },
    {
        question: "Adi dan teman-teman membersihkan halaman sekolah bersama. Mereka sedang melakukan ...",
        options: ["Bermain", "Gotong royong", "Ujian", "Istirahat"],
        answer: 1
    },
    {
        question: "Gotong royong membuat kita menjadi ...",
        options: ["Sombong", "Kompak dan akrab", "Malas", "Bermusuhan"],
        answer: 1
    },
    {
        question: "Sikap yang benar saat gotong royong adalah ...",
        options: ["Diam dan menonton saja", "Bekerja bersama dengan senang hati", "Menyuruh orang lain saja", "Tidur di pojokan"],
        answer: 1
    },
    {
        question: "Ketika teman kesulitan mengangkat meja, kita sebaiknya ...",
        options: ["Menertawakan", "Membantu mengangkat", "Pergi meninggalkan", "Diam saja"],
        answer: 1
    },
    // === LINGKUNGAN SEKOLAH ===
    {
        question: "Di sekolah, Dina melihat sampah di lantai kelas. Sikap yang tepat adalah ...",
        options: ["Membiarkannya", "Memungut dan membuang ke tempat sampah", "Menendang sampah", "Pura-pura tidak melihat"],
        answer: 1
    },
    {
        question: "Contoh menjaga kebersihan lingkungan sekolah adalah ...",
        options: ["Mencoret-coret meja", "Membuang sampah di tempat sampah", "Merusak tanaman", "Mengotori kelas"],
        answer: 1
    },
    {
        question: "Kita harus merawat tanaman di sekolah dengan cara ...",
        options: ["Mencabutinya", "Menyirami dan tidak merusaknya", "Menginjaknya", "Membuangnya"],
        answer: 1
    },
    {
        question: "Saat bel masuk berbunyi, kita harus ...",
        options: ["Tetap bermain", "Segera masuk kelas dengan tertib", "Lari-larian", "Pulang ke rumah"],
        answer: 1
    },
    {
        question: "Menjaga kebersihan toilet sekolah adalah tanggung jawab ...",
        options: ["Guru saja", "Penjaga sekolah saja", "Semua warga sekolah", "Kepala sekolah saja"],
        answer: 2
    },
    {
        question: "Jika melihat keran air menyala di sekolah, sebaiknya kita ...",
        options: ["Membiarkannya", "Mematikannya", "Bermain air", "Pergi saja"],
        answer: 1
    },
    {
        question: "Tempat yang tepat untuk membuang sampah di sekolah adalah ...",
        options: ["Di bawah meja", "Di laci", "Di tempat sampah", "Di halaman"],
        answer: 2
    },
    {
        question: "Agar kelas tetap bersih, kita harus melakukan piket secara ...",
        options: ["Sesuka hati", "Bergantian dan tertib", "Tidak pernah", "Hanya saat mau ujian"],
        answer: 1
    },
    {
        question: "Sikap yang benar di perpustakaan sekolah adalah ...",
        options: ["Berteriak", "Membaca dengan tenang", "Berlari-larian", "Makan dan minum"],
        answer: 1
    },
    {
        question: "Menjaga ketertiban di kelas artinya ...",
        options: ["Bermain sesuka hati", "Tidak membuat gaduh dan patuh aturan", "Tidur di kelas", "Berkelahi dengan teman"],
        answer: 1
    },
    // === PEDULI LINGKUNGAN SEKOLAH ===
    {
        question: "Sikap peduli lingkungan di sekolah adalah ...",
        options: ["Menyiram tanaman", "Membuang sampah di sungai", "Merusak pohon", "Mengotori halaman"],
        answer: 0
    },
    {
        question: "Mengapa kita harus menjaga kebersihan kelas?",
        options: ["Agar dihukum", "Agar nyaman belajar", "Agar bisa bermain", "Agar cepat pulang"],
        answer: 1
    },
    {
        question: "Rina melihat teman membuang sampah sembarangan. Sikap Rina yang tepat adalah ...",
        options: ["Ikut membuang sampah", "Mengingatkan teman dengan baik", "Diam saja", "Marah-marah"],
        answer: 1
    },
    {
        question: "Agar taman sekolah indah, kita harus ...",
        options: ["Memetik bunganya", "Merawat dan menjaganya", "Menginjak rumputnya", "Membuang sampah di sana"],
        answer: 1
    },
    {
        question: "Peralatan sekolah seperti meja dan kursi harus ...",
        options: ["Dicoret-coret", "Dijaga dan dirawat", "Dirusak", "Ditendang"],
        answer: 1
    },
    {
        question: "Lampu kelas yang masih menyala saat istirahat sebaiknya ...",
        options: ["Dibiarkan saja", "Dimatikan untuk hemat listrik", "Ditambah lagi", "Dipecahkan"],
        answer: 1
    },
    {
        question: "Setelah selesai bermain di halaman sekolah, kita harus ...",
        options: ["Meninggalkan mainan berserakan", "Merapikan kembali", "Membuang mainan", "Pulang saja"],
        answer: 1
    },
    {
        question: "Air di sekolah harus digunakan secara ...",
        options: ["Boros", "Hemat", "Berlebihan", "Tidak perlu"],
        answer: 1
    },
    {
        question: "Kita tidak boleh mencoret-coret tembok sekolah karena ...",
        options: ["Tembok akan rusak dan kotor", "Tidak ada alasan", "Tembok tidak punya perasaan", "Spidolnya mahal"],
        answer: 0
    },
    {
        question: "Ketika hujan, genangan air di halaman sekolah bisa diatasi dengan ...",
        options: ["Bermain di genangan", "Membuat saluran air bersama", "Membiarkannya", "Menambah airnya"],
        answer: 1
    },
    // === CAMPURAN: NILAI-NILAI PANCASILA DI KEHIDUPAN SEHARI-HARI ===
    {
        question: "Menghormati teman yang berbeda agama termasuk pengamalan sila ke ...",
        options: ["1", "2", "3", "4"],
        answer: 0
    },
    {
        question: "Menolong teman yang jatuh termasuk sikap ...",
        options: ["Sombong", "Peduli dan kemanusiaan", "Malas", "Takut"],
        answer: 1
    },
    {
        question: "Bermain bersama tanpa membeda-bedakan teman termasuk sikap ...",
        options: ["Sombong", "Pilih kasih", "Persatuan", "Egois"],
        answer: 2
    },
    {
        question: "Musyawarah di kelas untuk memilih ketua kelas termasuk pengamalan sila ke ...",
        options: ["2", "3", "4", "5"],
        answer: 2
    },
    {
        question: "Berbagi makanan dengan teman yang tidak membawa bekal termasuk sikap ...",
        options: ["Sombong", "Pelit", "Adil dan peduli", "Takut"],
        answer: 2
    },
    {
        question: "Saat bermain, kita harus ...",
        options: ["Curang", "Jujur dan sportif", "Marah jika kalah", "Mengejek teman"],
        answer: 1
    },
    {
        question: "Berdoa sebelum belajar termasuk pengamalan sila ke ...",
        options: ["1", "2", "3", "5"],
        answer: 0
    },
    {
        question: "Tidak memilih-milih teman saat bermain termasuk pengamalan sila ke ...",
        options: ["1", "2", "3", "5"],
        answer: 2
    },
    {
        question: "Ketika ada teman yang menangis, sikap kita yang baik adalah ...",
        options: ["Menertawakan", "Menghibur dan bertanya apa yang terjadi", "Mengabaikan", "Ikut menangis"],
        answer: 1
    },
    {
        question: "Antri saat membeli makanan di kantin termasuk sikap ...",
        options: ["Malas", "Tertib dan disiplin", "Takut", "Terpaksa"],
        answer: 1
    },
    {
        question: "Minta maaf ketika berbuat salah termasuk sikap ...",
        options: ["Pengecut", "Bertanggung jawab", "Sombong", "Lemah"],
        answer: 1
    },
    {
        question: "Mengucapkan terima kasih ketika dibantu teman termasuk sikap ...",
        options: ["Sombong", "Sopan dan menghargai", "Takut", "Terpaksa"],
        answer: 1
    },
    {
        question: "Saat berdiskusi di kelas, kita harus ...",
        options: ["Memaksakan pendapat", "Mendengarkan dan menghargai pendapat teman", "Diam saja", "Tidur"],
        answer: 1
    },
    {
        question: "Mematuhi peraturan sekolah termasuk sikap ...",
        options: ["Pengecut", "Disiplin", "Takut", "Malas"],
        answer: 1
    },
    {
        question: "Tidak mengambil barang milik teman tanpa izin termasuk sikap ...",
        options: ["Takut", "Jujur", "Malas", "Pengecut"],
        answer: 1
    },
    {
        question: "Indonesia memiliki banyak suku bangsa. Kita harus saling ...",
        options: ["Membenci", "Menghormati", "Menjauhi", "Mengejek"],
        answer: 1
    },
    {
        question: "Ketika ada teman yang sakit dan tidak masuk sekolah, kita bisa ...",
        options: ["Tidak peduli", "Mendoakan dan menjenguk", "Senang karena kelas sepi", "Mengejek"],
        answer: 1
    },
    {
        question: "Contoh sikap adil di kelas adalah ...",
        options: ["Membagi tugas sama rata", "Menyuruh satu orang saja", "Tidak mengerjakan", "Hanya memilih teman dekat"],
        answer: 0
    },
    {
        question: "Menghormati guru di sekolah termasuk sikap ...",
        options: ["Terpaksa", "Sopan santun", "Takut", "Lemah"],
        answer: 1
    },
    {
        question: "Saat ada teman yang berbeda pendapat, kita harus ...",
        options: ["Marah", "Menghargai dan tidak memaksakan", "Berkelahi", "Mengejek"],
        answer: 1
    },
    {
        question: "Upacara bendera setiap hari Senin bertujuan untuk ...",
        options: ["Membuang waktu", "Menumbuhkan cinta tanah air", "Membuat capek", "Bermain"],
        answer: 1
    },
    {
        question: "Saling tolong-menolong antar teman mencerminkan nilai ...",
        options: ["Egois", "Kemanusiaan", "Permusuhan", "Kesombongan"],
        answer: 1
    },
    {
        question: "Membersihkan kelas secara bergantian termasuk contoh ...",
        options: ["Kemalasan", "Keadilan", "Permusuhan", "Keterpaksaan"],
        answer: 1
    },
    {
        question: "Semboyan Bhinneka Tunggal Ika mengajarkan kita untuk ...",
        options: ["Membenci perbedaan", "Hidup rukun walau berbeda-beda", "Hanya berteman dengan yang sama", "Tidak peduli orang lain"],
        answer: 1
    },
    {
        question: "Hari kemerdekaan Indonesia diperingati setiap tanggal ...",
        options: ["1 Juni", "17 Agustus", "10 November", "28 Oktober"],
        answer: 1
    },
    {
        question: "Proklamasi kemerdekaan Indonesia dibacakan oleh ...",
        options: ["Soekarno dan Hatta", "Diponegoro", "Kartini", "Sudirman"],
        answer: 0
    },
    {
        question: "Indonesia merdeka pada tahun ...",
        options: ["1944", "1945", "1946", "1950"],
        answer: 1
    },
    {
        question: "Peringatan Hari Kemerdekaan biasanya diramaikan dengan lomba ...",
        options: ["Ujian", "Panjat pinang dan balap karung", "Membaca buku", "Tidur"],
        answer: 1
    },
    {
        question: "Kita harus menjaga kebersihan lingkungan rumah dan sekolah agar ...",
        options: ["Terlihat kotor", "Nyaman dan sehat", "Banyak sampah", "Bau tidak sedap"],
        answer: 1
    },
    {
        question: "Ketika ada sampah di halaman rumah, kita sebaiknya ...",
        options: ["Membiarkannya", "Memungut dan membuang ke tempat sampah", "Menambah sampah lagi", "Pindah rumah"],
        answer: 1
    }
];
