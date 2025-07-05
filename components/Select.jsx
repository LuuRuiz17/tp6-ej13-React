import { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ClimaCiudad from "./ClimaCiudad";

const Select = ({ ciudades }) => {

    const {
        register,
        handleSubmit,
    } = useForm()

    const [clima, setClima] = useState()

    const obtenerClima = async (dato) => {
        const ciudad = dato.ciudad;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=73d0cd76bb8c00484822e0926d488cc7&units=metric&lang=es`;
        const respuesta = await fetch(url);
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setClima(datos);
        }
    };

    return (

        <>
            <Form onSubmit={handleSubmit(obtenerClima)}>
                <Form.Select aria-label="Selecciona una ciudad" {...register('ciudad')}>
                    <option>Selecciona una ciudad</option>
                    {
                        ciudades.map((ciudad, indice) => (
                            <option key={indice} clima={clima}>{ciudad}</option>
                        ))
                    }
                </Form.Select >
                <button type="submit">Enviar</button>
            </Form>
            <ClimaCiudad clima = {clima}></ClimaCiudad>
        </>
    );
}

export default Select;