const express = require('express');
const router = express.Router();
const { getStudentInfo } = require('../controllers/studentInfoController');

// Endpoint lấy thông tin sinh viên và giám sát viên
router.get('/info', getStudentInfo);

module.exports = router;
