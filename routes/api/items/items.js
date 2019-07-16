const express = require('express');
const router = express.Router({mergeParams:true});
const Item = require('../../../models/Item/item');

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
router.get('/:id', async (req,res) => {
    try {
        const item = await Item.findById(req.params.id);
        return res.status(200).json({item: item}); 
    } catch (e) {
        console.error('item at get /:id', e);
        return res.status(404).json({message: 'Prekė nerasta'});
    }
});

module.exports = router;