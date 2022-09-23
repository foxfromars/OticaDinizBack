const Perguntas = require("../models/perguntas");

exports.getAll = async (req, res) => {
    try {
        const perguntas = await Perguntas.findById(req.query.id);

        res.sendStatus(201).json(perguntas);
    } catch (error) {
        console.log(error);
        res.sendStatus(400).json(error);
    }
};

exports.create = (req, res) => {
    if (!req.body) {
        res.sendStatus(400).send({ message: "algo esta vazio!" });
        return;
    }

    //new clube

    const perguntas = new Perguntas({
        id: req.body.id,
        nome: req.body.nome,
        email: req.body.email,
        feeling: req.body.feeling,
        sysmptoms1: req.body.sysmptoms1,
        pression: req.body.pression,
        problem1: req.body.problem1,
        medicine1: req.body.medicine1,
        eyePain: req.body.eyePain,
        feelingToday: req.body.feelingToday,
        vision: req.body.vision,
        glass: req.body.glass,
        nightVision: req.body.nightVision,
        testVision: req.body.testVision,
        testVision2: req.body.testVision2,
        testDigital: req.body.testDigital,
        farVision: req.body.farVision,
        birthDay: req.body.birthDay,
        farVision2: req.body.farVision2,
        farVision3: req.body.farVision3,
        nearVision: req.body.nearVision,
        nearVision2: req.body.nearVision2,
        confort: req.body.confort,
        doze: req.body.doze,
        oito: req.body.oito,
        quinze: req.body.quinze,
        seis: req.body.seis,
        treze: req.body.treze,
        quatrodois: req.body.quatrodois,
        alignEye: req.body.alignEye,
        sysmptoms2: req.body.sysmptoms2,
        sysmptoms3: req.body.sysmptoms3,
        sysmptoms4: req.body.sysmptoms4,
        sysmptoms5: req.body.sysmptoms5,
        phone: req.body.phone,
        message: req.body.message,
        value: req.body.value,
        ratedesc: req.body.ratedesc
    })

    perguntas
        .save(perguntas)
        .then(data => {
            res.sendStatus(201).send(data)
        })
        .catch(err => {
            res.sendStatus(500).send({
                message: err.message || "aconteceu algum error na criação"
            });
        });

}

