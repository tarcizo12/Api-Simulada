import express, { Request, Response } from 'express';
import ServicoController from './controller/ServicoController';
import {getStateByValue, StateServico, getEnumNameByValue} from '../src/constants/StateServico'
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors()); 

const servicoController: ServicoController = new ServicoController

app.get('/servico', async (req: Request, res: Response) => {
  try {
    const horaInicialDaRequisicao = await servicoController.handleRetornoDaAplicacao();
  
    const opcoes: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const HORA_INCIAL_DA_REQUISICAO: string | undefined = horaInicialDaRequisicao?.toLocaleTimeString('pt-BR', opcoes);
    
    res.json({ HORA_INCIAL_DA_REQUISICAO });
  } catch (error) {
    console.error("Erro ao obter a requisicao:", error);
    res.status(500).json({ error: "Erro ao processar a solicitação" });
  }
});



app.get('/mudarEstado', (req: Request, res: Response) => {
  const code: number = Number(req.query.code); 
  const novoEstado: StateServico | undefined = getStateByValue(code)

  if(novoEstado != undefined){
    servicoController.setNovoEstadoDaAplicacao(novoEstado)
  }

  res.send(`Alterado para o estado: ${getEnumNameByValue(novoEstado)}`);
});

app.get('/alterarDelay', (req: Request, res: Response) => {
  const tempoEmSegundos: number = Number(req.query.segundos); 
  servicoController.setTempoEmSegundos(tempoEmSegundos)
  res.send(`Tempo de delay definido em: ${tempoEmSegundos}s`);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
