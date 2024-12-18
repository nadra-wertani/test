const express = require('express');
const router = express.Router();
const hotelController = require('../controller/Hotelc');

// Route pour créer un hôtel
router.post('/create', hotelController.createHotel);

// Autres routes
router.put('/update/:id', hotelController.updateHotel);
router.delete('/delete/:id', hotelController.deleteHotel);
router.get('/getAll', hotelController.getAllHotels);
router.get('/get/:id', hotelController.getHotelById);
// Route pour rechercher des hôtels avec entre 10 et 100 chambres
router.get('/searchByRooms', hotelController.getHotelsByRoomRange);

module.exports = router;
