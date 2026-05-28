// Soal Matematika - Kurikulum Merdeka 2026 - Kelas 1 SD
// SAT TA 2025/2026 Semester 2
// Bank Soal: 100 soal | Keluar di ujian: 15 soal (acak)
const soalMatematika = [
    // === MENGENAL BILANGAN 11-20 ===
    {
        question: "Bilangan setelah 15 adalah ...",
        options: ["14", "16", "17", "13"],
        answer: 1
    },
    {
        question: "Bilangan sebelum 20 adalah ...",
        options: ["21", "18", "19", "17"],
        answer: 2
    },
    {
        question: "Bilangan 11 dibaca ...",
        options: ["Sepuluh satu", "Sebelas", "Satu satu", "Dua belas"],
        answer: 1
    },
    {
        question: "Bilangan antara 13 dan 15 adalah ...",
        options: ["12", "16", "14", "11"],
        answer: 2
    },
    {
        question: "Angka 17 terdiri dari angka ...",
        options: ["1 dan 7", "7 dan 1", "1 dan 6", "2 dan 7"],
        answer: 0
    },
    {
        question: "Bilangan setelah 19 adalah ...",
        options: ["18", "21", "20", "17"],
        answer: 2
    },
    {
        question: "Bilangan sebelum 12 adalah ...",
        options: ["13", "10", "11", "14"],
        answer: 2
    },
    {
        question: "Bilangan genap antara 11 dan 15 adalah ...",
        options: ["11 dan 13", "12 dan 14", "13 dan 15", "10 dan 16"],
        answer: 1
    },
    {
        question: "Bilangan ganjil antara 14 dan 20 adalah ...",
        options: ["14, 16, 18", "15, 17, 19", "13, 15, 17", "16, 18, 20"],
        answer: 1
    },
    {
        question: "Lambang bilangan 'tiga belas' adalah ...",
        options: ["30", "31", "13", "3"],
        answer: 2
    },
    // === NILAI TEMPAT PULUHAN DAN SATUAN ===
    {
        question: "Bilangan 18 terdiri dari ... puluhan dan ... satuan",
        options: ["1 puluhan 8 satuan", "8 puluhan 1 satuan", "1 puluhan 0 satuan", "0 puluhan 18 satuan"],
        answer: 0
    },
    {
        question: "Bilangan 15 terdiri dari ...",
        options: ["1 puluhan 5 satuan", "5 puluhan 1 satuan", "15 satuan saja", "0 puluhan 15 satuan"],
        answer: 0
    },
    {
        question: "Nilai tempat angka 1 pada bilangan 14 adalah ...",
        options: ["Satuan", "Puluhan", "Ratusan", "Ribuan"],
        answer: 1
    },
    {
        question: "Nilai tempat angka 6 pada bilangan 16 adalah ...",
        options: ["Puluhan", "Satuan", "Ratusan", "Belasan"],
        answer: 1
    },
    {
        question: "Bilangan 20 terdiri dari ...",
        options: ["2 puluhan 0 satuan", "0 puluhan 20 satuan", "20 puluhan", "2 satuan 0 puluhan"],
        answer: 0
    },
    {
        question: "1 puluhan dan 3 satuan sama dengan ...",
        options: ["31", "3", "13", "103"],
        answer: 2
    },
    {
        question: "1 puluhan dan 9 satuan sama dengan ...",
        options: ["91", "9", "19", "109"],
        answer: 2
    },
    {
        question: "Angka 2 pada bilangan 12 menempati nilai tempat ...",
        options: ["Puluhan", "Satuan", "Ratusan", "Belasan"],
        answer: 1
    },
    {
        question: "Bilangan yang memiliki 1 puluhan dan 7 satuan adalah ...",
        options: ["71", "7", "17", "107"],
        answer: 2
    },
    {
        question: "Bilangan 11 memiliki nilai puluhan sebesar ...",
        options: ["11", "1", "10", "0"],
        answer: 2
    },
    // === MEMBANDINGKAN DAN MENGURUTKAN ===
    {
        question: "Urutan bilangan dari yang terkecil: 14, 11, 19, 12 adalah ...",
        options: ["19, 14, 12, 11", "11, 12, 14, 19", "12, 11, 14, 19", "14, 11, 12, 19"],
        answer: 1
    },
    {
        question: "Manakah bilangan yang lebih besar?",
        options: ["12", "11", "19", "14"],
        answer: 2
    },
    {
        question: "Bilangan yang paling kecil dari 17, 13, 20, 15 adalah ...",
        options: ["17", "13", "20", "15"],
        answer: 1
    },
    {
        question: "Tanda yang tepat untuk 14 ... 18 adalah ...",
        options: [">", "<", "=", "+"],
        answer: 1
    },
    {
        question: "Tanda yang tepat untuk 20 ... 16 adalah ...",
        options: ["<", "=", ">", "-"],
        answer: 2
    },
    {
        question: "Urutan dari yang terbesar: 11, 15, 13, 20 adalah ...",
        options: ["11, 13, 15, 20", "20, 15, 13, 11", "20, 13, 15, 11", "15, 20, 11, 13"],
        answer: 1
    },
    {
        question: "15 ... 15. Tanda yang tepat adalah ...",
        options: [">", "<", "=", "+"],
        answer: 2
    },
    {
        question: "Bilangan terbesar dari 12, 18, 14, 16 adalah ...",
        options: ["12", "18", "14", "16"],
        answer: 1
    },
    {
        question: "Bilangan terkecil dari 20, 11, 15, 19 adalah ...",
        options: ["20", "11", "15", "19"],
        answer: 1
    },
    {
        question: "13 ... 17. Tanda yang tepat adalah ...",
        options: [">", "=", "<", "+"],
        answer: 2
    },
    // === PENJUMLAHAN BILANGAN SAMPAI 20 ===
    {
        question: "8 + 7 = ...",
        options: ["14", "16", "15", "13"],
        answer: 2
    },
    {
        question: "Ibu membeli 12 telur. Lalu membeli lagi 5 telur. Jumlah telur ibu sekarang adalah ...",
        options: ["16", "18", "17", "15"],
        answer: 2
    },
    {
        question: "9 + 9 = ...",
        options: ["17", "19", "18", "16"],
        answer: 2
    },
    {
        question: "6 + 8 = ...",
        options: ["13", "15", "14", "12"],
        answer: 2
    },
    {
        question: "11 + 5 = ...",
        options: ["15", "17", "16", "14"],
        answer: 2
    },
    {
        question: "7 + 6 = ...",
        options: ["12", "14", "13", "11"],
        answer: 2
    },
    {
        question: "10 + 10 = ...",
        options: ["10", "20", "15", "25"],
        answer: 1
    },
    {
        question: "Ani memiliki 8 permen. Ibu memberi 4 permen lagi. Jumlah permen Ani sekarang ...",
        options: ["11", "13", "12", "10"],
        answer: 2
    },
    {
        question: "5 + 9 = ...",
        options: ["13", "15", "14", "12"],
        answer: 2
    },
    {
        question: "13 + 6 = ...",
        options: ["18", "20", "19", "17"],
        answer: 2
    },
    {
        question: "Budi punya 7 kelereng. Ayah memberi 8 kelereng lagi. Jumlah kelereng Budi ...",
        options: ["14", "16", "15", "13"],
        answer: 2
    },
    {
        question: "14 + 3 = ...",
        options: ["16", "18", "17", "15"],
        answer: 2
    },
    {
        question: "6 + 6 = ...",
        options: ["11", "13", "12", "10"],
        answer: 2
    },
    {
        question: "Di bus ada 9 penumpang. Di halte naik 7 penumpang. Jumlah penumpang sekarang ...",
        options: ["15", "17", "16", "14"],
        answer: 2
    },
    {
        question: "11 + 9 = ...",
        options: ["19", "21", "20", "18"],
        answer: 2
    },
    // === PENGURANGAN BILANGAN SAMPAI 20 ===
    {
        question: "17 - 9 = ...",
        options: ["7", "9", "8", "6"],
        answer: 2
    },
    {
        question: "Andi punya 20 kelereng. Diberikan ke Budi 6 kelereng. Sisa kelereng Andi adalah ...",
        options: ["15", "14", "13", "16"],
        answer: 1
    },
    {
        question: "20 - 5 = ...",
        options: ["14", "16", "15", "13"],
        answer: 2
    },
    {
        question: "15 - 7 = ...",
        options: ["7", "9", "8", "6"],
        answer: 2
    },
    {
        question: "18 - 9 = ...",
        options: ["8", "10", "9", "7"],
        answer: 2
    },
    {
        question: "Ibu punya 16 kue. Dimakan anak-anak 8 kue. Sisa kue ibu ...",
        options: ["7", "9", "8", "6"],
        answer: 2
    },
    {
        question: "14 - 6 = ...",
        options: ["7", "9", "8", "6"],
        answer: 2
    },
    {
        question: "19 - 11 = ...",
        options: ["7", "9", "8", "10"],
        answer: 2
    },
    {
        question: "13 - 5 = ...",
        options: ["7", "9", "8", "6"],
        answer: 2
    },
    {
        question: "Ada 12 burung di pohon. 4 burung terbang. Sisa burung di pohon adalah ...",
        options: ["7", "9", "8", "6"],
        answer: 2
    },
    {
        question: "16 - 8 = ...",
        options: ["7", "9", "8", "6"],
        answer: 2
    },
    {
        question: "11 - 3 = ...",
        options: ["7", "9", "8", "6"],
        answer: 2
    },
    {
        question: "20 - 12 = ...",
        options: ["7", "9", "8", "6"],
        answer: 2
    },
    {
        question: "Dina punya 15 buku. Dipinjam teman 6 buku. Sisa buku Dina ...",
        options: ["8", "10", "9", "7"],
        answer: 2
    },
    {
        question: "17 - 8 = ...",
        options: ["8", "10", "9", "7"],
        answer: 2
    },
    // === MENGENAL, MEMBANDINGKAN, MENGUKUR PANJANG BENDA ===
    {
        question: "Mana yang lebih panjang?",
        options: ["Pensil", "Penggaris 30 cm", "Penghapus", "Krayon"],
        answer: 1
    },
    {
        question: "Tali A panjangnya 10 jengkal. Tali B panjangnya 7 jengkal. Tali yang lebih panjang adalah ...",
        options: ["Tali B", "Tali A", "Sama panjang", "Tidak bisa dibandingkan"],
        answer: 1
    },
    {
        question: "Alat ukur panjang yang biasa digunakan di sekolah adalah ...",
        options: ["Timbangan", "Penggaris", "Thermometer", "Gelas ukur"],
        answer: 1
    },
    {
        question: "Panjang meja dapat diukur menggunakan ...",
        options: ["Jengkal tangan", "Gelas", "Batu", "Air"],
        answer: 0
    },
    {
        question: "Pensil Andi panjangnya 5 jengkal. Pensil Budi panjangnya 8 jengkal. Pensil yang lebih pendek milik ...",
        options: ["Budi", "Andi", "Sama", "Tidak tahu"],
        answer: 1
    },
    {
        question: "Satuan panjang yang sering digunakan adalah ...",
        options: ["Kilogram", "Liter", "Sentimeter", "Jam"],
        answer: 2
    },
    {
        question: "Mana benda yang paling pendek?",
        options: ["Tiang bendera", "Penghapus", "Papan tulis", "Meja guru"],
        answer: 1
    },
    {
        question: "Mengukur panjang buku menggunakan klip kertas termasuk mengukur dengan ...",
        options: ["Alat ukur baku", "Alat ukur tidak baku", "Timbangan", "Stopwatch"],
        answer: 1
    },
    {
        question: "Yang termasuk alat ukur tidak baku adalah ...",
        options: ["Meteran", "Penggaris", "Jengkal tangan", "Mistar"],
        answer: 2
    },
    {
        question: "Pita merah panjangnya 12 klip. Pita biru panjangnya 12 klip. Maka kedua pita ...",
        options: ["Pita merah lebih panjang", "Pita biru lebih panjang", "Sama panjang", "Tidak bisa dibandingkan"],
        answer: 2
    },
    // === MENGELOMPOKKAN DATA, TABEL, DIAGRAM GAMBAR ===
    {
        question: "Diagram gambar digunakan untuk ...",
        options: ["Menghitung perkalian", "Menyajikan data dengan gambar", "Mengukur panjang", "Menggambar bebas"],
        answer: 1
    },
    {
        question: "Di kelas ada 5 anak suka apel, 3 anak suka jeruk, 2 anak suka mangga. Buah yang paling disukai adalah ...",
        options: ["Jeruk", "Mangga", "Apel", "Sama semua"],
        answer: 2
    },
    {
        question: "Data jumlah hewan peliharaan siswa: kucing 6, ikan 4, burung 3. Hewan paling banyak dipelihara adalah ...",
        options: ["Ikan", "Burung", "Kucing", "Kelinci"],
        answer: 2
    },
    {
        question: "Tabel digunakan untuk ...",
        options: ["Bermain", "Menyusun dan menyajikan data", "Menggambar", "Menghitung panjang"],
        answer: 1
    },
    {
        question: "Di kelas 1A ada 8 anak laki-laki dan 7 anak perempuan. Jumlah seluruh siswa adalah ...",
        options: ["14", "16", "15", "13"],
        answer: 2
    },
    {
        question: "Data warna kesukaan: merah 4, biru 6, kuning 2. Warna yang paling sedikit disukai adalah ...",
        options: ["Merah", "Biru", "Kuning", "Hijau"],
        answer: 2
    },
    {
        question: "Untuk membuat diagram gambar buah, setiap gambar apel mewakili ...",
        options: ["Satu anak yang suka apel", "Satu buah apel di toko", "Satu pohon apel", "Satu kg apel"],
        answer: 0
    },
    {
        question: "Data makanan kesukaan siswa paling baik disajikan dengan ...",
        options: ["Puisi", "Tabel atau diagram gambar", "Cerita", "Lagu"],
        answer: 1
    },
    {
        question: "Langkah pertama membuat tabel adalah ...",
        options: ["Mewarnai", "Mengumpulkan data", "Menghias", "Menempel gambar"],
        answer: 1
    },
    {
        question: "Data mainan kesukaan: bola 5, boneka 7, mobil-mobilan 3. Jumlah seluruh anak yang didata adalah ...",
        options: ["12", "14", "15", "10"],
        answer: 2
    },
    {
        question: "Mengelompokkan benda berdasarkan warna termasuk kegiatan ...",
        options: ["Menghitung", "Mengklasifikasi data", "Mengukur", "Menggambar"],
        answer: 1
    },
    {
        question: "Rina mencatat hobi teman-temannya. Data: membaca 4, menggambar 6, olahraga 5. Hobi yang paling banyak digemari ...",
        options: ["Membaca", "Menggambar", "Olahraga", "Semua sama"],
        answer: 1
    },
    {
        question: "Pada diagram gambar, jumlah gambar menunjukkan ...",
        options: ["Berat benda", "Banyak data", "Panjang benda", "Warna benda"],
        answer: 1
    },
    {
        question: "Data transportasi ke sekolah: jalan kaki 8, sepeda 5, diantar 7. Cara ke sekolah yang paling banyak adalah ...",
        options: ["Sepeda", "Diantar", "Jalan kaki", "Naik bus"],
        answer: 2
    },
    {
        question: "Selisih antara data terbanyak dan tersedikit dalam: kucing 6, anjing 2, ikan 4 adalah ...",
        options: ["2", "4", "6", "8"],
        answer: 1
    },
    {
        question: "7 + 7 = ...",
        options: ["12", "15", "14", "13"],
        answer: 2
    },
    {
        question: "8 + 5 = ...",
        options: ["12", "14", "13", "11"],
        answer: 2
    },
    {
        question: "Di keranjang ada 11 jeruk. Ibu menambah 4 jeruk lagi. Jumlah jeruk sekarang ...",
        options: ["14", "16", "15", "13"],
        answer: 2
    },
    {
        question: "19 - 7 = ...",
        options: ["11", "13", "12", "10"],
        answer: 2
    },
    {
        question: "16 - 9 = ...",
        options: ["6", "8", "7", "5"],
        answer: 2
    },
    {
        question: "Bilangan 14 jika diuraikan menjadi ...",
        options: ["10 + 4", "10 + 5", "10 + 3", "10 + 6"],
        answer: 0
    },
    {
        question: "10 + 7 = ...",
        options: ["16", "18", "17", "15"],
        answer: 2
    },
    {
        question: "Benda yang paling panjang di kelas adalah ...",
        options: ["Pensil", "Penghapus", "Papan tulis", "Buku"],
        answer: 2
    },
    {
        question: "12 + 8 = ...",
        options: ["19", "21", "20", "18"],
        answer: 2
    },
    {
        question: "15 - 5 = ...",
        options: ["9", "11", "10", "8"],
        answer: 2
    },
    {
        question: "Urutan bilangan yang benar adalah ...",
        options: ["11, 13, 12, 14", "11, 12, 13, 14", "14, 12, 13, 11", "12, 11, 14, 13"],
        answer: 1
    },
    {
        question: "Bilangan 16 sama dengan ...",
        options: ["10 + 5", "10 + 6", "10 + 7", "10 + 8"],
        answer: 1
    },
    {
        question: "Data minuman kesukaan: susu 8, teh 5, jus 7. Total siswa yang didata ...",
        options: ["18", "22", "20", "15"],
        answer: 2
    },
    {
        question: "18 - 6 = ...",
        options: ["11", "13", "12", "10"],
        answer: 2
    },
    {
        question: "Jika 9 + ... = 15, maka angka yang tepat adalah ...",
        options: ["5", "7", "6", "4"],
        answer: 2
    }
];
