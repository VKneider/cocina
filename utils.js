let {excel} = require('./settings')


let log = console.log;
let output = content => ({
    statusCode: 200,
    body: JSON.stringify(content)
});



function readFile(){

let file = excel.readFile('test.xlsx')
let data = excel.utils.sheet_to_json(file.Sheets['PRECIOS']);

return data;

}


module.exports={log,output, readFile}