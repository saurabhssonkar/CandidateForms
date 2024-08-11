const express = require('express');
const { submitForm } = require('../controllers/formController');
const router = express.Router();

router.post('/candidate-form', submitForm);

module.exports = router;
