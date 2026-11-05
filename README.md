# AIM Indonesia — Website Praktikum APSI

Website statis profil PT Aman Indah Makmur untuk **Acara VIII — WEBSITE**, menggunakan template **Company** oleh BootstrapMade. Kelompok **S2**, praktikan **Dimas Prawiratama**, NIM **122240199**. Penomoran acara mengikuti PPT ACARA 8; materi buku mengacu pada bab IX WEBSITE. Bahasa antarmuka Indonesia. Logo, foto kegiatan, dan foto produk mengacu pada sumber yang tercantum dalam proyek.

- Website: https://perwirapertama.github.io/aim-indonesia-apsi/
- Repositori: https://github.com/Perwirapertama/aim-indonesia-apsi
- Folder laptop: `D:\S2_PT_Aman_Indah_Makmur`

## Buka di Visual Studio Code

1. Buka folder ini melalui **File → Open Folder**.
2. Buka terminal VS Code dan jalankan `node serve.mjs`.
3. Akses alamat `http://127.0.0.1:4173` yang dicetak terminal. Hentikan server dengan Ctrl+C.

Alternatif: gunakan ekstensi Live Server. Halaman utama juga dapat dibuka langsung dari `index.html`; server lokal disarankan untuk pemeriksaan font dan media. Tidak perlu `npm install` atau proses build.

## Berkas yang dapat diedit

- `index.html`: struktur, teks, produk, kontak, dan susunan bagian.
- `assets/css/aim.css`: identitas visual, ukuran, warna, dan responsivitas.
- `assets/css/company.css`: stylesheet template asal, tetap disimpan.
- `assets/js/main.js`: data detail produk, pencarian/filter, dialog, galeri, dan draf pesan WhatsApp serta email.
- `assets/img/`: aset perusahaan asli dengan resolusi sumber.
- `sumber.html`, `assets/SOURCES.md`, `assets/asset-sources.json`: sumber materi, gambar, dan catatan tahun data.
- `serve.mjs`: server lokal untuk pengembangan, tidak dibutuhkan GitHub Pages.

## Fitur

- Navigasi desktop dan HP, tautan langsung antarbagian, penanda bagian aktif, dan tombol kembali ke atas.
- Sembilan produk, lima filter kategori, pencarian, keadaan hasil kosong, serta detail produk yang dapat ditutup dengan tombol, klik latar, atau Escape.
- Video YouTube dimuat setelah tombol video dipilih. Pemutar dibuang ketika dialog ditutup.
- Galeri tiga foto; mendukung tombol sebelumnya/berikutnya dan panah keyboard.
- FAQ, Google Maps, email, media sosial, serta tautan sumber produk dan berita.
- Formulir memvalidasi input dan **menyiapkan draf WhatsApp atau email**. Semua tujuan pengujian memakai kontak praktikan Dimas Prawiratama: **dimasbusinesshub@gmail.com** dan **+62 851-9001-2056**. Tombol email membuka aplikasi email bawaan melalui `mailto:`. Pesan baru dikirim setelah pengunjung meninjau dan menekan Kirim di aplikasinya. Tidak ada penyimpanan data formulir pada website.
- Font Manrope, Bootstrap, ikon, dan gambar disertakan secara lokal. Video, peta, serta tautan keluar membutuhkan internet.

## Memperbarui website dari VS Code

GitHub Pages sudah menggunakan branch `main`, folder `/(root)`. Setelah mengedit dan memeriksa hasil di server lokal, hentikan server dengan Ctrl+C lalu jalankan:

```powershell
git status
git add .
git commit -m "Perbarui website AIM"
git push origin main
```

Gunakan langkah ini dari folder hasil clone repositori. Pastikan Git terpasang dan akun GitHub sudah terautentikasi; masuk dengan akun pemilik repositori jika diminta. Jika memakai salinan dari ZIP, clone repositori terlebih dahulu lalu salin berkas yang diedit ke folder clone. Tunggu proses GitHub Pages selesai, lalu muat ulang website. Semua jalur aset bersifat relatif sehingga kompatibel dengan project Pages.

Seluruh kode, gambar, font, dan pustaka tampilan tersedia di folder proyek. YouTube, Google Maps, WhatsApp, email, dan publikasi GitHub membutuhkan internet. Berkas ZIP pengumpulan disimpan di folder `pengumpulan/` pada laptop dan tidak diunggah bersama kode website.

## Kesesuaian tugas Acara VIII

Enam konten pada catatan praktikum tersedia: Beranda (`#beranda`), sejarah/profil (`#tentang`), struktur perusahaan (`#organisasi`), Maps/alamat (`#kontak`), media sosial (`#kontak`), dan produk (`#produk`). Menu Struktur disediakan agar bagian wajib mudah ditemukan. Seluruh tampilan dikustomisasi melalui CSS, menggunakan grid responsif Bootstrap, hierarki judul, warna yang konsisten, dan umpan balik pencarian/formulir.

PPT halaman 13 menetapkan pengumpulan ZIP/RAR dengan format `KELOMPOK_Nama_NIM_TUGAS MODUL ACARA 8`. Jadwal tugas modul mengikuti akhir jam praktikum. Halaman 14 juga menyebut laporan sementara dan tautan website pada Drive asistensi paling lambat H-1 praktikum selanjutnya pukul 22.00, serta presentasi pada pertemuan berikutnya. Tanggal kalender mengikuti jadwal kelas, bukan tanggal pembuatan website. Laporan sementara dan pengunggahan ke Drive merupakan langkah pengumpulan terpisah.

## Sumber dan lisensi

- Template Company: https://bootstrapmade.com/company-free-html-bootstrap-template/
- Lisensi template: https://bootstrapmade.com/license/ — kredit **Designed by BootstrapMade** dipertahankan.
- Bootstrap dan Bootstrap Icons: lisensi MIT dari pembuatnya; header lisensi berkas vendor dipertahankan.
- Manrope: SIL Open Font License; lihat `assets/fonts/OFL.txt`.
- Logo, kemasan, merek, dan dokumentasi AIM tetap milik pemiliknya. Sumber dan URL asli terdaftar di `assets/asset-sources.json`.
- Data profil terkini merujuk situs perusahaan yang diakses 5 November 2026. Data proses, linimasa historis, dan gambaran fungsi organisasi merujuk laporan KP 2024.

Website ini merupakan proyek akademik dan memuat penanda tersebut di footer, bukan pernyataan afiliasi atau situs resmi perusahaan.
