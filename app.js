const express = require('express');
const paketRoutes = require('./routes/paketRoutes');

const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Menggunakan route paket
app.use('/paket', paketRoutes);

module.exports = app;
