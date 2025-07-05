import { Form } from "react-bootstrap";

const Select = ({ ciudades }) => {
    return (
        <Form.Select aria-label="Selecciona una ciudad">
            <option>Open this select menu</option>
            {
                ciudades.map((ciudad , indice) => (
                    <option key={indice}>{ciudad}</option>
                ))
            }
        </Form.Select >
    );
};

export default Select;