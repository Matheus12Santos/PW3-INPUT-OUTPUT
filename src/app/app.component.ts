import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextOverflowComponent } from "./text-overflow/text-overflow.component";
import { BiscoitoComponent } from "./biscoito/biscoito.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextOverflowComponent, BiscoitoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PW3-INPUT-OUTPUT';
}
