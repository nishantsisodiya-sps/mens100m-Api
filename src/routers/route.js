const express = require('express')
const router = new express.Router();

const MenRanking = require('../models/mens')
//Handling post request

router.post('/mens', async (req, res) => {
    try {
        const addingMensRecord = new MenRanking(req.body);
        const insertMens = await addingMensRecord.save();
        res.status(201).send(insertMens)
    } catch (error) {
        res.status(500).send(error)
    }
})

//Handling get request

router.get('/mens', async (req, res) => {
    try {
        const getMens = await MenRanking.find({}).sort({"ranking" : 1});
        res.status(201).send(getMens)
    } catch (error) {
        res.status(500).send(error)
    }
})

//Handle get request for individual men

router.get('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const getMen = await MenRanking.findById(_id);
        res.status(201).send(getMen);
    } catch (error) {
        res.status(500).send(error);
    }
});
 
//Handle Put/ patch request

router.patch('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const getMen = await MenRanking.findByIdAndUpdate(_id , req.body , {
            new : true
        });
        res.status(201).send(getMen)
    } catch (error) {
        res.status(500).send(error)
    }
});

//Handling Delete requests

router.delete('/mens/:id', async (req, res) => {
    try {
        const getMen = await MenRanking.findByIdAndDelete(req.params.id);
        res.send(getMen)
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports = router