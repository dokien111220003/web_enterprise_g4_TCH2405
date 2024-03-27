const ArticleService = require('../services/ArticleService')

const createArticle = async (req,res) =>{
    try {
        const { name, image, status, description } = req.body
        if (!name || !image || !faculty ){
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ArticleService.createArticle(req.body)
        return res.status(200).json(response)
    }catch(e){
        return res.status(500).json({
            message: error.message || 'Internal server error'
        });
    }
}

const updateArticle = async (req, res) => {
    try {
        const articleId = req.params.id;
        const data = req.body;
        if (!articleId) {
            return res.status(400).json({
                status: 'ERR',
                message: 'The articleId is required'
            });
        }
        const response = await ArticleService.updateArticle(articleId, data)
        return res.status(200),json(response)
    }catch(e){


        const response = await ArticleService.updateArticle(articleId, data);
        console.log('Response:', response); // Add this line for debugging

        if (response.status === 'OK') {
            return res.status(200).json(response);
        } else {
            return res.status(400).json(response);
        }
    // }catch(error) {
    //     console.error('Error:', error); // Add this line for debugging
    //     return res.status(500).json({
    //         message: error.message || 'Internal server error'
    //     });
    // }
    }
};


const getDetailsArticle = async (req, res) => {
    try {
        const articleId = req.params.id;
        if (!articleId) {
            return res.status(400).json({
                status: 'ERR',
                message: 'The articleId is required'
            });
        }
        
        // Call the service function to get article details
        const response = await ArticleService.getDetailsArticle(articleId);

        // Check if the response has a status of 'OK'
        if (response.status === 'OK') {
            return res.status(200).json(response);
        } else {
            // Handle the case where the article is not found
            return res.status(404).json(response);
        }
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            message: error.message || 'Internal server error'
        });
    }
};

const deleteArticle = async (req, res) => {
    try {
        const articleId = req.params.id
        if (!articleId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productId is required'
            })
        }
        const response = await ArticleService.deleteArticle(articleId)
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
        const response = await ArticleService.deleteManyArticle(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(500).json({
            message: error.message || 'Internal server error'
        });
    }
}

const getAllArticle = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await ArticleService.getAllArticle(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(500).json({
            message: error.message || 'Internal server error'
        });
    }
}


module.exports ={
    createArticle,
    updateArticle,
    getDetailsArticle,
    deleteArticle,
    getAllArticle,
    deleteMany
}