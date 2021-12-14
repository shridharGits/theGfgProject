const fs = require('fs')

let file1 = `11-12-2021`;
let file2 = `14-12-2021`;

const yesterday = require(`./${file1}.json`)
const today = require(`./${file2}.json`)

let difference = today.filter(x => yesterday.indexOf(x) === -1);

const saveNotes = function(difference){
    const dataJSON = JSON.stringify(difference);
    fs.writeFileSync(`${file1[0]+file1[1]}-${file2[0]+file2[1]}-difference.json`, dataJSON)
}

saveNotes(difference)