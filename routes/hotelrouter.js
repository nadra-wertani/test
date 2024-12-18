const express = require('express');
const hotelController = require('../controller/Hotelc'); // Assurez-vous du bon chemin
const router = express.Router();

// Définir les routes
router.post('/', hotelController.createHotel); // Créer un hôtel
router.get('/', hotelController.getAllHotels); // Récupérer tous les hôtels
router.get('/:id', hotelController.getHotelById); // Récupérer un hôtel par ID
router.put('/:id', hotelController.updateHotel); // Mettre à jour un hôtel par ID
router.delete('/:id', hotelController.deleteHotel); // Supprimer un hôtel par ID

module.exports = router; // Assurez-vous d'exporter correctement
