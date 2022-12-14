const nodemailer = require('nodemailer')
require('dotenv').config()

exports.createResult = (req, res) => {
  var transport = nodemailer.createTransport({
    host: process.env.HOST_MAIL,
    port: process.env.PORT_MAIL,
    secure: true,
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.PASS_MAIL
    }
  });

  const { data, date } = req.body

  var message = {
    from: "noreplay@oticasdinizkariri.com.br",
    to: process.env.SRC_EMAIL,
    subject: "Teste de Visão",
    text: "Plaintext version of the message",
    html: "<h2>Teste de Visão</h2><br>"
      + `<strong>${data.nome} realizou um teste de visão</strong><br>`
      + `<p>${data.email}</p><br>`
      + `<p><strong>Resultado:</strong></p><br>`
      + `
      <h1>Informações Pessoais </h1>
      <p>Nome: ${data.nome}</p><br>
      <p>Email: ${data.email}</p><br>
      <p>Número: ${data.phone}</p><br>
      <p>Data de nascimento: ${date}</p><br>
     
      <h1>Saude Geral</h1><br>

      <p>Como Esta se sentindo: ${data.feeling}</p><br>
      <p>Sintomas: ${data.sysmptoms1}</p><br>
      <p>Pressão Sanguínea: ${data.pression}</p><br>
      <p>Problemas: ${data.problem1}</p><br>
      <p>Tratamento Especial: ${data.medicine1}</p><br>

      <h1>Saude Geral dos olhos </h1><br>

      <p>Sensações nos olhos: ${data.eyePain}</p><br>
      <p>Sintomas nos olhos: ${data.feelingToday}</p><br>
      <p>Sensibilidade ao sol: ${data.vision}</p><br>
      <p>Usa oculos de sol: ${data.glass}</p><br>
      <p>Incomodos com visão noturna: ${data.nightVision}</p><br>
      <p>Realizando do teste de visão: ${data.testVision2}</p><br>
      <p>Dificuldade para longe e perto: ${data.farVision} - ${data.farVision3}</p><br>
      <p>Teste para longe e perto: ${data.farVision2}</p><br>
      <h1>Teste de Daltonismo </h1><br>
      <p>Cores: ${data.seis} 
      - ${data.oito} 
      - ${data.doze} 
      - ${data.quinze} 
      - ${data.quatrodois} 
      - ${data.treze}
      </p><br>
      <p>Messagem :</p><br>
      <p>${data.message}</p><br>
      <p>Avaliação :</p><br>
         <p>${data.ratedesc}</p><br>
      `
  };


  transport.sendMail(message)

  return res.sendStatus(201).json({ message: 'E-mail enviado com sucesso' })
}

exports.createContact = (req, res) => {
  var transport = nodemailer.createTransport({
    host: process.env.HOST_MAIL,
    port: process.env.PORT_MAIL,
    secure: true,
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.PASS_MAIL
    }
  });

  const body = req.body

  var message = {
    from: "noreplay@oticasdinizkariri.com.br",
    to: process.env.SRC_EMAIL,
    subject: "Contato do site Oticia Diniz Teste de Visão",
    text: "Contato do site Oticia Diniz Teste de Visão",
    html: "<h2>Contato do Oticia Diniz Teste de Visão</h2><br>"
      + `<strong>${body.name} realizou um contato</strong><br>`
      + `<p>${body.email}</p><br>`
      + `<p><strong>MENSAGEM:</strong><br>${body.message}</p><br>`
  };

  transport.sendMail(message)

  return res.sendStatus(201).json({ message: 'E-mail enviado com sucesso' })
}
