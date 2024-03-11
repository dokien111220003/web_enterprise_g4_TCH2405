const express = require("express");
const router = express.Router()
const FacultyController = require('../controllers/FacultyController')

router.post('/create', FacultyController.createFaculty)
router.put('/update/:id', FacultyController.updateFaculty)
router.delete('/delete/:id', FacultyController.deleteFaculty)
router.post('/delete-many', FacultyController.deleteMany)

module.exports = router