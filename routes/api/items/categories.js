const express = require('express');
const router = express.Router({mergeParams:true});
const Category = require('../../../models/Item/category');

router.get('/', async (req,res) => {
    try {
        const categories = await Category.find();
        return res.status(200).json({categories: categories});
    } catch(e) {
        console.error('categories at /', e);
        return res.status(400).json({message: "Įvyko klaida"});
    }
});
router.post('/', async (req,res) => {
    const { name } = req.body;
    const newCategory = new Category({
        name: name
    });
    try {
        const savedCategory = await newCategory.save({validateBeforeSave:true});
        return res.status(201).json({
            message: 'Kategorija pridėta',
            category: savedCategory
        });
    } catch(e) {
        console.error('categories at / post', e);
        return res.status(400).json({message: "Įvyko klaida. Bandykite dar kartą"});
    }
    

    
});

module.exports = router;