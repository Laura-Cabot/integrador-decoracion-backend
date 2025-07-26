import express from 'express';
import cors from 'cors';
import productosRouter from './routes/producto.routes';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;


app.use(cors());
app.use(express.json());

app.use('/productos', productosRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
