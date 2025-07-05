import { useEffect, useState } from "react";
import Select from "../components/Select";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

function App() {

  useEffect(() => {
    obtenerCiudades();
  }, [])

  const [ciudades, setCiudades] = useState([]);

  const obtenerCiudades = async () => {
    try {
      const respuesta = await fetch("https://countriesnow.space/api/v0.1/countries");
      if (respuesta.status === 200) {
        const ciudades = await respuesta.json();
        setCiudades(ciudades.data[7].cities);
      }
    } catch (error) {
      console.log("Error al obtener ciudades: ", error);
    }
  }

  return (
    <Container>
      <h1 className="color-loop text-center mx-auto my-3">Clima</h1>
      <Select ciudades={ciudades}></Select>
    </Container>
  )
}

export default App
