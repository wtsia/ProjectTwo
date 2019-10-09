const express = require("express")
const router = express.Router()

const memeModel = require('../models/memeModel')

router.get("/", (req, res) => {
    memeModel.find({})
        .then(myInstances => res.render("index", { myInstances }));
});

router.get("/topics", (req, res) => {
    memeModel.find({ _topic: req.params.topic })
        .then(myInstances => res.render("topic", { myInstances }));
});

router.get("/topics/:topic", (req, res) => {
    memeModel.find({ _topic: req.params.topic })
        .then(myInstances => res.render("topic", { myInstances }));
});

router.post('/', (req, res) => {
    memeModel.create(req.body)
        .then(myNewItem => {
        res.redirect('/')
    })
})

router.get('/edit/:name', (req, res) => {
    memeModel.findOne({_name: req.params.name})
        .then(myInstances => {
        res.render("edit", { myInstances })
    })
})

router.put('/:name', (req, res) => {
    memeModel.findOneAndUpdate({_name: req.params.name}, req.body, { new: true })
        .then(myInstances => {
        res.redirect('/')
    })
})

router.delete('/:name', (req, res) => {
    memeModel.findOneAndRemove({ _name: req.params.name })
        .then(() => {
        res.redirect('/')
    })
})

module.exports = router