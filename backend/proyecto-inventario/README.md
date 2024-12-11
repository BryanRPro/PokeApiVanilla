# proyecto inventario
### inicio de proyecto
abrimos la terminal en la carpeta del proyecto y hacemos el comando npm init
```
npm init -y

```
despues instalamos la dependencias 
```
npm install express mongoose dotenv cors
```

despues instalamos las dependecnias de desarrollo

```
npm install --save-dev-nodemon
```
abrimos IDE ( entorno de desarrollo integrado)
```
code .
```
touch index.js .env README.md .gitignore
```

dentro de .gitignore escribimos lo siguiente :

node_modules
. env 
```

dentro de index.js pusimos el codigo: 
```
```
- const express = require("express"):    traemos express desde node_modules para poder usarlo.
- const app = express():    creamos una instacia o imagen de express para usarla en nuestra app.
- PORT = 3000 :    definimos el puerto que queremos usar.
- app.set("port",PORT) :     configuramos el puerto en nuestra app.
- app.get("hola "  : definimos una  ruta y un verbo HTTP.    
- (req,res)=>{ :    creamos una funcion que tiene como parametros req request y res= response.
- request es lo que recivimos.
- response es lo que respondemos.
- res.send("hola mundo") :      enviamos la respuesta.   
- app.listen(PORT,()=>{  :     escucha el puerto y avisame en console.log.
-  console.log(`listening port${PORT}`) :    el mensaje que esta todo ok.