const express = require('express');
const controller = require('./controller');
const router = express.Router();

router
    .route('/votes')
    .get(controller.getVotes)
    .put(controller.putVotes);

module.exports = router;
