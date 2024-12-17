const Card = require('../models/Card');

exports.create = async (req, res) => {
  try{
    console.log((req.body));
    const newCard = new Card((req.body));
    await newCard.save();
    res.status(201).send(true);
  }
  catch (error){
    res.status(500).json({error:error.message});
  }
}

exports.getcamp = async (req, res) => {
  const campaigns = await Card.find();
  res.json(campaigns);
}