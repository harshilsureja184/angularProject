import { Routes } from '@angular/router';
import { Menu } from './menu';
import { Starter } from './starter/starter';
import { Maincourse } from './maincourse/maincourse';
import { Siders } from './siders/siders';

export const routes: Routes = [
    { path: '', component: Menu },
    { path: 'starter', component: Starter },
    { path: 'maincourse', component: Maincourse },
    { path: 'siders', component: Siders },
];
