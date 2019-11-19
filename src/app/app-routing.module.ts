import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './modules/general/accueil/accueil.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { GestionClientMenuComponent } from './modules/general/gestion-client-menu/gestion-client-menu.component';
import { GestionDevisMenuComponent } from './modules/general/gestion-devis-menu/gestion-devis-menu.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'gestionClient', component: GestionClientMenuComponent },
  { path: 'gestionDevis', component: GestionDevisMenuComponent },

  {
    path: 'login',
    loadChildren: () => import('./modules/general/login/login-form.module').then(mod => mod.LoginFormModule)
  },
  {
    path: 'listDevis',
    loadChildren: () => import('./modules/application/quotes-list/quotes-list.module').then(mod => mod.QuotesListModule)
  },
  {
    path: 'ajoutClient',
    loadChildren: () => import('./modules/application/clients-form/clients-form.module').then(mod => mod.ClientsFormModule)
  },
  {
    path: 'ajoutDevis',
    loadChildren: () => import('./modules/application/quotes-form/quotes-form.module').then(mod => mod.QuotesFormModule)
  },
  {
    path: 'devis/:id',
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
