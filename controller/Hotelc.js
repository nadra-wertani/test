const Hotel = require('../Models/Hotel'); // Correct path to model
const hotelService = require('../services/Hotelservice'); // Service layer (if applicable)

const createHotel = async (req, res) => {
    const { name, fabricationDate, nbr_Room } = req.body;
  
    if (!name) {
      return res.status(400).json({ message: 'Hotel name is required' });
    }
  
    try {
      const hotel = new Hotel({
        name,
        fabricationDate: fabricationDate || new Date(),
        nbr_Room: nbr_Room || 0
      });
  
      const savedHotel = await hotel.save();
      res.status(201).json({
        message: 'Hôtel créé avec succès',
        hotel: savedHotel
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const getHotelsByRoomRange = async (req, res) => {
    try {
      // Recherche des hôtels ayant entre 10 et 100 chambres
      const hotels = await Hotel.find({
        nbr_Room: { $gte: 10, $lte: 100 }
      });
  
      if (hotels.length === 0) {
        return res.status(404).json({ message: 'Aucun hôtel trouvé avec ce nombre de chambres' });
      }
  
      res.status(200).json({
        message: 'Liste des hôtels récupérée avec succès',
        hotels
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des hôtels:', error);
      res.status(500).json({ message: error.message });
    }
  };
const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({
      message: 'Liste des hôtels récupérée avec succès',
      hotels
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getHotelById = async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await Hotel.findById(id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hôtel non trouvé' });
    }
    res.status(200).json({
      message: 'Hôtel récupéré avec succès',
      hotel
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedHotel) {
      return res.status(404).json({ message: 'Hôtel non trouvé' });
    }
    res.status(200).json({
      message: 'Hôtel mis à jour avec succès',
      hotel: updatedHotel
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(id);
    if (!deletedHotel) {
      return res.status(404).json({ message: 'Hôtel non trouvé' });
    }
    res.status(200).json({ message: 'Hôtel supprimé avec succès' });
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
  getHotelsByRoomRange
};
