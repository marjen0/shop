const express = require('express');
const router = express.Router({mergeParams:true});
const Item = require('../../../models/Item/item');
const Category = require('../../../models/Item/category');

router.get('/', async (req,res) => {
    try {
        let items = null;
        const limit = req.query.limit;
        if (limit) {
            items = await getLimitedItems(limit);
            return res.status(200).json({items:items});
        }

        items = await getAllItems();
        return res.status(200).json({items: items})
    } catch(e) {
        console.error('items at /', e);
        return res.status(500).json({errors: 'Įvyko klaida'});
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
router.get('/:category', async (req,res) => {
    try {
        if (req.params.category === "visos-prekes") {
           const allItems = await getAllItems();
           return res.status(200).json({items:allItems});
        }
        const category = await Category.find({nameAPI: req.params.category}).select('id');
        const items = await Item.find({category: category});
        return res.status(200).json({items: items}); 
    } catch (e) {
        console.error('item at get /:id', e);
        return res.status(500).json({message: 'Klida'});
    }
});
getLimitedItems = async (limit) =>{
    try {
        const items = Item.find().limit(parseInt(limit)).sort('-purchasedCount');
        return items;
    } catch (error) {
        console.error('at getlimiteditems',error);
    }
}
getAllItems = async () => {
    try {
        const items = await Item.find().sort('-purchasedCount');
        return items;
    } catch (e) {
        console.error('at /visos-prekės',e);
    }
}



module.exports = router;