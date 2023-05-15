const router = require('express').Router();
const MensRanking = require('../models/mens');


router.post("/mens", async (req, res) =>{
    try {
        const addongsMenRecords =   new MensRanking(req.body);
      
        const insertMen = await addongsMenRecords.save();
        res.status(201).send(insertMen);

    }catch (e)
    {
        console.log(e);

        res.status(400).send(e);
    }
})

router.get("/mens", async (req, res) =>{
    try {
        const getMen = await MensRanking.find({}).sort({"ranking":1});
        res.status(201).send(getMen);
    } 
    catch (e) 
    {
        res.status(400).send(e);
    }
})

//get the indivisual data using id

router.get("/mens/:id", async (req, res) =>{
    const _id = req.params.id;
    try {
        const getMen = await MensRanking.find({_id});
        res.status(201).send(getMen);
    } 
    catch (e) 
    {
        res.status(500).send(e);
    }
})

//update the data using id

router.patch("/mens/:id", async (req, res) =>{
    const _id = req.params.id;
    try {
        const updatedData = req.body;
        const options = { new: true };
        const updatedMen = await MensRanking.findByIdAndUpdate(_id, updatedData, options);

        res.status(201).send(updatedMen);
    } 
    catch (e) 
    {
        res.status(400).send(e);
    }

})


//delete the data using id
router.delete("/mens/:id", async (req, res) =>{
    const _id = req.params.id;
    try {
        console.log(_id);

        const deleteMen = await MensRanking.findByIdAndDelete(_id);

        res.status(201).send(deleteMen);
    } 
    catch (e) 
    {
        res.status(400).send(e);
    }

})


module.exports = router;