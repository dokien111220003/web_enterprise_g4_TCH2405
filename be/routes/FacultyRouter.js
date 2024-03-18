const express = require("express");
const router = express.Router()
const FacultyController = require('../controllers/FacultyController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', FacultyController.createFaculty)
router.put('/update/:id', authMiddleWare, FacultyController.updateFaculty)
router.delete('/delete/:id', authMiddleWare, FacultyController.deleteFaculty)
router.post('/delete-many', authMiddleWare, FacultyController.deleteMany)

module.exports = router