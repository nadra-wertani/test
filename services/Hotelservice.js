// services/hotelService.js
const Hotel = require('../Models/Hotel'); // Assurez-vous que le chemin est correct

// Créer un nouvel hôtel
const create = async (data) => {
  try {
    const hotel = new Hotel(data);
    return await hotel.save();
  } catch (error) {
    throw new Error('Error creating hotel: ' + error.message);
  }
};

// Récupérer tous les hôtels
const findAll = async () => {
  try {
    return await Hotel.find();
  } catch (error) {
    throw new Error('Error finding hotels: ' + error.message);
  }
};

// Récupérer un hôtel par ID
const findById = async (id) => {
  try {
    return await Hotel.findById(id);
  } catch (error) {
    throw new Error('Error finding hotel: ' + error.message);
  }
};

// Mettre à jour un hôtel par ID
const updateById = async (id, data) => {
  try {
    return await Hotel.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error('Error updating hotel: ' + error.message);
  }
};

// Supprimer un hôtel par ID
const deleteById = async (id) => {
  try {
    return await Hotel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error deleting hotel: ' + error.message);
  }
};

module.exports = {
  create,
  findAll,
  findById,
  updateById,
  deleteById,
};
