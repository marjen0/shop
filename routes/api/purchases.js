const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const authenticate = require('../../middleware/auth');

router.post('/',authenticate, async (req,res) => {
    res.status(200).json({user: req.user});
});

module.exports = router;