const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const peminjamanRoutes = require('./peminjamanRoutes');
const petugasRoutes = require('./petugasRoutes');
const adminRoutes = require('./adminRoutes');

router.use('/auth', authRoutes);
router.use('/peminjaman', peminjamanRoutes);
router.use('/petugas', petugasRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
