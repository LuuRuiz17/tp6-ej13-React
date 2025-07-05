import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ClimaCiudad({ clima }) {
  if (!clima) return null;
  console.log(clima);

  return (
    <Card className="text-white mx-auto mt-5 card-clima">
      <Card.Body className='d-flex justify-content-between card-body'>
        <div className='my-auto'>
          <Card.Title>Clima en {clima.name}</Card.Title>
          <Card.Text className="text-capitalize">{clima.weather[0].description}</Card.Text>
        </div>
        <Card.Img variant="top" className='imagen-clima' src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`} alt={clima.weather[0].description} />
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="bg-light">
          🌡 Temperatura: {clima.main.temp} °C
        </ListGroup.Item>
        <ListGroup.Item className="bg-light">
          ⬇ Mínima: {clima.main.temp_min} °C
        </ListGroup.Item>
        <ListGroup.Item className="bg-light">
          ⬆ Máxima: {clima.main.temp_max} °C
        </ListGroup.Item>
        <ListGroup.Item className="bg-light">
          🌬 Sensación térmica: {clima.main.feels_like} °C
        </ListGroup.Item>
        <ListGroup.Item className="bg-light">
          💧 Humedad: {clima.main.humidity} %
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ClimaCiudad;


// if (!clima) return null; // previene errores cuando aún no se cargó el clima

// console.log(`Temperatura máxima: ${clima.main.temp_max}`);
// console.log(`Humedad: ${clima.main.humidity} %`);
// console.log(`Clima en ${clima.name}`);
// console.log(`${clima.weather[0].description}`);
// console.log(`${clima.weather[0].icon}`);