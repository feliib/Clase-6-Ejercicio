import mongoose from 'mongoose';

const productoSchema = mongoose.Schema({
    id: {
        type: Number, // Define el campo `id` como un número
        required: true,
        unique: true, // Asegura que no haya duplicados
    },
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
        trim: true,
    },
    stock: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true, // Agrega campos createdAt y updatedAt automáticamente
});

const Producto = mongoose.model('Producto', productoSchema);

export default Producto;