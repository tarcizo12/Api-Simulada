import StateServico from "../constants/StateServico";

export default class ServicoController{
    private estadoAtualDaAplicacao: StateServico = StateServico.NORMAL
    private readonly VALOR_FIXO = 8888888888888888


    private retornaQualquerValor = (): number => {
        return  this.VALOR_FIXO;
    };

    private handleRetornoComDelay = (): number =>{
        return this.retornaQualquerValor();
    }

    private handleRetornoSemDelay = (): number =>{
        return this.retornaQualquerValor();
    }

    private handleMudaEstadoDaAplicacao = (): number =>{
        return this.retornaQualquerValor();
    }

    public setNovoEstadoDaAplicacao(estadoSolicitado: StateServico): void{
        this.estadoAtualDaAplicacao = estadoSolicitado
    }

    
    public handleRetornoDaAplicacao = (): number => {
        switch (this.estadoAtualDaAplicacao) {
            case StateServico.NORMAL:
                return this.handleRetornoSemDelay()
            
            case StateServico.DELAY:
                return this.handleRetornoComDelay()
            default:
                return 0
        }
    };
}