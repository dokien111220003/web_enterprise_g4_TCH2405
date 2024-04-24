const express = require("express");
const router = express.Router()
const FacultyController = require('../controllers/FacultyController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', FacultyController.createFaculty)
router.put('/update/:id', FacultyController.updateFaculty)
router.delete('/delete/:id', FacultyController.deleteFaculty)
router.post('/delete-many', FacultyController.deleteMany)
router.get('/get-all', FacultyController.getAllFaculty)
router.get('/get-details/:id', FacultyController.getDetailsFaculty)

module.exports = router