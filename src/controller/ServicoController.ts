import {StateServico} from "../constants/StateServico";

export default class ServicoController{
    private estadoAtualDaAplicacao: StateServico = StateServico.NORMAL
    private TEMPO_DELAY_EM_SEGUNDOS_DEFAULT = 120 // Segundos


    private momentoAtual = (): Date => {
        return new Date();
    };

    public setTempoEmSegundos = (segundos: number ) => {this.TEMPO_DELAY_EM_SEGUNDOS_DEFAULT = segundos}

    private handleRetornoSemDelay = (): Date =>{
        console.log(`Aplicação esta retornando em estado de: ${this.estadoAtualDaAplicacao}`)
        return this.momentoAtual();
    }

    private handleRetornoComDelay = async (): Promise<Date> => {
        const momentoInicialDaRequisicao = this.momentoAtual()

        console.log(`Aplicação está retornando em estado de: ${this.estadoAtualDaAplicacao}`);
        await this.delay(this.TEMPO_DELAY_EM_SEGUNDOS_DEFAULT * 1000); //  Segundos para -> Milisegundos
        return momentoInicialDaRequisicao;
    }
    
    private delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    
    public setNovoEstadoDaAplicacao(estadoSolicitado: StateServico): void{
        this.estadoAtualDaAplicacao = estadoSolicitado
        console.log(`Aplicação configurada como: ${this.estadoAtualDaAplicacao}`)
    }

    
    public handleRetornoDaAplicacao = (): Promise<Date> | Date | null=> {
        switch (this.estadoAtualDaAplicacao) {
            case StateServico.NORMAL:
                return this.handleRetornoSemDelay()
            
            case StateServico.DELAY:
                return this.handleRetornoComDelay()
            default:
                console.log("sem caso de retorno")
                return null
        }
    };
}