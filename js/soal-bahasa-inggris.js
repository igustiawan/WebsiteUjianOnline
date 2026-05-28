// Soal Bahasa Inggris - Kurikulum Merdeka 2026 - Kelas 1 SD
// SAT TA 2025/2026 Semester 2
// Bank Soal: 100 soal | Keluar di ujian: 15 soal (acak)
const soalBahasaInggris = [
    // === LESSON 8: I HAVE TWO BOOKS (Counting & Have) ===
    {
        question: "I have two ... (buku)",
        options: ["Pencils", "Books", "Bags", "Pens"],
        answer: 1
    },
    {
        question: "I have three ... (pensil)",
        options: ["Books", "Bags", "Pencils", "Rulers"],
        answer: 2
    },
    {
        question: "Which sentence is correct?",
        options: ["I has a book", "I have a book", "I am a book", "I is a book"],
        answer: 1
    },
    {
        question: "How many? ✏️✏️✏️✏️ (four pencils)",
        options: ["Three pencils", "Five pencils", "Four pencils", "Two pencils"],
        answer: 2
    },
    {
        question: "'I have five erasers.' How many erasers?",
        options: ["3", "4", "5", "6"],
        answer: 2
    },
    {
        question: "The correct sentence is ...",
        options: ["I have one bags", "I have one bag", "I has one bag", "I am one bag"],
        answer: 1
    },
    {
        question: "I have ... (satu) ruler.",
        options: ["two", "three", "one", "four"],
        answer: 2
    },
    {
        question: "Count: 📚📚📚 How many books?",
        options: ["Two", "Three", "Four", "One"],
        answer: 1
    },
    {
        question: "'Have' digunakan untuk menyatakan ...",
        options: ["Warna", "Kepemilikan", "Ukuran", "Tempat"],
        answer: 1
    },
    {
        question: "I ... two hands.",
        options: ["has", "am", "have", "is"],
        answer: 2
    },

    // === LESSON 9: I HAVE A RABBIT (Pets & Animal Abilities) ===
    {
        question: "Which one is a pet?",
        options: ["Lion", "Rabbit", "Elephant", "Tiger"],
        answer: 1
    },
    {
        question: "A rabbit can ...",
        options: ["Fly", "Swim", "Jump", "Climb trees"],
        answer: 2
    },
    {
        question: "A fish can ...",
        options: ["Fly", "Run", "Swim", "Jump high"],
        answer: 2
    },
    {
        question: "A bird can ...",
        options: ["Swim", "Fly", "Crawl", "Dig"],
        answer: 1
    },
    {
        question: "I have a ... It can swim. (ikan)",
        options: ["Cat", "Dog", "Fish", "Bird"],
        answer: 2
    },
    {
        question: "A cat can ...",
        options: ["Fly", "Swim", "Climb", "Talk"],
        answer: 2
    },
    {
        question: "A dog can ...",
        options: ["Fly", "Run", "Swim in the sky", "Read"],
        answer: 1
    },
    {
        question: "Which animal can fly?",
        options: ["Cat", "Dog", "Fish", "Bird"],
        answer: 3
    },
    {
        question: "Which animal lives in water?",
        options: ["Cat", "Bird", "Fish", "Rabbit"],
        answer: 2
    },
    {
        question: "I have a cat. It can ... (menangkap tikus)",
        options: ["Fly", "Swim", "Catch mice", "Sing"],
        answer: 2
    },
    {
        question: "A ... can bark. (menggonggong)",
        options: ["Cat", "Fish", "Bird", "Dog"],
        answer: 3
    },
    {
        question: "My pet is small and white. It can jump. It is a ...",
        options: ["Fish", "Bird", "Rabbit", "Cat"],
        answer: 2
    },

    // === LESSON 10: HE IS A BOY (Subject Pronoun & To Be) ===
    {
        question: "'He ... a boy.' Choose the correct word.",
        options: ["am", "are", "is", "have"],
        answer: 2
    },
    {
        question: "'I ... a student.' Choose the correct word.",
        options: ["is", "am", "are", "has"],
        answer: 1
    },
    {
        question: "'She ... a girl.' Choose the correct word.",
        options: ["am", "are", "is", "have"],
        answer: 2
    },
    {
        question: "'You ... my friend.' Choose the correct word.",
        options: ["is", "am", "are", "has"],
        answer: 2
    },
    {
        question: "'They ... students.' Choose the correct word.",
        options: ["is", "am", "are", "has"],
        answer: 2
    },
    {
        question: "Which pronoun is used for a boy?",
        options: ["She", "He", "It", "They"],
        answer: 1
    },
    {
        question: "Which pronoun is used for a girl?",
        options: ["He", "She", "It", "We"],
        answer: 1
    },
    {
        question: "Which pronoun is used for yourself?",
        options: ["He", "She", "You", "I"],
        answer: 3
    },
    {
        question: "'... is my teacher.' (perempuan)",
        options: ["He", "She", "It", "I"],
        answer: 1
    },
    {
        question: "'... am happy.' Choose the correct word.",
        options: ["He", "She", "You", "I"],
        answer: 3
    },
    {
        question: "Andi is a boy. ... is tall.",
        options: ["She", "He", "It", "I"],
        answer: 1
    },
    {
        question: "Rina is a girl. ... is smart.",
        options: ["He", "She", "It", "They"],
        answer: 1
    },
    {
        question: "'We ... happy.' Choose the correct word.",
        options: ["is", "am", "are", "has"],
        answer: 2
    },
    {
        question: "'It ... a cat.' Choose the correct word.",
        options: ["am", "are", "is", "have"],
        answer: 2
    },
    {
        question: "To be 'am' digunakan bersama ...",
        options: ["He", "She", "I", "They"],
        answer: 2
    },

    // === LESSON 11: THIS IS MY FAMILY ===
    {
        question: "My father's mother is my ...",
        options: ["Sister", "Aunt", "Grandmother", "Mother"],
        answer: 2
    },
    {
        question: "My mother's sister is my ...",
        options: ["Grandmother", "Sister", "Aunt", "Mother"],
        answer: 2
    },
    {
        question: "My father's brother is my ...",
        options: ["Brother", "Uncle", "Grandfather", "Father"],
        answer: 1
    },
    {
        question: "My parents are my ... and my ...",
        options: ["Brother and sister", "Father and mother", "Uncle and aunt", "Grandfather and grandmother"],
        answer: 1
    },
    {
        question: "'This is my sister.' Artinya ...",
        options: ["Ini kakak laki-lakiku", "Ini saudara perempuanku", "Ini ibuku", "Ini nenekku"],
        answer: 1
    },
    {
        question: "'This is my brother.' Artinya ...",
        options: ["Ini saudara laki-lakiku", "Ini ayahku", "Ini pamanku", "Ini kakekku"],
        answer: 0
    },
    {
        question: "Father in Indonesian is ...",
        options: ["Ibu", "Kakak", "Ayah", "Paman"],
        answer: 2
    },
    {
        question: "Mother in Indonesian is ...",
        options: ["Ayah", "Ibu", "Bibi", "Nenek"],
        answer: 1
    },
    {
        question: "Grandfather in Indonesian is ...",
        options: ["Nenek", "Paman", "Kakek", "Ayah"],
        answer: 2
    },
    {
        question: "Grandmother in Indonesian is ...",
        options: ["Kakek", "Nenek", "Bibi", "Ibu"],
        answer: 1
    },
    {
        question: "My father's father is my ...",
        options: ["Uncle", "Brother", "Grandfather", "Father"],
        answer: 2
    },
    {
        question: "I love my ... (keluarga)",
        options: ["School", "Family", "Friend", "Teacher"],
        answer: 1
    },
    {
        question: "'Baby' artinya ...",
        options: ["Anak kecil/bayi", "Kakak", "Paman", "Nenek"],
        answer: 0
    },

    // === LESSON 12: FRUITS AND VEGETABLES (Have/Has) ===
    {
        question: "Which one is a fruit?",
        options: ["Carrot", "Apple", "Spinach", "Potato"],
        answer: 1
    },
    {
        question: "Which one is a vegetable?",
        options: ["Mango", "Orange", "Carrot", "Banana"],
        answer: 2
    },
    {
        question: "Which one is NOT a fruit?",
        options: ["Apple", "Banana", "Spinach", "Mango"],
        answer: 2
    },
    {
        question: "Which one is NOT a vegetable?",
        options: ["Carrot", "Spinach", "Grape", "Potato"],
        answer: 2
    },
    {
        question: "'He ... a pencil.' Choose the correct word.",
        options: ["have", "has", "having", "had"],
        answer: 1
    },
    {
        question: "'She ... an apple.' Choose the correct word.",
        options: ["have", "has", "having", "had"],
        answer: 1
    },
    {
        question: "'I ... two bananas.' Choose the correct word.",
        options: ["has", "have", "having", "had"],
        answer: 1
    },
    {
        question: "'They ... many oranges.' Choose the correct word.",
        options: ["has", "have", "having", "is"],
        answer: 1
    },
    {
        question: "A banana is ... (kuning)",
        options: ["Red", "Green", "Yellow", "Blue"],
        answer: 2
    },
    {
        question: "An apple can be ... (merah)",
        options: ["Blue", "Red", "Black", "White"],
        answer: 1
    },
    {
        question: "A carrot is ... (oranye)",
        options: ["Green", "Blue", "Yellow", "Orange"],
        answer: 3
    },
    {
        question: "Spinach is ... (hijau)",
        options: ["Red", "Yellow", "Green", "Orange"],
        answer: 2
    },
    {
        question: "'Has' digunakan bersama ...",
        options: ["I", "You", "He/She/It", "They"],
        answer: 2
    },
    {
        question: "'Have' digunakan bersama ...",
        options: ["He", "She", "It", "I/You/They"],
        answer: 3
    },
    {
        question: "Watermelon is a ...",
        options: ["Vegetable", "Fruit", "Meat", "Drink"],
        answer: 1
    },
    {
        question: "Potato is a ...",
        options: ["Fruit", "Vegetable", "Meat", "Drink"],
        answer: 1
    },
    {
        question: "Grape in Indonesian is ...",
        options: ["Jeruk", "Apel", "Anggur", "Pisang"],
        answer: 2
    },
    {
        question: "Mango in Indonesian is ...",
        options: ["Jeruk", "Mangga", "Apel", "Semangka"],
        answer: 1
    },

    // === LESSON 13: HE LIKES APPLES ===
    {
        question: "'She ... apples.' Choose the correct word.",
        options: ["like", "likes", "liking", "liked"],
        answer: 1
    },
    {
        question: "'He ... bananas.' Choose the correct word.",
        options: ["like", "likes", "liking", "liked"],
        answer: 1
    },
    {
        question: "'I ... mangoes.' Choose the correct word.",
        options: ["likes", "like", "liking", "liked"],
        answer: 1
    },
    {
        question: "'They ... oranges.' Choose the correct word.",
        options: ["likes", "like", "liking", "liked"],
        answer: 1
    },
    {
        question: "'Likes' digunakan bersama ...",
        options: ["I", "You", "He/She/It", "They"],
        answer: 2
    },
    {
        question: "'Like' digunakan bersama ...",
        options: ["He", "She", "It", "I/You/They"],
        answer: 3
    },
    {
        question: "Andi likes ... (jeruk)",
        options: ["Apples", "Bananas", "Oranges", "Grapes"],
        answer: 2
    },
    {
        question: "Rina likes ... (pisang)",
        options: ["Apples", "Bananas", "Oranges", "Grapes"],
        answer: 1
    },
    {
        question: "He does not ... vegetables.",
        options: ["likes", "like", "liking", "liked"],
        answer: 1
    },
    {
        question: "She likes ..., but she does not like spinach.",
        options: ["Carrots", "Water", "Books", "Pencils"],
        answer: 0
    },
    // === CAMPURAN: REVIEW SEMUA LESSON ===
    {
        question: "I ... a student. He ... a teacher.",
        options: ["am, is", "is, am", "are, is", "am, are"],
        answer: 0
    },
    {
        question: "She ... two cats. They can ...",
        options: ["have, fly", "has, climb", "has, talk", "have, read"],
        answer: 1
    },
    {
        question: "My ... cooks dinner. (ibu)",
        options: ["Father", "Brother", "Mother", "Sister"],
        answer: 2
    },
    {
        question: "My ... goes to work. (ayah)",
        options: ["Mother", "Sister", "Brother", "Father"],
        answer: 3
    },
    {
        question: "Which is correct?",
        options: ["He have a dog", "He has a dog", "He am a dog", "He are a dog"],
        answer: 1
    },
    {
        question: "Which is correct?",
        options: ["She like apples", "She likes apples", "She liking apples", "She liked apples"],
        answer: 1
    },
    {
        question: "A ... can fly and sing.",
        options: ["Fish", "Cat", "Bird", "Dog"],
        answer: 2
    },
    {
        question: "An orange is a ...",
        options: ["Vegetable", "Animal", "Fruit", "Color"],
        answer: 2
    },
    {
        question: "Tomato in Indonesian is ...",
        options: ["Wortel", "Tomat", "Bayam", "Kentang"],
        answer: 1
    },
    {
        question: "Strawberry is ... (merah)",
        options: ["Yellow", "Green", "Red", "Orange"],
        answer: 2
    },
    {
        question: "'We are happy.' Artinya ...",
        options: ["Dia senang", "Kamu senang", "Kami senang", "Saya senang"],
        answer: 2
    },
    {
        question: "'This is my uncle.' Artinya ...",
        options: ["Ini bibi saya", "Ini paman saya", "Ini kakek saya", "Ini ayah saya"],
        answer: 1
    },
    {
        question: "I have ... eyes. (dua)",
        options: ["One", "Two", "Three", "Four"],
        answer: 1
    },
    {
        question: "'You are smart.' Artinya ...",
        options: ["Dia pintar", "Saya pintar", "Kamu pintar", "Mereka pintar"],
        answer: 2
    },
    {
        question: "A turtle can ...",
        options: ["Fly", "Run fast", "Walk slowly", "Sing"],
        answer: 2
    },
    {
        question: "My sister ... a doll. (has/have)",
        options: ["have", "has", "having", "is"],
        answer: 1
    },
    {
        question: "We ... students. (am/is/are)",
        options: ["am", "is", "are", "has"],
        answer: 2
    },
    {
        question: "Cucumber is a ...",
        options: ["Fruit", "Vegetable", "Animal", "Drink"],
        answer: 1
    },
    {
        question: "My grandmother is my mother's ...",
        options: ["Sister", "Mother", "Daughter", "Aunt"],
        answer: 1
    },
    {
        question: "'He likes ice cream.' Artinya ...",
        options: ["Dia suka roti", "Dia suka es krim", "Dia punya es krim", "Dia membeli es krim"],
        answer: 1
    },
    {
        question: "Four plus three is ...",
        options: ["Six", "Seven", "Eight", "Five"],
        answer: 1
    },
    {
        question: "'I like watermelon.' Artinya ...",
        options: ["Saya suka jeruk", "Saya punya semangka", "Saya suka semangka", "Saya makan semangka"],
        answer: 2
    }
];
