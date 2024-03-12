const FacultyRouter = require('./FacultyRouter')
const ArticleRouter = require('./ArticleRouter')

const routes = (app) => {
    app.use('/api/article', ArticleRouter),
    app.use('/api/faculty', FacultyRouter)
}

module.exports = routes