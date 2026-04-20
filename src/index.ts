import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT ?? 4000;

app.get('/', (_req: Request, res: Response) => {
  res.send('hola soy juan');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
