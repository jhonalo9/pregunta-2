import { useState } from 'react';
import ProveedorForm from './ProveedorForm';
import ProductoForm from './ProductoForm';
import ClienteForm from './ClienteForm';

const VentaForm = () => {
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  const [productosVendidos, setProductosVendidos] = useState([]);

  const handleVenta = () => {
    if (!proveedorSeleccionado || !productoSeleccionado || !clienteSeleccionado) {
      alert('Debe seleccionar un cliente, un proveedor y un producto');
      return;
    }

    setProductosVendidos([
      ...productosVendidos,
      { cliente: clienteSeleccionado, proveedor: proveedorSeleccionado, producto: productoSeleccionado }
    ]);
  };

  return (
    <div>
      <ClienteForm setClienteSeleccionado={setClienteSeleccionado} />
      <ProveedorForm setProveedorSeleccionado={setProveedorSeleccionado} />
      <ProductoForm setProductoSeleccionado={setProductoSeleccionado} />

      <button onClick={handleVenta}>Simular Venta</button>

      <div>
        <h3>Productos Vendidos</h3>
        <ul>
          {productosVendidos.map((venta, index) => (
            <li key={index}>
              Cliente: {venta.cliente}, Proveedor: {venta.proveedor}, Producto: {venta.producto}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VentaForm;
