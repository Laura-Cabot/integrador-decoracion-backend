import express from 'express';
import cors from 'cors';
import productoRoutes from './routes/producto.routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
app.use(cors()); 
app.use(express.urlencoded({ extended: true })); 

app.use(express.json());

app.use('/productos', productoRoutes);

app.use(errorHandler);

export default app;
