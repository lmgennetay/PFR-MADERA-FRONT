import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './modules/general/home/home.component';
import { AccueilComponent } from './modules/general/accueil/accueil.component';
import { LoginFormComponent } from './modules/general/login/login-Form.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { GestionClientMenuComponent } from './modules/general/gestion-client-menu/gestion-client-menu.component';
import { GestionDevisMenuComponent } from './modules/general/gestion-devis-menu/gestion-devis-menu.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/general/login/login-form.module').then(mod => mod.LoginFormModule)},
  { path: 'accueil', component: AccueilComponent },
  { path: 'gestionClient', component: GestionClientMenuComponent },
  { path: 'gestionDevis', component: GestionDevisMenuComponent },
  {
    path: 'login',
    loadChildren: () => import('./modules/general/login/login-form.module').then(mod => mod.LoginFormModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./modules/application/customers-list/customers-list.module').then(mod => mod.CustomersListModule)
  },
  {
    path: 'client/:id',
    loadChildren: () => import('./modules/application/customers-form/customers-form.module').then(mod => mod.CustomersFormModule)
  },
  {
    path: 'devis',
    loadChildren: () => import('./modules/application/quotes-list/quotes-list.module').then(mod => mod.QuotesListModule)
  },
  {
    path: 'ajoutDevis',
    loadChildren: () => import('./modules/application/quotes-form/quotes-form.module').then(mod => mod.QuotesFormModule)
  },
  {
    path: 'ajoutClient',
    loadChildren: () => import('./modules/application/customers-form/customers-form.module').then(mod => mod.CustomersFormModule)
  },
  {
    path: 'commercials',
    loadChildren: () => import('./modules/application/users-list/users-list.module').then(mod => mod.UsersListModule)
  },
  {
    path: 'ajoutCommercial',
    loadChildren: () => import('./modules/application/users-form/users-form.module').then(mod => mod.UsersFormModule)
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./modules/application/users-form/users-form.module').then(mod => mod.UsersFormModule)
  },
  {
    path: 'devis/:id',
    loadChildren: () => import('./modules/application/quotes-form/quotes-form.module').then(mod => mod.QuotesFormModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/application/products-form/products-form.module').then(mod => mod.ProductsFormModule)
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
