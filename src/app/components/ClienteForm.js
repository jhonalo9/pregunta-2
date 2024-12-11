import { useState, useEffect } from 'react';

const ClienteForm = ({ setClienteSeleccionado }) => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch('/data/clientes.json')
      .then((response) => response.json())
      .then((data) => setClientes(data));
  }, []);

  return (
    <div>
      <label htmlFor="cliente">Cliente</label>
      <select id="cliente" onChange={(e) => setClienteSeleccionado(e.target.value)}>
        <option value="">Seleccione un cliente</option>
        {clientes.map((cliente) => (
          <option key={cliente.id} value={cliente.id}>
            {cliente.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ClienteForm;
