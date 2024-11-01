import express, { Request, Response } from 'express';
import ServicoController from './controller/ServicoController';

const app = express();
const PORT = 3000;

const servicoController: ServicoController = new ServicoController

app.get('/servico', (req: Request, res: Response) => {
  res.send('Requisicao principal TODO');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
