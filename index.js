const express = require('express');
const device =require('express-device');
const app = express();

//middleware
app.use(device.capture());

app.get('/', (req,res)=>{
    console.log(req.device);
    res.send('Hola Esta Es una Prueba De Reconocimiento de Dispositivos EL usuario Se Conecto Desde ' + req.device.type )
})

app.listen(3000, ()=> console.log('Servidor en el puerto 3000'));