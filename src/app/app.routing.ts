import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/index';
import { AuthGuard } from './guards/index';
import { LoginComponent } from './login/index';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
