import React,{useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
var qs = require('qs');

export default function Create  (){
    const [nombrePelicula,setNombrePelicula] = useState('');
    const [director,setDirector] = useState('');
    const [mayorEdad,setMayorEdad] = useState('');
    const [edad,setedad] = useState('');
    const [password,setPassword] = useState('');
    const enviarDatos=() =>{
        console.log(nombrePelicula);
        console.log(director);
        console.log(mayorEdad);
        console.log(edad);
        console.log(password);
        var data = qs.stringify({
        'nombre': nombrePelicula,
        'direccot': director,
        'anio_estreno': edad,
        'idioma': password 
        });
        var config = {
        method: 'post',
        url: 'https://uide-crud.herokuapp.com/peliculas/crearPelicula',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            window.alert("Pelicula Guardada Correctamente");
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            window.alert("Ocurrio un error");
        console.log(error);
        });
}
    return(
    <Form className="formulariouide">
        <Form.Field>
            <label>Nombre de la pelicula</label>
            <br></br>
            <input placeholder="Pelicula" onChange= {(e) => setNombrePelicula(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
            <label>Director</label>
            <br></br>
            <input placeholder="Director" onChange= {(e) => setDirector(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
            <Checkbox label="Es mayor de edad"onChange= {(e) => setMayorEdad(!mayorEdad)}></Checkbox>
        </Form.Field>
        <Form.Field>
            <label>Edad</label>
            <br></br>
            <input type="number" placeholder="edad" onChange= {(e) => setedad(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
            <label>Contraseña</label>
            <br></br>
            <input type="password" placeholder="contrasena" onChange= {(e) =>setPassword (e.target.value)}></input>
        </Form.Field>
        <Form.Field>
            <label>Fecha</label>
            <br></br>
            <input type="date" placeholder="fecha"></input>
        </Form.Field>
        <Button onClick ={enviarDatos} type = "submit"> Guardar</Button>
    </Form>
    )
}
