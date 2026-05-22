const express = require('express');
const router = express.Router();

// Exemple de route "business"
router.get('/status', (req, res) => {
  res.json({
    service: 'MAHolding API',
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
