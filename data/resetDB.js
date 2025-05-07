import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Producto from '../models/Producto.js';
import productos from './productos.js';

dotenv.config();

const resetDB = async () => {
    try {
        // Conectar a la base de datos
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conectado a la base de datos');

        // Eliminar todos los documentos de la colección `productos`
        await Producto.deleteMany();
        console.log('Colección de productos eliminada');

        // Insertar los productos del archivo `productos.js`
        await Producto.insertMany(productos);
        console.log('Productos insertados correctamente');

        // Cerrar la conexión
        mongoose.connection.close();
        console.log('Conexión cerrada');
    } catch (error) {
        console.error('Error al reiniciar la base de datos:', error);
        mongoose.connection.close();
        process.exit(1);
    }
}; 
resetDB();