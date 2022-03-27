const randomUser = require("./random-user");
const csv = require('fast-csv');

const fs = require("fs");
const path = require("path");

const DataCsv = path.join(__dirname,"users.csv");

class CsvFile {
    static write(filestream, rows, options) {
        return new Promise((res, rej) => {
            csv.writeToStream(filestream, rows, options)
                .on('error', err => rej(err))
                .on('finish', () => res());
        });
    }

    constructor(opts) {
        this.headers = opts.headers;
        this.path = opts.path;
        this.writeOpts = { headers: this.headers, includeEndRowDelimiter: true };
    }

    create(rows) {
        return CsvFile.write(fs.createWriteStream(this.path), rows, { ...this.writeOpts });
    }

    append(rows) {
        return CsvFile.write(fs.createWriteStream(this.path, { flags: 'a' }), rows, {
            ...this.writeOpts,
            // dont write the headers when appending
            writeHeaders: false,
        });
    }

    read() {
        return new Promise((res, rej) => {
            fs.readFile(this.path, (err, contents) => {
                if (err) {
                    return rej(err);
                }
                return res(contents);
            });
        });
    }
}

const generateFile = (data) => {

    randomUser.generateUser(5, res => {
        const headers = [
            'First Name [Required]',
            'Last Name [Required]',
            'Email Address [Required]',
            'Password [Required]',
            'Org Unit Path [Required]'
        ]

        const csvFile = new CsvFile({
            path: 'gshets.csv',
            headers: headers,
        });

        const users = []
        const emp = []
        for (let user of res.users) {
            users.push({
                "First Name [Required]": user.name.first,
                "Last Name [Required]": user.name.last,
                "Email Address [Required]": `${user.login.username}@${data.domain}`,
                "Password [Required]": data.password.value,
                "Org Unit Path [Required]": "/"
            })

            const re = `${user.login.username}@${data.domain}|${data.password.value}`
            emp.push(re)
        }

        csvFile.create(users)
        var file = fs.createWriteStream('accounts.txt');
        file.on('error', function(err) { /* error handling */ });
        emp.forEach(function(v) { file.write(v+ '\n'); });
        file.end();
        // users.forEach(user => {
        //     const email = user['Email Address [Required]']
        //     const password = user['Password [Required]']
        //     fs.writeFile('accounts.txt', `${email}|${password}\n`, err => console.log)
        // })

    });
}

const data = {
    domain: "aka.andriii.com",
    password: {
        isRandom: false,
        value: "@@Nxuser123z"
    }
}

listUser = generateFile(data)
console.log(listUser)