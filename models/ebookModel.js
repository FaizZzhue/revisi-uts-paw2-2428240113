const mongoose = require('mongoose');

const penulisSchema = new mongoose.Schema({
  nama: String,
  negara: String,
}, { _id: false });

const ebookSchema = new mongoose.Schema({
  kodeEbook: { type: String, required: [true, 'kode ebook wajib diisi'], unique: true, trim: true},
  judul: { type: String, required: [true, 'judul wajib diisi'], trim: true },
  ukuranMb: { type: String, min: 0, trim: true },
  format: { type: String, trim: true },
  penulis: penulisSchema,
  koleksiId: { type: mongoose.Schema.Types.ObjectId, ref: 'Koleksi' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Ebook', ebookSchema);