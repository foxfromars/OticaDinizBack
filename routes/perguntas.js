const express = require('express');
const router = express.Router();


const PerguntasController = require('../controllers/perguntasController');

// url do teste será: http://localhost:5000/api/teste

router.post('/criarpergunta', PerguntasController.create);
router.get('/perguntas', PerguntasController.getAll);


module.exports = router;