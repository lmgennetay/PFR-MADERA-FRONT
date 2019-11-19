import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './modules/general/accueil/accueil.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { GestionClientMenuComponent } from './modules/application/gestion-client-menu/gestion-client-menu.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'gestionClient', component: GestionClientMenuComponent },
  
  {
    path: 'login',
    loadChildren: () => import('./modules/general/login/login-form.module').then(mod => mod.LoginFormModule)
  },
  {
    path: 'ajoutClient',
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
