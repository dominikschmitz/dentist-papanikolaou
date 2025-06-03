import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Team } from './pages/team/team';

export const routes: Routes = [
  { path: 'start', component: Home },
  { path: 'leistungen', component: Services},
  { path: 'team', component: Team },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: '**', redirectTo: '/start' }
]
