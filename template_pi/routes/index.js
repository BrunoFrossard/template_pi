const express = require('express');
const router = express.Router();
const participantRoutes = require('./participantRoutes');

router.use('/participants', participantRoutes);

module.exports = router;
