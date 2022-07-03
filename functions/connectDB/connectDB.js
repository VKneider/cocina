const {MongoClient} = require("mongodb");

let url = 'mongodb+srv://vkneider:vkneider@cluster0.hjhdw.mongodb.net/?retryWrites=true&w=majority';

async function connectDB() 
{
const client = new MongoClient(url);
await client.connect();
return client;
}

module.exports = connectDB; 