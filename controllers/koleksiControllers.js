const Koleksi = require('../models/koleksiModel');

exports.create = async (req, res) => {
  try {
    const koleksi = await Koleksi.create(req.body);
    res.status(201).json(koleksi);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  res.json(await Koleksi.find());
};