//route related to user actions like watch later
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// Add movie to watch later
router.post('/watchlater', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const movieId = req.body.movieId;

        if (!user.watchLater.includes(movieId)) {
            user.watchLater.push(movieId);
            await user.save()
        }

        res.json(user.watchLater);
    } catch (e) {
        res.status(500).json({ message: 'Server error' });
    }
});

//Get watch later list
router.get('/watchlater', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json(user.watchLater);
    } catch (e) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;