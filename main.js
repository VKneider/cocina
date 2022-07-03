const {bot, API_DATABASE, BUTTONS, ENDPOINT_LIST} = require ('./settings');

bot.on('/start',(msg) => { 

   let replyMarkup = bot.keyboard([[BUTTONS.producto.label]] , { resize: true })
   bot.sendMessage(msg.from.id, 'Bienvenido a la lista de precios en telegram', {replyMarkup});
    
});

bot.on('/product',(msg) => { 

    bot.sendMessage(msg.from.id, "Accediendo a la base de datos", {ask: 'product'})
     
 });

 bot.on('ask.product', msg =>{

    let texto=msg.text;

    async function buscar(texto){

        try {
            
            if (texto == "Buscar Producto") {
                return bot.sendMessage(msg.from.id, "Ingresa el nombre del producto", {ask: 'product'});
        
            }
            
            let call = await API_DATABASE.get(ENDPOINT_LIST.findProduct + `?nombre=${texto}`)
            let producto = call.data;
            
            let resultado = `|Nombre                           | Cantidad |  Precio \n`;
            let len=producto.length;
           
            for (let i = 0; i < len; i++) {
                if(producto[i].cantidad == undefined){ resultado += `${producto[i].nombre}  | indefinido | $${producto[i].VALOR} \n`;} else {

                    resultado += `${producto[i].nombre}  | ${producto[i].cantidad} | $${producto[i].VALOR} \n`;
                }
            }

            return bot.sendMessage(msg.chat.id, ` ${resultado}`);


            
        } catch (error) {console.log(error)}
        
    }
    
    buscar(texto);


 })
/*
 bot.on('text',(msg) => { 


    async function registro() {
        try { await API_DATABASE.post(ENDPOINT_DATABASE.createUser + `?id=${msg.from.id}`) }
        catch (Error) { console.log(Error) }
    }



    async function verificando() {

        try {

            let call = await API_DATABASE.get(ENDPOINT_DATABASE.findUser + `?id=${msg.from.id}`)
            let verificador = call.data;

            if (verificador == 0) {
                
                registro();

            } else {
            
                

            }

        } catch (Error) { console.log(Error) };
    }

    verificando();


    let replyMarkup = bot.keyboard([[BUTTONS.producto.label]] , { resize: true })
    bot.sendMessage(msg.from.id, 'Bienvenido a la lista de precios en telegram', {replyMarkup});
     
 });
*/

 bot.connect();
    