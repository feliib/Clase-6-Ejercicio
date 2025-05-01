import productos from '../data/productos.js';

const obtenerProductos = (req, res) => {
  res.json(productos);
};

const crearProducto = (req, res) => {
  const { nombre, precio, categoria, stock } = req.body;

  if (!nombre || precio === undefined || !categoria || stock === undefined) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Simulación de ID (si no lo tienes en tus datos iniciales)
  const nuevoId = productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1;

  const nuevoProducto = {
    id: nuevoId,
    nombre,
    precio,
    categoria,
    stock,
  };
  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
};

const obtenerProductoPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);

  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
};

export { obtenerProductos, crearProducto, obtenerProductoPorId };