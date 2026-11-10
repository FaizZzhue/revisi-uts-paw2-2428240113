// // seed.js
// // Mengisi basis data dengan 8 koleksi dan 80 ebook (10 ebook per koleksi).
// // Aman dijalankan berulang: data lama dihapus dulu.
// // Jalankan: node seed.js

// require('dotenv').config({ quiet: true });
// const mongoose = require('mongoose');
// const Koleksi = require('./models/koleksiModel');
// const Ebook = require('./models/ebookModel');

// // ---------- Data koleksi (kode otomatis uppercase oleh schema) ----------
// const KOLEKSI = [
//   { kode: 'INF', nama: 'Informatika dan Pemrograman' },
//   { kode: 'SIS', nama: 'Sistem Informasi' },
//   { kode: 'MAT', nama: 'Matematika dan Statistika' },
//   { kode: 'SAS', nama: 'Sastra dan Bahasa' },
//   { kode: 'EKO', nama: 'Ekonomi dan Bisnis' },
//   { kode: 'SEJ', nama: 'Sejarah dan Budaya' },
//   { kode: 'BIO', nama: 'Biologi dan Lingkungan' },
//   { kode: 'DSN', nama: 'Desain dan Seni' },
// ];

// // ---------- Judul ebook per koleksi (kunci = kode koleksi) ----------
// const JUDUL = {
//   INF: [
//     'Dasar-Dasar Pemrograman JavaScript',
//     'Node.js dan Express untuk Pemula',
//     'Belajar MongoDB dari Nol',
//     'Struktur Data dan Algoritma',
//     'Pemrograman Berorientasi Objek dengan Java',
//     'REST API dengan Express.js',
//     'Pengantar Python untuk Analisis Data',
//     'Git dan GitHub untuk Kolaborasi Tim',
//     'Jaringan Komputer Praktis',
//     'Keamanan Aplikasi Web',
//   ],
//   SIS: [
//     'Analisis dan Perancangan Sistem Informasi',
//     'Basis Data Relasional dan SQL',
//     'Manajemen Proyek Teknologi Informasi',
//     'Business Intelligence dan Data Warehouse',
//     'Enterprise Resource Planning',
//     'Audit Sistem Informasi',
//     'Rekayasa Perangkat Lunak Modern',
//     'UML dan Pemodelan Sistem',
//     'Tata Kelola TI dengan COBIT',
//     'Transformasi Digital Organisasi',
//   ],
//   MAT: [
//     'Kalkulus Dasar',
//     'Aljabar Linear dan Aplikasinya',
//     'Statistika untuk Penelitian',
//     'Matematika Diskrit',
//     'Teori Peluang',
//     'Persamaan Diferensial Biasa',
//     'Metode Numerik',
//     'Riset Operasi',
//     'Pengantar Logika Matematika',
//     'Statistika Nonparametrik',
//   ],
//   SAS: [
//     'Kumpulan Cerpen Senja di Musi',
//     'Tata Bahasa Baku Bahasa Indonesia',
//     'Teori dan Kajian Prosa',
//     'Puisi Kontemporer Nusantara',
//     'Menulis Kreatif untuk Pemula',
//     'Pengantar Linguistik Umum',
//     'Retorika dan Public Speaking',
//     'Novel Sejarah Kerajaan Sriwijaya',
//     'Penulisan Karya Ilmiah',
//     'Bahasa Inggris untuk Akademik',
//   ],
//   EKO: [
//     'Pengantar Ilmu Ekonomi',
//     'Manajemen Keuangan Perusahaan',
//     'Akuntansi Dasar',
//     'Pemasaran Digital',
//     'Kewirausahaan dan Startup',
//     'Ekonomi Moneter',
//     'Manajemen Sumber Daya Manusia',
//     'Analisis Laporan Keuangan',
//     'Perilaku Konsumen',
//     'Ekonomi Pembangunan Indonesia',
//   ],
//   SEJ: [
//     'Sejarah Kerajaan Sriwijaya',
//     'Sejarah Kesultanan Palembang Darussalam',
//     'Sejarah Perjuangan Kemerdekaan Indonesia',
//     'Budaya dan Adat Melayu Sumatera Selatan',
//     'Arkeologi Nusantara',
//     'Sejarah Dunia Modern',
//     'Antropologi Budaya',
//     'Sejarah Perdagangan Rempah',
//     'Songket dan Warisan Tekstil Palembang',
//     'Historiografi Indonesia',
//   ],
//   BIO: [
//     'Biologi Sel dan Molekuler',
//     'Ekologi Dasar',
//     'Genetika Modern',
//     'Mikrobiologi Lingkungan',
//     'Botani Tropis',
//     'Konservasi Keanekaragaman Hayati',
//     'Ekosistem Lahan Gambut',
//     'Zoologi Vertebrata',
//     'Bioteknologi Pertanian',
//     'Pengelolaan Limbah dan Daur Ulang',
//   ],
//   DSN: [
//     'Prinsip Desain Grafis',
//     'Desain Antarmuka dan Pengalaman Pengguna',
//     'Teori Warna dan Komposisi',
//     'Tipografi untuk Desainer',
//     'Fotografi Digital Dasar',
//     'Ilustrasi Digital dengan Vektor',
//     'Animasi 2D untuk Pemula',
//     'Sejarah Seni Rupa Indonesia',
//     'Desain Branding dan Identitas Visual',
//     'Prototyping dengan Figma',
//   ],
// };

