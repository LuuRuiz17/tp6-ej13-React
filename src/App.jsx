import { useEffect, useState } from "react";
import Select from "../components/Select";

function App() {

  useEffect(() => {
    console.log("Desde useEffect")
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
    <>
      <h1>Clima</h1>
      <Select ciudades={ciudades}></Select>
    </>
  )
}

export default App
