const express = require('express');
const router = express.Router({mergeParams:true});
const Item = require('../../../models/Item/item');
const Category = require('../../../models/Item/category');

router.get('/', async (req,res) => {
    try {
        const items = await Item.find();
        return res.status(200).json({items: items})
    } catch(e) {
        console.error('items at /', e);
        return res.status(404).json({errors: 'Nerasta prekių'});
    }
});
router.post('/', async (req,res) => {
    const { title,price,discount,initialCount,category } = req.body;
    const item = new Item({
        title: title,
        price: price,
        discount: discount,
        initialCount: initialCount,
        category:category
    });
    console.log(item)
    try {
        const savedItem = await item.save({validateBeforeSave:true});
        return res.status(201).json({message: 'Prekė sėkmingai pridėta'});
    } catch(e) {

        const errors = [];
        for (const [key,value] of Object.entries(e.errors)) {
            errors.push(value.message);           
        }
        return res.status(400).json({errors: errors})
    }
    
});
router.get('/visos-prekes', async (req,res) => {
    try {
        const items = await Item.find();
        if (!items) {
            return res.status(404).json({message: 'Nerasta prekių'});
        }
        return res.status(200).json({items: items});
    } catch (e) {
        console.error('at /visos-prekės',e);
        return res.status(500).json({message: 'Įvyko klaida'});
    }
});
router.get('/:category', async (req,res) => {
    try {
        const category = await Category.find({nameAPI: req.params.category})
        const items = await Item.find({category: category.id});
        return res.status(200).json({items: items}); 
    } catch (e) {
        console.error('item at get /:id', e);
        return res.status(404).json({message: 'Prekės nerastos'});
    }
});



module.exports = router;