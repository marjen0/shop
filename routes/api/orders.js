const express = require('express');
const router = express.Router({mergeParams:true});
const mongoose = require('mongoose');
const User = require('../../models/user');
const Order = require('../../models/order');
const { authenticate } = require('../../middleware/auth');

router.get('/', async (req,res) => {
    try {
        const orders = Order.getAllOrders();
        res.status(200).json({orders:orders});
    } catch (error) {
        console.log('at get /orders', error);
        res.status(500).json({ message: 'Įvyko klaida'});
    }
});
router.post('/', authenticate, async (req,res) => {
    try {
        const {items} = req.body;
        res.status(201).json({items:items});
    } catch (error) {
        console.error('at post /orders',error);
        res.status(500).json({message: 'Įvyko klaida'})
    }
});


module.exports = router;