const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API jalan 🔥');
});

// GET data petugas
app.get('/petugas', (req, res) => {
  db.query('SELECT * FROM petugas', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post('/petugas', (req, res) => {
  const { nama_petugas } = req.body;

  db.query(
    'INSERT INTO petugas (nama_petugas) VALUES (?)',
    [nama_petugas],
    (err, result) => {
      if (err) throw err;
      res.json({ message: 'Berhasil tambah data' });
    }
  );
});

app.put('/petugas/:id', (req, res) => {
  const id = req.params.id;
  const { nama_petugas } = req.body;

  db.query(
    'UPDATE petugas SET nama_petugas=? WHERE id_petugas=?',
    [nama_petugas, id],
    (err, result) => {
      if (err) throw err;
      res.json({ message: 'Berhasil update' });
    }
  );
});

app.delete('/petugas/:id', (req, res) => {
  const id = req.params.id;

  db.query(
    'DELETE FROM petugas WHERE id_petugas=?',
    [id],
    (err, result) => {
      if (err) throw err;
      res.json({ message: 'Berhasil hapus' });
    }
  );
});


app.listen(3000, () => {
  console.log('Server jalan di http://localhost:3000');
});
