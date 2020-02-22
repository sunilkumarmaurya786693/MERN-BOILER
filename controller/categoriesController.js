const Category = require('../model/categoriesModel');

// CRUD
// CREATE
const addCategory = (req, res, next) => {
    if (res.locals.decryptData) {
        const {categoryCode, categoryName, isCategoryActive} = res.locals.decryptData;
        if (!categoryCode || !categoryName) {
            res.locals.status = 400;
            res.locals.encryptData = {
                status: 'ERROR',
                message: 'All fields are required'
            };
            next();
        } else {
            const category = new Category({categoryCode, categoryName, isCategoryActive});

            category.save((error, response) => {
                if (error) {
                    res.locals.status = 400;
                    res.locals.encryptData = {
                        status: 'FAIL',
                        message: error
                    };
                    next()
                } else {
                    res.locals.status = 200;
                    res.locals.encryptData = {
                        status: 'SUCCESS',
                        data: response
                    };
                    next()
                }
            })
        }
    } else {
        next();
    }
};

// READ LIST
const listCategory = (req, res, next) => {
    if (res.locals.decryptData) {
        const {pageNumber, pageSize} = res.locals.decryptData;
        Category.find()
            .sort({date: -1})
            .exec((error, response) => {
                if (error) {
                    res.locals.status = 400;
                    res.locals.encryptData = {
                        status: 'FAIL',
                        message: error
                    };
                    next();
                } else {
                    if (response.length === 0) {
                        res.locals.status = 200;
                        res.locals.encryptData = {
                            status: 'SUCCESS',
                            data: {}
                        };
                        next();
                    } else {
                        res.locals.status = 200;
                        res.locals.encryptData = {
                            status: 'SUCCESS',
                            data: response.slice(pageSize || 0,pageNumber || 0),
                            pagination: {
                                pageNumber: 1,
                                pageSize: 5,
                                totalSize: response.length
                            }
                        };
                        next();
                    }
                }
            });
    }else{
        Category.find()
            .sort({date: -1})
            .exec((error, response) => {
                if (error) {
                    res.locals.status = 400;
                    res.locals.encryptData = {
                        status: 'FAIL',
                        message: error
                    };
                    next();
                } else {
                    if (response.length === 0) {
                        res.locals.status = 200;
                        res.locals.encryptData = {
                            status: 'SUCCESS',
                            data: {}
                        };
                        next();
                    } else {
                        res.locals.status = 200;
                        res.locals.encryptData = {
                            status: 'SUCCESS',
                            data: response.slice(0,5),
                            pagination: {
                                pageNumber: 1,
                                pageSize: 5,
                                totalSize: response.length
                            }
                        };
                        next();
                    }
                }
            });
    }
};

module.exports = {addCategory, listCategory};