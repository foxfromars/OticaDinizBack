const mongoose = require("mongoose");

const PerguntasSchema = new mongoose.Schema(
    {
        id: {
            type: String
        },
        nome: {
            type: String
        },
        email: {
            type: String
        },
        feeling: {
            type: String
        },
        symptoms: {
            type: String
        },
        pression: {
            type: String
        },
        problem: {
            type: String
        },
        medicine: {
            type: String
        },
        eyePain: {
            type: String
        },
        feelingToday: {
            type: String
        },
        vision: {
            type: String
        },
        glass: {
            type: String
        },
        nightVision: {
            type: String
        },
        testVision: {
            type: String
        },
        testVision2: {
            type: String
        },
        testDigital: {
            type: String
        },
        farVision: {
            type: String
        },
        birthDay: {
            type: String
        },
        farVision2: {
            type: String
        },
        farVision3: {
            type: String
        },
        nearVision: {
            type: String
        },
        nearVision2: {
            type: String
        },
        confort: {
            type: String
        },
        doze: {
            type: String
        },
        oito: {
            type: String
        },
        quinze: {
            type: String
        },
        seis: {
            type: String
        },
        treze: {
            type: String
        },
        quatrodois: {
            type: String
        },
        alignEye: {
            type: String
        },
        sysmptoms2: {
            type: String
        },
        sysmptoms3: {
            type: String
        },
        sysmptoms4: {
            type: String
        },
        sysmptoms5: {
            type: String
        },
        phone: {
            type: String
        },
        message: {
            type: String
        },
        value: {
            type: String
        },
    },
);

module.exports = Perguntas = mongoose.model("Perguntas", PerguntasSchema);