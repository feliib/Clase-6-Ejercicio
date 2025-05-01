import Producto from '../models/Producto.js';

const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al obtener los productos' });
    }
};

const crearProducto = async (req, res) => {
    const { nombre, precio, categoria, stock } = req.body;

    if (!nombre || precio === undefined || !categoria || stock === undefined) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
        const nuevoProducto = new Producto(req.body);
        const productoGuardado = await nuevoProducto.save();
        res.status(201).json(productoGuardado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al crear el producto' });
    }
};

const obtenerProductoPorId = async (req, res) => {
    const { id } = req.params;

    try {
        const producto = await Producto.findById(id);
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

export {
    obtenerProductos,
    crearProducto,
    obtenerProductoPorId
};