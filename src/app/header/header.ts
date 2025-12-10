import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Home } from '../home/home';
import { Menu } from '../menu/menu';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-header',
  imports: [RouterLink , Home , Menu , Contact],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
