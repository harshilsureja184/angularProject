import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Error } from './error/error';
import { Cart } from './cart/cart';
import { Terms } from './terms/terms';
import { Faq } from './faq/faq';


export const routes: Routes = [
    {path: 'contact' , component : Contact},
    {path: 'home' , component : Home},
    {
  path: 'menu',
  loadChildren: () => import('./menu/menu.routes').then(m => m.routes)
},
    {path: 'cart' , component : Cart},
    {path: 'terms', component : Terms},
    {path: 'faq' , component : Faq},
    {path :'' , redirectTo : 'home', pathMatch : "full"},
    {path: '**' , component : Error }
];
