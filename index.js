const express = require('express')
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config()

const port = process.env.PORT || 3333

app.use(
  cors()
);

app.use(express.json());


// app.get('/', (req, res) => {
//   res.send('Bem Vindo a OticaDiniz!')
// })

const PerguntasRoutes = require('./routes/perguntas');

app.use('/api', PerguntasRoutes);

mongoose
  .connect(
    `mongodb+srv://auth_db:root@cluster0.eors23p.mongodb.net/Form?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectou ao banco!");
    app.listen(port);
  })
  .catch((err) => console.log(err));
