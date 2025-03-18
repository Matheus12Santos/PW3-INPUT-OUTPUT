import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextOverflowComponent } from "./text-overflow/text-overflow.component";
import { BiscoitoComponent } from "./biscoito/biscoito.component";
import { AleatorioComponent } from "./aleatorio/aleatorio.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextOverflowComponent, BiscoitoComponent, AleatorioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PW3-INPUT-OUTPUT';

  resultado: string = "";

  processar(valor:string) {
    this.resultado = valor;
  }
}
