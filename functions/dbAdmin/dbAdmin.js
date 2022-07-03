let {log, output, readFile} = require('../../utils');
let {excel} = require ('../../settings')

let connectDB = require('../connectDB/connectDB');






    
    async function pepito(){
    let client = await connectDB()
    const colProductos = client.db().collection('productos');
    let productos = readFile();
    
    try {
        let i=0;
        let productosLen=productos.length;
        for (;i<productosLen;i++){
           
                await colProductos.insertOne({
                    nombre: String(productos[i].PRODUCTO), 
                    cantidad: String(productos[i].CANTIDAD),
                    VALOR: String(productos[i].VALOR)
                    
                })
            

        }
        
        return output('todo chevere');

    } 
    
    catch (error) {
        log(error);
    }


 }


 pepito();