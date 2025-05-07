import productos from '../data/productos.js';

const obtenerProductos = async (req, res) => {
  try {
      const productos = await Producto.find();
      res.json(productos);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Hubo un error al obtener los productos' });
  }
};

  import Producto from '../models/Producto.js';

const crearProducto = async (req, res) => {
    const { nombre, precio, categoria, stock } = req.body;

    if (!nombre || precio === undefined || !categoria || stock === undefined) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
        const nuevoProducto = new Producto({ nombre, precio, categoria, stock });
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el producto' });
    }
};

const obtenerProductoPorId = async (req, res) => {
  const { id } = req.params;

  try {
      // Busca el producto por el campo `id`
      const producto = await Producto.findOne({ id: parseInt(id) }); // Convierte `id` a número
      if (producto) {
          res.json(producto);
      } else {
          res.status(404).json({ message: 'Producto no encontrado' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Hubo un error al buscar el producto' });
  }
};

const eliminarProducto = async (req, res) => {
  const { id } = req.params;

  try {
      // Busca y elimina el producto por el campo `id`
      const productoEliminado = await Producto.findOneAndDelete({ id: parseInt(id) }); // Convierte `id` a número

      if (!productoEliminado) {
          return res.status(404).json({ message: 'Producto no encontrado' });
      }

      res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar el producto' });
  }
};

export { obtenerProductos, crearProducto, obtenerProductoPorId, eliminarProducto };