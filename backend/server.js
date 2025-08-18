// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const morgan = require('morgan');

// const app = express();

// app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
// app.use(express.json());
// app.use(morgan('dev'));

// mongoose.connect(process.env.MONGO_URI, { dbName: 'job-tracker' })
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch(err => console.error('Mongo error:', err.message));

// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/applications', require('./routes/applications'));

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on ${PORT}`));

// Load environment variables
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// ====== CORS Setup ======
const allowedOrigins = [
  'http://localhost:5173', // local frontend
  'https://yourfrontend.onrender.com' // replace with your deployed frontend URL
];

// app.use(cors({
//   origin: (origin, callback) => {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true
// }));

app.use(cors({ origin: 'https://your-project-name.vercel.app', credentials: true }));


// ====== Middleware ======
app.use(express.json());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// ====== MongoDB Connection ======
mongoose.connect(process.env.MONGO_URI, { dbName: 'job-tracker' })
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err.message));

// ====== Routes ======
app.use('/api/auth', require('./routes/auth'));
app.use('/api/applications', require('./routes/applications'));

// ====== Start Server ======
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