// // ---------- Pool penulis ----------
// const PENULIS = [
//   { nama: 'Budi Santoso', negara: 'Indonesia' },
//   { nama: 'Siti Rahmawati', negara: 'Indonesia' },
//   { nama: 'Andi Wijaya', negara: 'Indonesia' },
//   { nama: 'Dewi Lestari', negara: 'Indonesia' },
//   { nama: 'Rizky Pratama', negara: 'Indonesia' },
//   { nama: 'Nur Aisyah', negara: 'Indonesia' },
//   { nama: 'Agus Salim', negara: 'Indonesia' },
//   { nama: 'Maya Anggraini', negara: 'Indonesia' },
//   { nama: 'Ahmad Faisal', negara: 'Malaysia' },
//   { nama: 'Nurul Huda', negara: 'Malaysia' },
//   { nama: 'Lim Wei Jie', negara: 'Singapura' },
//   { nama: 'Tan Mei Ling', negara: 'Singapura' },
//   { nama: 'John Anderson', negara: 'Amerika Serikat' },
//   { nama: 'Emily Carter', negara: 'Amerika Serikat' },
//   { nama: 'Michael Brown', negara: 'Inggris' },
//   { nama: 'Sophie Laurent', negara: 'Prancis' },
//   { nama: 'Hans Müller', negara: 'Jerman' },
//   { nama: 'Kenji Tanaka', negara: 'Jepang' },
//   { nama: 'Park Min-jun', negara: 'Korea Selatan' },
//   { nama: 'Arjun Sharma', negara: 'India' },
// ];

// const FORMAT = ['PDF', 'EPUB', 'MOBI', 'PDF', 'PDF', 'EPUB'];

// async function main() {
//   await mongoose.connect(process.env.DB_URI);

//   // Hapus data lama (ebook dulu karena merujuk koleksi)
//   await Ebook.deleteMany({});
//   await Koleksi.deleteMany({});

//   const koleksi = await Koleksi.insertMany(KOLEKSI);

//   const ebooks = [];
//   let n = 0;
//   for (const k of koleksi) {
//     for (const judul of JUDUL[k.kode]) {
//       n += 1;
//       ebooks.push({
//         kodeEbook: `EB${String(n).padStart(3, '0')}`,
//         judul,
//         // ukuranMb bertipe String di model; kalau diubah ke Number, hapus String(...)
//         ukuranMb: String((1.5 + ((n * 7) % 90) / 10).toFixed(1)),
//         format: FORMAT[n % FORMAT.length],
//         penulis: PENULIS[(n * 3) % PENULIS.length],
//         koleksiId: k._id,
//       });
//     }
//   }

//   await Ebook.insertMany(ebooks);

//   console.log(`Seed selesai: ${koleksi.length} koleksi, ${ebooks.length} ebook`);
//   await mongoose.disconnect();
// }

// main().catch((err) => {
//   console.error(err.message);
//   process.exit(1);
// });