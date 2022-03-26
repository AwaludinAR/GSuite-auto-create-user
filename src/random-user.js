const axios = require("axios");

exports.generateUser = (total, cb) => {
    axios.get(`https://randomuser.me/api/?results=${total}&nat=us`).then(response => {
        cb({
            status: true,
            users: response.data.results
        });
    }, error => {
        cb({
            status: false,
            msg: error
        });
    });
}