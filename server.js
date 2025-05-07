import express from 'express';
import dotenv from 'dotenv';
import productosRouter from './routes/productosRoutes.js'; // Importa el nuevo router
import conectarDB from './config/db.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

conectarDB();

console.log("EL PUERTO ES: ", PORT);

app.use(express.json()); 

app.use("/", productosRouter); 

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});