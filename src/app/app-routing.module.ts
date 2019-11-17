import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './modules/general/accueil/accueil.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  {
    path: 'login',
    loadChildren: () => import('./modules/general/login/login-form.module').then(mod => mod.LoginFormModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./modules/application/clients-form/clients-form.module').then(mod => mod.ClientsFormModule)
  },
  {
    path: 'devis',
    loadChildren: () => import('./modules/application/quotes-form/quotes-form.module').then(mod => mod.QuotesFormModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
