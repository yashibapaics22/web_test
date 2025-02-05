const express = require('express');
const router = express.Router();
const noteModel = require('../models/Note');



router.get('/', async (req,res)=>{
    const property = await noteModel.find({});
    res.render('home',{property});
})


router.get('/noteapp/new',(req,res)=>{
    res.render('new');    
})



router.post('/noteapp', async (req,res)=>{
    const {note,imageUrl} = req.body;
    await noteModel.create({note,imageUrl});
    res.redirect('/')
})


router.get('/noteapp/:id/show',async (req,res)=>{
    const {id} = req.params;
    const property = await noteModel.findById(id);
    res.render('show',{property});
})


router.get('/noteapp/:id', async  (req,res)=>{
    const {id} = req.params;
    const property = await noteModel.findById(id);
    res.render('edit',{property});
})

//particular property edit hogi isse
router.patch('/noteapp/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const {note,imageUrl} = req.body;
    await noteModel.findByIdAndUpdate(id,{note,imageUrl});
    res.redirect('/');
})

//property delete krne ke liye
router.delete('/noteapp/:id/delete',async (req,res)=>{
    const {id} = req.params;
    await noteModel.findByIdAndDelete(id);
    res.redirect('/');
})


module.exports = router;