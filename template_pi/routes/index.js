const express = require('express');
const router = express.Router();

const participantRoutes = require('./participantRoutes');
const eventRoutes = require('./eventRoutes');

router.use('/participants', participantRoutes);
router.use('/events', eventRoutes);

module.exports = router;
