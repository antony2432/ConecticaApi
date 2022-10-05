import app from "./app";


app.listen(app.get('port'));
console.log(`Servidor corriendo en el puerto: http://172.19.19.40:${app.get('port')}`)