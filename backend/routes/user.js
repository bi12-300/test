const express = require('express');
const router = express.Router();
const { updateUserInfo } = require('../controllers/userController');

// Endpoint để cập nhật thông tin người dùng
router.post('/update', updateUserInfo);

module.exports = router;
