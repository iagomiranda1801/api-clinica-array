const express = require('express');
const { createController, readController, updateController, deleteController,listUsersController } = require('../controllers/index');

const router = express.Router();

router.post('/resource', createController);
router.get('/resource/:id', readController);
router.put('/resource/:id', updateController);
router.delete('/resource/:id', deleteController);
router.get('/users', listUsersController);

module.exports = router;