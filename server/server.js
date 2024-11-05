const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

require('dotenv').config();

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
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log('MongoDB connection error: ', err));


//start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));