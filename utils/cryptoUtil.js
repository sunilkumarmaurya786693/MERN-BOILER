const CryptoJS = require("crypto-js");
const AppConfig = require("../config/appConfig");

const encrypt = (data) => {
        return CryptoJS.AES.encrypt(JSON.stringify(data), AppConfig.projectKey).toString()
    };

const decrypt =(data) => {
        let here2 = CryptoJS.AES.decrypt(data.toString(), AppConfig.projectKey);
        try {
            return JSON.parse(here2.toString(CryptoJS.enc.Utf8));
        } catch (e) {
            return undefined
        }
};

module.exports = {encrypt,decrypt};



