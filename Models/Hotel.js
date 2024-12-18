const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Le champ est obligatoire
  },
  fabricationDate: {
    type: Date,
    default: Date.now, // Valeur par défaut
  },
  nbr_Room: {
    type: Number,
    required: true,
    default: 0, // Valeur par défaut
  },
});

module.exports = mongoose.model('Hotel', HotelSchema);
