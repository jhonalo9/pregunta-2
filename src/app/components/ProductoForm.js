import { useState, useEffect } from 'react';

const ProductoForm = ({ setProductoSeleccionado }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/data/productos.json')
      .then((response) => response.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <div>
      <label htmlFor="producto">Producto</label>
      <select id="producto" onChange={(e) => setProductoSeleccionado(e.target.value)}>
        <option value="">Seleccione un producto</option>
        {productos.map((producto) => (
          <option key={producto.id} value={producto.id}>
            {producto.nombre} - ${producto.precio}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductoForm;
