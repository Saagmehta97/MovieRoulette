const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');


const app = express();

//Middleware
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
    });
}

//Connect to MongoDB
mongoose.connect('mongodb://localhost/movie-roulette', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));