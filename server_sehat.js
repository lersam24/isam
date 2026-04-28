const routes = require('./routes');
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', routes);

// TEST FRAMEWORK
app.get('/', (req, res) => {
  res.send('Server Jalan Mas Ler');
});

// GET DATA PETUGAS
app.get('/petugas', (req, res) => {
  db.query('SELECT * FROM petugas', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log('Server jalan di http://localhost:3000');
});
