const Telebot = require('telebot');
const axios = require('axios');
const excel = require('xlsx');

//Axios Instance
const API_DATABASE = axios.create({
    baseURL: 'http://localhost:8888',
    timeout: 10000,
  });


let BUTTONS = {};

let keys = ["readFile", "producto","user"];

let labels = ["Leer Archivo", "Buscar Producto", "user"];
              
let commands = ["/start", "/product", "/user"];

let idx = 0, keysLen = keys.length;

for (; idx < keysLen ; idx++) {
    BUTTONS[keys[idx]] = { label: labels[idx], command: commands[idx] };
}


//BOT Instance
const bot = new Telebot({
    
    token: "5498400655:AAFZsXv3-yBIwBrMg40Hr2hpTWKfyV1nmf0",
    usePlugins: ['namedButtons', 'askUser', 'commandButton'],
    pluginConfig: {
        namedButtons: {
            buttons: BUTTONS
        }
    }
});


let ENDPOINT_LIST={

    findProduct:'/findProduct'
}





module.exports = {  API_DATABASE, bot, BUTTONS , excel, ENDPOINT_LIST};