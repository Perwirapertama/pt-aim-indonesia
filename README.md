# AIM Indonesia — Website Praktikum APSI

Website statis profil PT Aman Indah Makmur untuk **Acara VIII — WEBSITE**, dikustomisasi dari template **Company** oleh BootstrapMade. Penomoran acara mengikuti PPT ACARA 8; materi buku mengacu pada bab IX WEBSITE. Bahasa antarmuka Indonesia. Seluruh logo, foto kegiatan, serta foto produk berasal dari sumber perusahaan; tidak ada aset AI tambahan pada versi ini.

## Buka di Visual Studio Code

1. Buka folder ini melalui **File → Open Folder**.
2. Buka terminal VS Code dan jalankan `node serve.mjs`.
3. Akses alamat `http://127.0.0.1:4173` yang dicetak terminal. Hentikan server dengan Ctrl+C.

Alternatif: gunakan ekstensi Live Server. Halaman utama juga dapat dibuka langsung dari `index.html`; server lokal disarankan untuk pemeriksaan font dan media. Tidak perlu `npm install` atau proses build.

## Berkas yang dapat diedit

- `index.html`: struktur, teks, produk, kontak, dan susunan bagian.
- `assets/css/aim.css`: identitas visual, ukuran, warna, dan responsivitas.
- `assets/css/company.css`: stylesheet template asal, tetap disimpan.
- `assets/js/main.js`: data detail produk, pencarian/filter, dialog, galeri, dan draf pesan WhatsApp.
- `assets/img/`: aset perusahaan asli dengan resolusi sumber.
- `sumber.html`, `assets/SOURCES.md`, `assets/asset-sources.json`: sumber materi, gambar, dan catatan tahun data.
- `serve.mjs`: server lokal untuk pengembangan, tidak dibutuhkan GitHub Pages.

## Fitur

- Navigasi desktop dan HP, tautan langsung antarbagian, penanda bagian aktif, dan tombol kembali ke atas.
- Sembilan produk, lima filter kategori, pencarian, keadaan hasil kosong, serta detail produk yang dapat ditutup dengan tombol, klik latar, atau Escape.
- Video YouTube dimuat setelah tombol video dipilih. Pemutar dibuang ketika dialog ditutup.
- Galeri tiga foto; mendukung tombol sebelumnya/berikutnya dan panah keyboard.
- FAQ, Google Maps, email, media sosial, serta tautan sumber produk dan berita.
- Formulir memvalidasi input dan **menyiapkan draf WhatsApp**. Pesan baru dikirim setelah pengunjung meninjau dan menekan Kirim di WhatsApp. Tidak ada penyimpanan data formulir pada website.
- Font Manrope, Bootstrap, ikon, dan gambar disertakan secara lokal. Video, peta, serta tautan keluar membutuhkan internet.

## Publikasi di GitHub Pages

1. Buat repositori GitHub untuk proyek. Untuk GitHub Free, pilih repositori publik sesuai alur modul.
2. Unggah isi folder proyek, sehingga `index.html` berada di akar repositori. Jangan mengunggah folder `.git` atau kredensial apa pun. Folder `.openai` merupakan konfigurasi preview Sites dan dapat diabaikan untuk GitHub Pages.
3. Buka **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Pilih branch `main`, folder `/(root)`, lalu simpan.
5. Tunggu hasil deployment. Gunakan URL yang benar-benar ditampilkan GitHub pada halaman Pages.

Alur terminal VS Code untuk repositori GitHub baru (ganti URL repositori):

```powershell
git remote add github https://github.com/USERNAME/NAMA-REPOSITORI.git
git push -u github HEAD:main
```

Jika folder ini tidak memiliki riwayat Git, jalankan `git init`, `git add .`, dan `git commit -m "Website profil AIM"` terlebih dahulu. Pastikan identitas Git dan autentikasi akun GitHub sudah dikonfigurasi. Semua jalur aset website bersifat relatif sehingga kompatibel dengan project Pages di subfolder repositori.

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
