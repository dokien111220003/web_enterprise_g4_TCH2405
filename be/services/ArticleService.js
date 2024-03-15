const Article = require("../models/ArticleModel")

const createArticle =(newArticle) => {
    return new Promise(async(resolve, reject)=> {
        const { name, image, faculty, status, description } = newArticle
        try {
            const checkArticle = await Article.findOne({
                name: name
            })
            if (checkArticle !== null){
                resolve({
                    status:'OK',
                    message: 'the name of article is already'
                })
            }
            const createArticle = await Article.create({
                name, image, faculty, status, description
            })
            if (createArticle){
                resolve({
                    status:'OK',
                    message:'SUCCESS',
                    data: createArticle
                })
            }
        } catch (e){
            reject(e)
        }
    })
}

const updateArticle = (id, data) => {
    return new Promise(async(resolve, reject)=> {
        try {
            const checkArticle = await Article.findOne({
                _id:id
            })
            if (checkArticle === null){
                resolve({
                    status:'OK',
                    message: 'the article is not defined'
                })
            }
            const updateArticle = await Article.findByIdAndUpdate(id, data, {new: true})
            resolve({
                status:'OK',
                message:'SUCCESS',
                data: updateArticle
            })
        } catch (e){
            reject(e)
        }
    })
}

const deleteArticle = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkArticle = await Article.findOne({
                _id: id
            })
            if (checkArticle === null) {
                resolve({
                    status: 'ERR',
                    message: 'The article is not defined'
                })
            }

            await Article.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete article success',
            })
        } catch (e) {
            reject(e)
        }
    })
}
const deleteManyArticle = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await Article.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete article success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsArticle = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const article = await Article.findOne({
                _id: id
            })
            if (article === null) {
                resolve({
                    status: 'ERR',
                    message: 'The article is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCESS',
                data: article
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllArticle = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalArticle = await Article.count()
            let allArticle = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await Article.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalArticle,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalArticle / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allArticleSort = await Article.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allArticleSort,
                    total: totalArticle,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalArticle / limit)
                })
            }
            if(!limit) {
                allArticle = await Article.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allArticle = await Article.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allArticle,
                total: totalArticle,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalArticle / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}


module.exports ={
    createArticle,
    updateArticle,
    getDetailsArticle,
    deleteArticle,
    getAllArticle,
    deleteManyArticle
}