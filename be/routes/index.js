const FacultyRouter = require('./FacultyRouter')

const routes = (app) => {
    app.use('/api/faculty', FacultyRouter)
}

module.exports = routes