const FacultyRouter = require('./FacultyRouter')
const ArticleRouter = require('./ArticleRouter')
const UserRouter = require('./UserRouter')

const routes = (app) => {
    app.use('/api/article', ArticleRouter),
    app.use('/api/faculty', FacultyRouter),
    app.use('/api/user', UserRouter)
}

module.exports = routes