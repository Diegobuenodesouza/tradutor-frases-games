import { Component, Input, OnInit , OnChanges } from '@angular/core';
import { Coracao} from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit , OnChanges {

  @Input() tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ];

  constructor() { }

  ngOnChanges(): void{
    if (this.tentativas !== this.coracoes.length){
    const contador = this.coracoes.length - this.tentativas;
    this.coracoes[contador - 1].cheio = false;
    }
  }

  ngOnInit(): void {

  }




}
