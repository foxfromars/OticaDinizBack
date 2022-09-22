const express = require('express');
const router = express.Router();


const EmailController = require('../controllers/emailController');
const PerguntasController = require('../controllers/perguntasController');

// url do teste será: http://localhost:5000/api/teste

router.post('/criarpergunta', PerguntasController.create);
router.get('/perguntas', PerguntasController.getAll);
router.post('/sendEmail/result', EmailController.createResult);
router.post('/sendEmail/contato', EmailController.createContact);


module.exports = router;