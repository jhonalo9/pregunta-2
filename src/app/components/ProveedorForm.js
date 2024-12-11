import { useState, useEffect } from 'react';

const ProveedorForm = ({ setProveedorSeleccionado }) => {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    fetch('/data/proveedores.json')
      .then((response) => response.json())
      .then((data) => setProveedores(data));
  }, []);

  return (
    <div>
      <label htmlFor="proveedor">Proveedor</label>
      <select id="proveedor" onChange={(e) => setProveedorSeleccionado(e.target.value)}>
        <option value="">Seleccione un proveedor</option>
        {proveedores.map((proveedor) => (
          <option key={proveedor.id} value={proveedor.id}>
            {proveedor.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProveedorForm;
