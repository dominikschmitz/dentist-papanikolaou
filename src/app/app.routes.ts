import { Routes } from '@angular/router';
import { Impressum } from './pages/impressum/impressum';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';

export const routes: Routes = [
  { 
    path: 'start', component: Home
  },
  { path: 'leistungen', component: Services},
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: '**', redirectTo: '/start' }
]
