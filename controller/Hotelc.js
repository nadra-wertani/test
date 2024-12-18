// controllers/hotelController.js
const hotelService = require('../services/Hotelservice'); // Assurez-vous que le chemin est correct
const { create, findAll, findById, updateById, deleteById } = hotelService;

// Créer un hôtel
const createHotel = async (req, res) => {
  try {
    const hotel = await create(req.body);
    res.status(201).json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer tous les hôtels
const getAllHotels = async (req, res) => {
  try {
    const hotels = await findAll();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un hôtel par ID
const getHotelById = async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await findById(id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un hôtel par ID
const updateHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedHotel = await updateById(id, req.body);
    if (!updatedHotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un hôtel par ID
const deleteHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedHotel = await deleteById(id);
    if (!deletedHotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }
    res.status(200).json({ message: 'Hotel deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createHotel,
  getAllHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
};
