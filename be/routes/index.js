const ArticleRouter = require('./ArticleRouter')

const routes = (app) => {
    app.use('/article', ArticleRouter)
}
module.exports = routes