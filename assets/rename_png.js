const fs = require('fs');
let files = fs.readdirSync('png');
files.forEach((v, i) => {
    fs.renameSync('png/' + v, 'png/' + i + '.png');
})