const express = require ("express");
const ArticleController = require("../controllers/ArticleController");
const router = express.Router();

router.post('/create', ArticleController.createArticle)
router.put('/update/:id', ArticleController.updateArticle)
router.get('/get-details/:id', ArticleController.getDetailsArticle)
router.delete('/delete/:id', ArticleController.deleteArticle)
router.get('/get-all', ArticleController.getAllArticle)
router.post('/delete-many', ArticleController.deleteMany)

module. exports = router