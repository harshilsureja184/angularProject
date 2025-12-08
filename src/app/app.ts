import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  //templateUrl: './app.html',
  //styleUrl: './app.css'
  template : `<h1>Hello , How are you ?</h1>`,
  styles : 'h1{color: red; font-size: 150px;}'
})
export class App {
  protected readonly title = signal('angularProject');
}
