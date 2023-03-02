const express = require('express');

const router = express.Router()

const Model = require('../models/model');

module.exports = router;

//Post Method
// router.post('/post', (req, res) => {
//     res.send('Post API')
// })

//Get all Method
// router.get('/getAll', (req, res) => {
//     res.send('Get All API')
// })

//Get by ID Method
// router.get('/getOne/:id', (req, res) => {
//     res.send(req.params.id)
// })

//Update by ID Method
// router.patch('/update/:id', (req, res) => {
//     res.send('Update by ID API')
// })

//Delete by ID Method
// router.delete('/delete/:id', (req, res) => {
//     res.send('Delete by ID API')
// })


//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        _id: req.body._id,
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        price: req.body.price,
        image: req.body.image
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:_id', async (req, res) => {
    try{
        const data = await Model.findById(req.params._id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:_id', async (req, res) => {
    try {
        const _id = req.params._id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            _id , updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:_id', async (req, res) => {
    try {
        const _id = req.params._id;
        const data = await Model.findByIdAndDelete(_id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})