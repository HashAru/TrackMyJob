require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(process.env.MONGO_URI, { dbName: 'job-tracker' })
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('Mongo error:', err.message));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/applications', require('./routes/applications'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
