const express = require('express');
const {loginController, createController, readController, updateController, deleteController,listUsersController } = require('../controllers/index');

const router = express.Router();

router.post('/users', createController);
router.get('/users/:id', readController);
router.put('/users/:id', updateController);
router.delete('/users/:id', deleteController);
router.get('/users', listUsersController);
router.post('/login', loginController);

module.exports = router;