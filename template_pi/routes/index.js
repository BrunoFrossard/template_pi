const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const participantRoutes = require('./participantRoutes');

router.use('/participants', participantRoutes);
=======

const participantRoutes = require('./participantRoutes');
const eventRoutes = require('./eventRoutes');

router.use('/participants', participantRoutes);
router.use('/events', eventRoutes);
>>>>>>> 919bcb3 (Remove repositório embutido template_pi e ajusta estrutura)

module.exports = router;
