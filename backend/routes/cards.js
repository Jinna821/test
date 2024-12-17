const express = require('express');
const create = require('../controller/cardController');

const router = express.Router();

router.post('/create', create.create);
router.get('/get',create.getcamp);

module.exports = router;