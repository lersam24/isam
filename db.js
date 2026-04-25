const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'peminjaman_alat'
});

// cek koneksi
db.connect((err) => {
  if (err) {
    console.log('ERROR DB:', err);
  } else {
    console.log('MySQL Connected 🔥');
  }
});

module.exports = db;
