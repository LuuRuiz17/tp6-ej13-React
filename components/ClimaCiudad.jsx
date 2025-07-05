const ClimaCiudad = ({ clima }) => {
  if (!clima) return null; // previene errores cuando aún no se cargó el clima

  console.log(`Temperatura: ${clima.main.temp}`);
  console.log(`Temperatura mínima: ${clima.main.temp_min}`);
  console.log(`Temperatura máxima: ${clima.main.temp_max}`);
  console.log(`Humedad: ${clima.main.humidity} %`);
  console.log(`Clima en ${clima.name}`);
  console.log(`Clima en ${clima.name}`);
  console.log(`${clima.weather[0].description}`);
  console.log(`${clima.weather[0].icon}`);

  return (
    <div>
      <h1>hola</h1>
    </div>
  );
};

export default ClimaCiudad;
