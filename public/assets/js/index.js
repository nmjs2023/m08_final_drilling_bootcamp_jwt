//import { json, response } from "express";


//console.log('funcionando javascript en el front ./public/assets/js/index.js');
fetch('http://localhost:8080/estudiantes/')
    .then(response => response.json())
    .then(json => console.log(json));

