const express = require('express');

const { creatUser, findUser } = require('../controller/usersController');

const { requestOnlyHandler, requestWithTokenHandler, responseHandler } = require('../middleware/requestResponseHandler');

const router = express.Router();

router.post("/login", requestOnlyHandler, findUser, responseHandler);

router.post("/logout", (req, res, next) => {
    res.clearCookie('XSRF-TOKEN');
    return res.status(200).json({ status: "SUCCESS", message: 'Successfully logged out.' })
});

router.post("/sign-up", requestOnlyHandler, creatUser, responseHandler);
router.post("/user/verify", creatUser, responseHandler);

router.post("/restrict", requestWithTokenHandler, (req, res, next) => {
    return res.json({ status: "testinggg" })
});

module.exports = router;

