# Catatan verifikasi website AIM

Pemeriksaan dilakukan 5 November 2026 pada browser pratinjau.

## Berkas dan konten

- JavaScript lolos `node --check`.
- 87 referensi lokal HTML/CSS diperiksa: tidak ada berkas hilang atau anchor internal tidak dikenal; tidak ada ID duplikat.
- Seluruh 22 gambar sumber berhasil dibaca; tidak ada gambar rusak pada halaman browser.
- Template Company disertakan dan kredit BootstrapMade dipertahankan.
- Sumber profil, foto, berita, produk, serta konteks data 2024/2026 tercantum pada halaman Sumber & Tentang Proyek.

## Pemeriksaan interaksi

- Filter Dewasa menampilkan 3 produk; filter Hewan menampilkan 1 produk.
- Pencarian Luna menampilkan 1 produk; pencarian tanpa hasil memunculkan pesan kosong dan tombol reset mengembalikan 9 produk.
- Detail produk IDEAL dan Oh My Pet membuka gambar, deskripsi, varian, dan tautan sumber yang sesuai. Tombol tutup dan Escape berfungsi.
- Galeri membuka foto, memperbarui keterangan saat berpindah, dan dapat ditutup.
- Pemutar YouTube berhasil dimuat setelah tombol video dipilih; iframe dilepas setelah dialog ditutup.
- Peta Google berhasil dimuat dan memiliki tautan buka peta terpisah.
- Formulir dengan data uji lokal menghasilkan tautan WhatsApp berisi pesan yang terenkode dengan benar. Tidak ada pesan dikirim selama pengujian.
- Menu HP dapat dibuka dan tertutup kembali ketika tautan dipilih.

## Tampilan

- Desktop: 1280 × 900.
- Tablet: 768 × 1024.
- HP: 390 × 844.
- Tidak ditemukan gulir horizontal pada ketiga ukuran tersebut. Dialog produk pada HP dapat digulir dan tombol tindak lanjut dapat diakses.
- Browser tidak mencatat error JavaScript selama pemeriksaan awal.

Video, peta, tautan resmi, dan WhatsApp memerlukan internet serta dapat bergantung pada ketersediaan layanan pihak ketiga. Pemeriksaan tautan WhatsApp dilakukan sampai tahap draf, tanpa membuka atau mengirim ke perusahaan.

## Penyesuaian Acara VIII

PPT ACARA 8 dan catatan papan tulis telah diperiksa. Menu Struktur ditambahkan; bagan organisasi asli dari laporan KP 2024 disertakan dalam ukuran sumber. Nama pengumpulan: S2_Dimas Prawiratama_122240199_TUGAS MODUL ACARA 8.zip. Format laporan sementara tetap merupakan berkas terpisah.

## Kontak pengujian praktikan

- Semua tautan WhatsApp diarahkan ke +62 851-9001-2056 dan email ke dimasbusinesshub@gmail.com sesuai permintaan praktikan.
- Formulir memiliki pilihan Siapkan WhatsApp dan Siapkan Email. Kedua draf diuji di browser; penerima, topik, dan isi pesan terenkode dengan benar.
- Pilihan email memakai mailto dan membuka aplikasi email pengguna. Website tidak mengirim email melalui server.
- Tidak ditemukan tautan kontak perusahaan lama pada halaman utama. Tidak ada pesan WhatsApp atau email yang dikirim selama pengujian.
- Kedua tombol tetap muat pada lebar HP 390 piksel tanpa gulir horizontal.

## Animasi gulir dan alamat website

- Judul, foto, merek, kartu produk, layanan, struktur, berita, FAQ, dan kontak muncul bertahap ketika memasuki layar. Elemen tetap terlihat setelah animasi pertama.
- Pemeriksaan browser memastikan elemen di bawah layar menunggu, lalu jumlah elemen yang tampil bertambah setelah halaman digulir. Kartu produk memiliki jeda berurutan 0, 80, 160, dan 240 milidetik.
- Pada lebar HP 390 piksel, menu dapat membuka bagian Produk dan tertutup kembali. Filter Dewasa menampilkan tiga produk; dialog IDEAL Adult Pants dapat dibuka dan ditutup dengan Escape. Tidak ada gulir horizontal.
- Preferensi pengurangan gerakan dan pencetakan memiliki aturan untuk menampilkan konten tanpa animasi. Tanpa JavaScript atau IntersectionObserver, konten tetap ditampilkan.
- Alamat website: https://perwirapertama.github.io/pt-aim-indonesia/
- Repositori: https://github.com/Perwirapertama/pt-aim-indonesia

## Tipografi situs resmi AIM

- Gaya teks situs resmi AIM diperiksa langsung di browser: Montserrat Alternates untuk teks dan menu, Catamaran untuk judul utama bagian, serta Poppins untuk teks layanan.
- Ketiga font diterapkan melalui berkas WOFF2 lokal dengan bobot 400–800. Lisensi masing-masing disertakan dalam folder font.
- Browser memastikan ketiga keluarga font berhasil dimuat; font teks, judul, menu, dan paragraf layanan sesuai pembagiannya.
- Pada desktop 1280 × 900, navigasi tetap muat. Pada HP 390 × 844, judul, menu, informasi kontak, dan formulir tetap muat tanpa gulir horizontal.
