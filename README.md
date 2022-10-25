Mengukur Big O Notation

1. O(1), konstan= tidak memakan banyak waktu
2. O(n), Linear= waktu yang dimakan sebanding dengan memori yang digunakan
3. O(n log N), Logaritma N = lebih cepat dibanding linear;
4. O(n^2), Kuadrat 2 = biasanya digunakan untuk inner loop;
   O(n^N), Kuadrat N = biasanya digunakan untuk inner loop

Aturan mengukur complexity

1. Hilangkan konstanta
2. Hilangkan yang tida dominan
3. Tambahkan jika berbeda langkah
4. Kalian jika langkah sama
5. Variabel berdasarkan input

Definisi Amortisasi

1. Diawali dengan Evaluasi Complexity yang dilakukan dengan Analisa Amortisasi
2. lalu dilakukan Penyusutan Complexity

Analisa Amortisasi memiliki beberapa method:

1. Aggregate Method = Menentukan complexity terbesar lalu menghitung amortisasi
2. Accounting Method = Menggunakan perhitungan biaya untuk setiap operasi
3. Potential Method = Sama seperti accounting method namun menggunakan fungsi potensi

Beberapa contohnya seperti:

1. Dynamic Array = Sebuah kemampuan beradaptasi dengan kemampuannya
1. Queue = FIFO (First In First Out)
1. Stack = LIFO (Last In First Out)
