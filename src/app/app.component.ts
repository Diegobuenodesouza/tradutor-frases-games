import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  jogoEmAndamento = true;
  resultado: string;

  encerrarJogo(tipo: string): void {
    this.resultado = tipo;
    this.jogoEmAndamento = false;
  }

  jogarNovamente(): void {
    this.jogoEmAndamento = true;
  }

  ngOnInit(): void {
  }
}
