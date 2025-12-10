import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Menu } from './menu/menu';
import { Error } from './error/error';


export const routes: Routes = [
    {path: 'contact' , component : Contact},
    {path: 'home' , component : Home},
    {path: 'menu' , component : Menu},
    {path :'' , redirectTo : 'home', pathMatch : "full"},
    {path: '**' , component : Error }
];
