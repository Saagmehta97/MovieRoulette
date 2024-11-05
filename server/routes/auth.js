const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

//JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'my_jwt_secret';

//register route
router.post('/register', async (req, res) => {
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (user) return res.status(400).json({ message: 'User already exists' })

        //Create new user
        user = new User({
            email, 
            password: await bcrypt.hash(password, 10),
        });

        await user.save();

        //Generate token
        const token = jwt.sign({ id: user_id }, JWT_SECRET);

        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server error' })
    }
});

//Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        //find user
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        //check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        //generate token
        const token = jwt.sign({ id: user._id }, JWT_SECRET);

        res.json({ token })
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

