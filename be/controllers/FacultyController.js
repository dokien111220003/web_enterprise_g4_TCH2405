const FacultyService = require('../services/FacultyService')

const createFaculty = async (req, res) => {
    try {
        const { name, description } = req.body
        if ( !name ) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await FacultyService.createFaculty(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(500).json({
            message: error.message || 'Internal server error'
        });
    }
}

const updateFaculty = async (req, res) => {
    try {
        const facultyId = req.params.id
        const data = req.body
        if (!facultyId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The facultyId is required'
            })
        }
        const response = await FacultyService.updateFaculty(facultyId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(500).json({
            message: error.message || 'Internal server error'
        });
    }
}

const deleteFaculty = async (req, res) => {
    try {
        const facultyId = req.params.id
        if (!facultyId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The facultyId is required'
            })
        }
        const response = await FacultyService.deleteFaculty(facultyId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(500).json({
            message: error.message || 'Internal server error'
        });
    }
}

const deleteMany = async (req, res) => {
    try {
        const ids = req.body.ids
        if (!ids) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ids is required'
            })
        }
        const response = await FacultyService.deleteManyFaculty(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(500).json({
            message: error.message || 'Internal server error'
        });
    }
}

module.exports = {
    createFaculty,
    updateFaculty,
    deleteFaculty,
    deleteMany,
}
