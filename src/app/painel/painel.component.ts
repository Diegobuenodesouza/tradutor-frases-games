import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { Frase} from '../shared/frase.model';
import { FRASES, DICAS} from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy  {

  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase:';
  public resposta = '';
  public rodada = 0;
  public rodadaFrase: Frase;
  public progresso = 0;
  tentativas = 3;
  public dicas: string[] = DICAS;
  dica = false;

  @Output() encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.atualizaRodada();
  }

  ngOnDestroy(): void{
  }

  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';

  }
  atualizarResposta(respo: Event): void {
    this.resposta = (respo.target as HTMLInputElement).value;
  }

  mostrarDica(): void {
    this.dica = true;
    this.tentativas--;
  }

  verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr.toLowerCase() === this.resposta.toLowerCase()){
      this.rodada++;
      this.progresso = this.progresso + 25;
      this.atualizaRodada();
      this.dica = false;
      if (this.rodada === 4){
        this.encerrarJogo.emit('vitoria');
      }
    }
    else{
      this.tentativas--;
      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota');
      }
    }
  }
}
