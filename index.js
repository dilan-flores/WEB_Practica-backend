const express = require("express");
const app = express();
//Utiliza el puerto generado por render o utiliza el puerto 3000
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Página principal - Grupo # 1")
})

app.get('/',(req,res)=>{
    
})

app.get('/integrantes',(req,res)=>{
    res.json([
        {
            "nombre":"Dilan",
            "apellido":"Flores",
            "edad":21
        },
        {
            "nombre":"Mateo",
            "apellido":"Congo",
            "edad":21
        },
        {
            "nombre":"Elian ",
            "apellido":"Moreira",
            "edad":20
        },
        {
            "nombre":"Erick",
            "apellido":"Palomo",
            "edad":21
        },
        {
            "nombre":"Erick",
            "apellido":"Santillan",
            "edad":21
        },
        {
            "nombre":"Pablo",
            "apellido":"Uchuari",
            "edad":23
        },
    ])
})

app.get('/productos',(req,res)=>{
    res.send(`
        <h1>Catálogo de productos</h1>
            <p>Bienvenidos</p>
    `)
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});

// Comandos:
// npm init // Se crea packeage.json
// nodemon index.js // Se crea node_modules
// npm i express // Puede leer el código; Para levantar servidor de desarrollo
// npm

// Dato: variables de entorno: claves de accesos (.env)

//.gitignore:
    ///node_modules
    //.env 48.4