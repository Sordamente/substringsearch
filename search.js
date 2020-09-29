const fs = require('fs');
let filename = "";
let substring = "", sublist = [];

process.argv.forEach((val, index, array) => {
    if (index == 2) filename = val;
    if (index > 2) substring += val;
});

console.log(`searching for '${substring}' in '${filename}'...`);

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;

    for (let word of Object.keys(JSON.parse(data)))
        if (word.indexOf(substring) != -1) sublist.push(word);

    console.log(`filtered is of length ${sublist.length}`);
    console.log(sublist);
});
