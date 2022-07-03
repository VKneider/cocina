let { log, output } = require('../../utils');
let connectDB = require('../connectDB/connectDB');


exports.handler = async (event) => {

   let {
      httpMethod: method,
      queryStringParameters: p
   } = event;

   
   let client = await connectDB()
   const colProductos = client.db().collection('productos');
  

   if (method == "GET") {
    let { nombre } = p

    
      try {

         let usuario = await colProductos.find({nombre:{'$regex' : nombre, '$options' : 'i'}}).toArray();
         
         return output(usuario);

      } catch (error) {log(error);}
   }
}





