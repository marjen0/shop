const express = require('express');
const router = express.Router({mergeParams:true});
const mongoose = require('mongoose');
const User = require('../../models/user');
const Order = require('../../models/order');

router.get('/', async (req,res) => {

});


module.exports = router;