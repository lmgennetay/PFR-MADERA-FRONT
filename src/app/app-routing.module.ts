import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './modules/general/home/home.component';
import { AccueilComponent } from './modules/general/accueil/accueil.component';
import { LoginFormComponent } from './modules/general/login/login-Form.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { ConfigrationMenuComponent } from './modules/general/configuration-menu/configration-menu.component';
import { GestionDevisMenuComponent } from './modules/general/gestion-devis-menu/gestion-devis-menu.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/general/login/login-form.module').then(mod => mod.LoginFormModule)},
  { path: 'accueil', component: AccueilComponent },
  { path: 'configurateur', component: ConfigrationMenuComponent },
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
    path: 'devisRecap/:id',
    loadChildren: () => import('./modules/application/quotes-view/quotes-view.module').then(mod => mod.QuotesViewModule)
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
    path: 'devis/view/:id',
    loadChildren: () => import('./modules/application/quotes-view/quotes-view.module').then(mod => mod.QuotesViewModule)
  },
  {
    path: 'devis/view/estimatif/:id',
    loadChildren: () => import('./modules/application/quotes-view/quotes-view.module').then(mod => mod.QuotesViewModule)
  },
  {
    path: 'devis/view/detail/:id',
    loadChildren: () => import('./modules/application/quotes-view/quotes-view.module').then(mod => mod.QuotesViewModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/application/products-form/products-form.module').then(mod => mod.ProductsFormModule)
  },
  {
    path: 'modules/devis/:id',
    loadChildren: () => import('./modules/application/modules-list/modules-list.module').then(mod => mod.ModulesListModule)
  },
  {
    path: 'module/:id',
    loadChildren: () => import('./modules/application/modules-form/modules-form.module').then(mod => mod.ModulesFormModule)
  },
  {
    path: 'ajoutModule',
    loadChildren: () => import('./modules/application/modules-form/modules-form.module').then(mod => mod.ModulesFormModule)
  },
  {
    path: 'CaracteristiquesModule',
    loadChildren: () => import('./modules/application/modules-form-carac/modules-form-carac.module').then(mod => mod.ModulesFormCaracModule)
  },
  {
    path: 'ajoutCaracteristiquesModule',
    loadChildren: () => import('./modules/application/modules-form-carac/modules-form-carac.module').then(mod => mod.ModulesFormCaracModule)
  },
  {
    path: '**', component: NotFoundComponent
  }
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
