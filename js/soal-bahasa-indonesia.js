// Soal Bahasa Indonesia - Kurikulum Merdeka 2026 - Kelas 1 SD
// SAT TA 2025/2026 Semester 2
// Bank Soal: 100 soal | Keluar di ujian: 15 soal (acak)
const soalBahasaIndonesia = [
    // === MENJAGA KEBERSIHAN & KALIMAT PERINTAH ===
    {
        question: "Kalimat 'Buanglah sampah pada tempatnya!' termasuk kalimat ...",
        options: ["Kalimat tanya", "Kalimat perintah", "Kalimat berita", "Kalimat ajakan"],
        answer: 1
    },
    {
        question: "Tanda baca yang digunakan di akhir kalimat perintah adalah ...",
        options: ["Titik (.)", "Tanda tanya (?)", "Tanda seru (!)", "Koma (,)"],
        answer: 2
    },
    {
        question: "'Cucilah tanganmu sebelum makan!' Kalimat tersebut adalah kalimat ...",
        options: ["Berita", "Tanya", "Perintah", "Seru"],
        answer: 2
    },
    {
        question: "Kalimat 'Rapikan mejamu sekarang!' menggunakan tanda baca ...",
        options: ["Titik", "Tanda seru", "Tanda tanya", "Koma"],
        answer: 1
    },
    {
        question: "Mana yang termasuk kalimat perintah?",
        options: ["Ani sedang makan.", "Siapa namamu?", "Tutuplah pintu itu!", "Hari ini cerah."],
        answer: 2
    },
    {
        question: "Kalimat perintah biasanya diakhiri dengan ...",
        options: ["Titik (.)", "Tanda seru (!)", "Tanda tanya (?)", "Titik dua (:)"],
        answer: 1
    },
    {
        question: "'Jangan berlari di dalam kelas!' Kalimat ini melarang kita untuk ...",
        options: ["Duduk", "Berlari di kelas", "Membaca", "Menulis"],
        answer: 1
    },
    {
        question: "Kita harus menjaga kebersihan agar ...",
        options: ["Sakit", "Sehat dan nyaman", "Kotor", "Bau"],
        answer: 1
    },
    {
        question: "Contoh menjaga kebersihan diri adalah ...",
        options: ["Tidak mandi", "Mandi 2 kali sehari", "Membuang sampah sembarangan", "Tidak gosok gigi"],
        answer: 1
    },
    {
        question: "'Sapu lantai yang kotor itu!' Kata 'sapu' dalam kalimat tersebut merupakan kata ...",
        options: ["Benda", "Kerja/perintah", "Sifat", "Keterangan"],
        answer: 1
    },
    // === SUKU KATA MA, MI, MU, ME, MO ===
    {
        question: "Suku kata dari kata 'MEJA' adalah ...",
        options: ["ME - JA", "M - EJA", "MEJ - A", "ME - J - A"],
        answer: 0
    },
    {
        question: "Suku kata 'ma' terdapat pada kata ...",
        options: ["Makan", "Minum", "Mobil", "Menulis"],
        answer: 0
    },
    {
        question: "Suku kata 'mi' terdapat pada kata ...",
        options: ["Makan", "Minum", "Mobil", "Muda"],
        answer: 1
    },
    {
        question: "Suku kata 'mu' terdapat pada kata ...",
        options: ["Makan", "Minum", "Murid", "Meja"],
        answer: 2
    },
    {
        question: "Suku kata 'mo' terdapat pada kata ...",
        options: ["Makan", "Minum", "Mobil", "Madu"],
        answer: 2
    },
    {
        question: "Suku kata 'me' terdapat pada kata ...",
        options: ["Makan", "Merah", "Mobil", "Murid"],
        answer: 1
    },
    {
        question: "Kata 'MADU' terdiri dari suku kata ...",
        options: ["MA - DU", "M - ADU", "MAD - U", "MA - D - U"],
        answer: 0
    },
    {
        question: "Kata 'MINUM' terdiri dari suku kata ...",
        options: ["MI - NUM", "M - INUM", "MIN - UM", "MI - N - UM"],
        answer: 0
    },
    {
        question: "Kata yang dimulai dengan suku kata 'mu' adalah ...",
        options: ["Makan", "Meja", "Musik", "Mobil"],
        answer: 2
    },
    {
        question: "Berapa jumlah suku kata pada kata 'MAMA'?",
        options: ["1", "2", "3", "4"],
        answer: 1
    },
    // === DESKRIPSI DIRI & TEMAN, SUKU KATA GA, GI, GU, GE, GO ===
    {
        question: "Namaku Rina. Aku berambut panjang. Kalimat di atas merupakan ...",
        options: ["Kalimat perintah", "Deskripsi diri", "Kalimat tanya", "Kata petunjuk arah"],
        answer: 1
    },
    {
        question: "Suku kata 'gu' terdapat pada kata ...",
        options: ["Gula", "Gigi", "Gajah", "Gelas"],
        answer: 0
    },
    {
        question: "Suku kata 'ga' terdapat pada kata ...",
        options: ["Gula", "Gigi", "Gajah", "Gong"],
        answer: 2
    },
    {
        question: "Suku kata 'gi' terdapat pada kata ...",
        options: ["Gula", "Gigi", "Gajah", "Gong"],
        answer: 1
    },
    {
        question: "Suku kata 'ge' terdapat pada kata ...",
        options: ["Gula", "Gigi", "Gelas", "Gajah"],
        answer: 2
    },
    {
        question: "Suku kata 'go' terdapat pada kata ...",
        options: ["Gula", "Goreng", "Gajah", "Gigi"],
        answer: 1
    },
    {
        question: "Kata yang tepat untuk melengkapi kalimat: 'Ibu ... nasi di dapur' adalah ...",
        options: ["memasak", "membaca", "menulis", "bermain"],
        answer: 0
    },
    {
        question: "'Temanku bernama Doni. Dia tinggi dan ramah.' Kata 'ramah' menggambarkan ...",
        options: ["Nama", "Sifat Doni", "Alamat", "Pekerjaan"],
        answer: 1
    },
    {
        question: "Melengkapi kalimat rumpang: 'Rina ... di taman.' Kata yang tepat adalah ...",
        options: ["bermain", "memasak", "mencuci", "menjahit"],
        answer: 0
    },
    {
        question: "Kata 'GULA' terdiri dari suku kata ...",
        options: ["GU - LA", "G - ULA", "GUL - A", "GU - L - A"],
        answer: 0
    },
    {
        question: "'Aku punya mata dua dan hidung satu.' Kalimat ini mendeskripsikan ...",
        options: ["Hewan", "Anggota tubuh", "Makanan", "Mainan"],
        answer: 1
    },
    {
        question: "'Budi berkulit sawo matang dan suka bermain bola.' Kalimat ini merupakan ...",
        options: ["Kalimat perintah", "Deskripsi teman", "Kalimat tanya", "Pantun"],
        answer: 1
    },
    // === MENGENAL BENTUK UANG & MENULIS KALIMAT ===
    {
        question: "Uang logam dan uang kertas digunakan untuk ...",
        options: ["Bermain", "Membeli barang", "Menggambar", "Menulis"],
        answer: 1
    },
    {
        question: "Yang termasuk uang logam adalah ...",
        options: ["Rp 100", "Rp 2.000", "Rp 5.000", "Rp 10.000"],
        answer: 0
    },
    {
        question: "Yang termasuk uang kertas adalah ...",
        options: ["Rp 200", "Rp 500 logam", "Rp 1.000 kertas", "Rp 100"],
        answer: 2
    },
    {
        question: "Mana kalimat yang benar berdasarkan gambar 'anak membaca buku'?",
        options: ["Anak bermain bola", "Anak membaca buku", "Anak makan nasi", "Anak berlari"],
        answer: 1
    },
    {
        question: "Susunlah kata acak: 'buku - membaca - Ani'. Kalimat yang benar adalah ...",
        options: ["Buku membaca Ani", "Ani membaca buku", "Membaca Ani buku", "Buku Ani membaca"],
        answer: 1
    },
    {
        question: "Susunlah kata acak: 'bermain - Doni - bola'. Kalimat yang benar adalah ...",
        options: ["Bermain Doni bola", "Bola bermain Doni", "Doni bermain bola", "Bola Doni bermain"],
        answer: 2
    },
    {
        question: "Uang sebaiknya digunakan untuk ...",
        options: ["Dibuang", "Ditabung atau membeli kebutuhan", "Dimainkan", "Disobek"],
        answer: 1
    },
    {
        question: "Susunlah kata acak: 'di - Ani - sekolah - belajar'. Kalimat yang benar adalah ...",
        options: ["Di sekolah belajar Ani", "Ani belajar di sekolah", "Sekolah Ani belajar di", "Belajar di Ani sekolah"],
        answer: 1
    },
    {
        question: "Kalimat yang sesuai gambar 'ibu menyapu lantai' adalah ...",
        options: ["Ibu memasak nasi", "Ibu menyapu lantai", "Ibu membaca buku", "Ibu mencuci baju"],
        answer: 1
    },
    {
        question: "Mana uang yang nilainya paling besar?",
        options: ["Rp 500", "Rp 1.000", "Rp 2.000", "Rp 200"],
        answer: 2
    },
    {
        question: "Susunlah kata acak: 'makan - kucing - ikan'. Kalimat yang benar adalah ...",
        options: ["Ikan makan kucing", "Makan kucing ikan", "Kucing makan ikan", "Ikan kucing makan"],
        answer: 2
    },
    // === PETUNJUK LETAK DAN ARAH ===
    {
        question: "Kata petunjuk arah 'di depan' lawan katanya adalah ...",
        options: ["Di atas", "Di belakang", "Di samping", "Di bawah"],
        answer: 1
    },
    {
        question: "Perhatikan kalimat: 'Dina bermain di ... rumah.' Kata yang tepat adalah ...",
        options: ["atas", "depan", "dalam", "bawah"],
        answer: 1
    },
    {
        question: "Lawan kata dari 'di atas' adalah ...",
        options: ["Di depan", "Di samping", "Di bawah", "Di belakang"],
        answer: 2
    },
    {
        question: "Buku ada ... meja. Kata yang tepat adalah ...",
        options: ["di atas", "di bawah", "di belakang", "di samping"],
        answer: 0
    },
    {
        question: "Kucing bersembunyi ... meja. Kata yang tepat jika kucing ada di bagian bawah meja adalah ...",
        options: ["di atas", "di depan", "di bawah", "di samping"],
        answer: 2
    },
    {
        question: "Tas ada ... kursi (menempel di sisi). Kata yang tepat adalah ...",
        options: ["di atas", "di bawah", "di samping", "di dalam"],
        answer: 2
    },
    {
        question: "Lawan kata 'di dalam' adalah ...",
        options: ["Di atas", "Di luar", "Di bawah", "Di depan"],
        answer: 1
    },
    {
        question: "Pensil ada ... kotak pensil. Kata yang tepat adalah ...",
        options: ["di atas", "di luar", "di dalam", "di depan"],
        answer: 2
    },
    {
        question: "Pohon ada ... sekolah (di bagian belakang). Kata yang tepat adalah ...",
        options: ["di depan", "di atas", "di belakang", "di dalam"],
        answer: 2
    },
    {
        question: "'Toko ada di ... kanan jalan.' Kata petunjuk yang tepat adalah ...",
        options: ["atas", "bawah", "sebelah", "dalam"],
        answer: 2
    },
    // === MENGENAL PROFESI ===
    {
        question: "Orang yang bekerja mengobati orang sakit disebut ...",
        options: ["Guru", "Dokter", "Polisi", "Petani"],
        answer: 1
    },
    {
        question: "Orang yang bekerja mengajar di sekolah disebut ...",
        options: ["Polisi", "Petani", "Guru", "Pilot"],
        answer: 2
    },
    {
        question: "Orang yang bekerja menangkap penjahat disebut ...",
        options: ["Guru", "Dokter", "Polisi", "Nelayan"],
        answer: 2
    },
    {
        question: "Orang yang bekerja menerbangkan pesawat disebut ...",
        options: ["Masinis", "Pilot", "Nahkoda", "Sopir"],
        answer: 1
    },
    {
        question: "Orang yang bekerja menanam padi disebut ...",
        options: ["Nelayan", "Petani", "Pedagang", "Koki"],
        answer: 1
    },
    {
        question: "Orang yang bekerja menangkap ikan di laut disebut ...",
        options: ["Petani", "Pedagang", "Nelayan", "Polisi"],
        answer: 2
    },
    {
        question: "Orang yang bekerja memasak makanan di restoran disebut ...",
        options: ["Pelayan", "Koki/juru masak", "Kasir", "Satpam"],
        answer: 1
    },
    {
        question: "Dokter bekerja di ...",
        options: ["Sawah", "Rumah sakit", "Bandara", "Kantor polisi"],
        answer: 1
    },
    {
        question: "Guru bekerja di ...",
        options: ["Rumah sakit", "Kantor polisi", "Sekolah", "Bandara"],
        answer: 2
    },
    {
        question: "Pilot bekerja di ...",
        options: ["Sawah", "Laut", "Pasar", "Pesawat/bandara"],
        answer: 3
    },
    {
        question: "Orang yang menjual barang di pasar disebut ...",
        options: ["Pembeli", "Pedagang", "Polisi", "Guru"],
        answer: 1
    },
    {
        question: "Pak Pos bekerja mengantar ...",
        options: ["Makanan", "Surat dan paket", "Obat", "Buku pelajaran"],
        answer: 1
    },
    {
        question: "Orang yang bekerja memadamkan api disebut ...",
        options: ["Polisi", "Dokter", "Pemadam kebakaran", "Tentara"],
        answer: 2
    },
    // === CAMPURAN ===
    {
        question: "Huruf pertama pada nama orang harus ditulis dengan huruf ...",
        options: ["Kecil", "Kapital/besar", "Miring", "Tebal"],
        answer: 1
    },
    {
        question: "Kalimat yang diakhiri tanda titik (.) adalah kalimat ...",
        options: ["Perintah", "Tanya", "Berita", "Seru"],
        answer: 2
    },
    {
        question: "Kalimat yang diakhiri tanda tanya (?) adalah kalimat ...",
        options: ["Perintah", "Tanya", "Berita", "Ajakan"],
        answer: 1
    },
    {
        question: "Berapa jumlah suku kata pada kata 'BERMAIN'?",
        options: ["2", "3", "4", "1"],
        answer: 1
    },
    {
        question: "'Siapa nama temanmu?' Kalimat ini termasuk kalimat ...",
        options: ["Perintah", "Berita", "Tanya", "Ajakan"],
        answer: 2
    },
    {
        question: "Kata 'SEKOLAH' terdiri dari ... suku kata.",
        options: ["2", "3", "4", "5"],
        answer: 1
    },
    {
        question: "Tanda baca yang tepat untuk kalimat 'Apa kabarmu' adalah ...",
        options: ["Apa kabarmu.", "Apa kabarmu!", "Apa kabarmu?", "Apa kabarmu,"],
        answer: 2
    },
    {
        question: "Mana yang merupakan kalimat berita?",
        options: ["Tutup pintunya!", "Siapa namamu?", "Hari ini hujan.", "Ayo bermain!"],
        answer: 2
    },
    {
        question: "Huruf kapital digunakan di awal ...",
        options: ["Setiap kata", "Kalimat dan nama orang", "Kata kerja saja", "Tidak perlu"],
        answer: 1
    },
    {
        question: "Kata 'MEMBACA' terdiri dari suku kata ...",
        options: ["MEM - BA - CA", "ME - MBA - CA", "M - EM - BACA", "MEM - BAC - A"],
        answer: 0
    },
    {
        question: "Susunlah kata acak: 'ke - pergi - Rina - sekolah'. Kalimat yang benar ...",
        options: ["Ke sekolah pergi Rina", "Rina pergi ke sekolah", "Pergi Rina ke sekolah", "Sekolah ke Rina pergi"],
        answer: 1
    },
    {
        question: "Kata 'BELAJAR' terdiri dari ... suku kata.",
        options: ["2", "3", "4", "1"],
        answer: 1
    },
    {
        question: "Lawan kata dari 'bersih' adalah ...",
        options: ["Rapi", "Kotor", "Indah", "Wangi"],
        answer: 1
    },
    {
        question: "Lawan kata dari 'rajin' adalah ...",
        options: ["Pintar", "Bodoh", "Malas", "Cepat"],
        answer: 2
    },
    {
        question: "Lawan kata dari 'tinggi' adalah ...",
        options: ["Besar", "Pendek", "Kecil", "Panjang"],
        answer: 1
    },
    {
        question: "Kata yang tepat: 'Adik ... susu setiap pagi.'",
        options: ["makan", "minum", "tidur", "bermain"],
        answer: 1
    },
    {
        question: "Kata yang tepat: 'Ayah ... koran di ruang tamu.'",
        options: ["menulis", "membaca", "menggambar", "mewarnai"],
        answer: 1
    },
    {
        question: "Orang yang bekerja menyetir bus disebut ...",
        options: ["Pilot", "Masinis", "Sopir", "Nahkoda"],
        answer: 2
    },
    {
        question: "Orang yang bekerja di kapal laut disebut ...",
        options: ["Pilot", "Masinis", "Sopir", "Nahkoda"],
        answer: 3
    },
    {
        question: "'Ayo kita bermain bersama!' Kalimat ini termasuk kalimat ...",
        options: ["Berita", "Tanya", "Perintah", "Ajakan"],
        answer: 3
    },
    {
        question: "Kata 'MENULIS' terdiri dari suku kata ...",
        options: ["ME - NU - LIS", "MEN - U - LIS", "M - ENU - LIS", "MENU - LIS"],
        answer: 0
    },
    {
        question: "'Ibu pergi ke pasar.' Kata 'ke' menunjukkan ...",
        options: ["Waktu", "Arah/tujuan", "Sebab", "Alat"],
        answer: 1
    },
    {
        question: "Kalimat yang tepat untuk mendeskripsikan kucing adalah ...",
        options: ["Kucing bisa terbang", "Kucing berbulu halus dan suka ikan", "Kucing hidup di air", "Kucing sangat besar"],
        answer: 1
    },
    {
        question: "Suku kata dari kata 'PINTU' adalah ...",
        options: ["PI - NTU", "PIN - TU", "P - INTU", "PI - N - TU"],
        answer: 1
    },
    {
        question: "Suku kata dari kata 'BUKU' adalah ...",
        options: ["B - UKU", "BU - KU", "BUK - U", "BU - K - U"],
        answer: 1
    },
    {
        question: "Kata 'BERMAIN' terdiri dari suku kata ...",
        options: ["BER - MAIN", "BER - MA - IN", "B - ER - MAIN", "BE - RMA - IN"],
        answer: 1
    },
    {
        question: "'Ambilkan buku itu!' Siapa yang diperintah?",
        options: ["Buku", "Pembicara", "Orang yang diajak bicara", "Tidak ada"],
        answer: 2
    },
    {
        question: "Di sekolah kita belajar membaca dan ...",
        options: ["Bermain terus", "Menulis", "Tidur", "Berkelahi"],
        answer: 1
    },
    {
        question: "Tempat menyimpan buku-buku di sekolah disebut ...",
        options: ["Kantin", "Perpustakaan", "UKS", "Toilet"],
        answer: 1
    },
    {
        question: "Orang yang bertugas menjaga keamanan di sekolah disebut ...",
        options: ["Guru", "Kepala sekolah", "Satpam", "Dokter"],
        answer: 2
    },
    {
        question: "Kata yang tepat: 'Anak-anak ... di halaman sekolah.'",
        options: ["memasak", "menjahit", "bermain", "mencuci"],
        answer: 2
    },
    {
        question: "Alat yang digunakan untuk menulis di papan tulis adalah ...",
        options: ["Pensil", "Spidol/kapur", "Penggaris", "Penghapus"],
        answer: 1
    },
    {
        question: "Mana kalimat yang menggunakan tanda baca dengan benar?",
        options: ["rina pergi ke sekolah", "Rina pergi ke sekolah.", "rina Pergi ke Sekolah", "RINA PERGI KE SEKOLAH"],
        answer: 1
    },
    {
        question: "Kata yang tepat: 'Kakak ... surat untuk nenek.'",
        options: ["membaca", "menulis", "memakan", "melihat"],
        answer: 1
    }
];
