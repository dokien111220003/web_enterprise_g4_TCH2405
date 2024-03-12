const Faculty = require("../models/FacultyModel")


const createFaculty = (newFaculty) => {
    return new Promise(async (resolve, reject) => {
        const { name, description } = newFaculty
        try {
            const checkFaculty = await Faculty.findOne({
                name: name
            })
            if (checkFaculty !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The name of faculty is already'
                })
            }
            const newFaculty = await Faculty.create({
                name, 
                description,
            })
            if (newFaculty) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newFaculty
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateFaculty = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkFaculty = await Faculty.findOne({
                _id: id
            })
            if (checkFaculty === null) {
                resolve({
                    status: 'ERR',
                    message: 'The faculty is not defined'
                })
            }

            const updatedFaculty = await Faculty.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedFaculty
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteFaculty = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkFaculty = await Faculty.findOne({
                _id: id
            })
            if (checkFaculty === null) {
                resolve({
                    status: 'ERR',
                    message: 'The faculty is not defined'
                })
            }

            await Faculty.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete faculty success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyFaculty = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await Faculty.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete faculty success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createFaculty,
    updateFaculty,
    deleteFaculty,
    deleteManyFaculty
}