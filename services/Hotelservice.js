const Hotel = require('../Models/Hotel'); // Assurez-vous du bon chemin pour le modèle

// Créer un hôtel
const createHotel =async (req,res,next)=>{
    const { name} = req.body
    await new Hotel({
        name: name,
        fabricationDate: new Date()
        }).save()
      .then((err, data)=>{
        if(err){
            console.log("error create Chat : "+ err);
        }
        console.log(data);
      })
res.json('Chat added ! msg : '+ name + ' dateCreation : '+  new Date())
}

// Mettre à jour un hôtel
const updateHotel = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedHotel) {
      return res.status(404).json({ message: 'Hôtel non trouvé' });
    }

    res.status(200).json({
      message: 'Hôtel mis à jour avec succès',
      hotel: updatedHotel,
    });
  } catch (err) {
    console.error('Erreur lors de la mise à jour de l’hôtel:', err);
    res.status(500).json({ message: 'Erreur lors de la mise à jour', error: err.message });
  }
};

// Supprimer un hôtel
const deleteHotel = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedHotel = await Hotel.findByIdAndDelete(id);

    if (!deletedHotel) {
      return res.status(404).json({ message: 'Hôtel non trouvé' });
    }

    res.status(200).json({
      message: 'Hôtel supprimé avec succès',
      hotel: deletedHotel,
    });
  } catch (err) {
    console.error('Erreur lors de la suppression de l’hôtel:', err);
    res.status(500).json({ message: 'Erreur lors de la suppression', error: err.message });
  }
};
// services/HotelService.js


// Recherche des hôtels avec entre 10 et 100 chambres
const findHotelsByRoomRange = async () => {
  try {
    const hotels = await Hotel.find({
      nbr_Room: { $gte: 10, $lte: 100 }
    });
    return hotels; // Retourner les hôtels trouvés
  } catch (error) {
    throw new Error('Erreur lors de la récupération des hôtels: ' + error.message);
  }
};



// Récupérer tous les hôtels
const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({
      message: 'Liste des hôtels récupérée avec succès',
      hotels,
    });
  } catch (err) {
    console.error('Erreur lors de la récupération des hôtels:', err);
    res.status(500).json({ message: 'Erreur lors de la récupération des hôtels', error: err.message });
  }
};

// Récupérer un hôtel par ID
const getHotelById = async (req, res) => {
  const { id } = req.params;

  try {
    const hotel = await Hotel.findById(id);

    if (!hotel) {
      return res.status(404).json({ message: 'Hôtel non trouvé' });
    }

    res.status(200).json({
      message: 'Hôtel récupéré avec succès',
      hotel,
    });
  } catch (err) {
    console.error('Erreur lors de la récupération de l’hôtel:', err);
    res.status(500).json({ message: 'Erreur lors de la récupération', error: err.message });
  }
};

module.exports = {
  createHotel,
  updateHotel,
  deleteHotel,
  getAllHotels,
  getHotelById,
  findHotelsByRoomRange 
};
