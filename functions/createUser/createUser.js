let {log, output} = require('../../utils/utils');
let connectDB = require('../connectDB/connectDB');
const { API_DATABASE, ENDPOINT_DATABASE, b } = require("../../settings");



exports.handler = async (event) => {

    let {
        httpMethod: method,
        queryStringParameters: p
     } = event;
    
let client = await connectDB()
const colUsers = client.db().collection('users');



if (method == "POST"){
    
    try { await colUsers.insertOne({ id: String(p.id) });
    return output('Usuario Creado Satisfactoriamente')}  catch (error){log (error);}
}

}



