import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { Menu } from './menu/menu';
import { Contact } from './contact/contact';
import { Cart } from './cart/cart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Header , Footer , Home , Menu , Cart , Contact ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularProject');
}
