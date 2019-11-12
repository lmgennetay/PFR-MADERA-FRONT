import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'gestionClient', component: GestionClientComponent },
  { path: 'ajoutClient', component: ClientComponent },
  { path: '**', component: PageNotFoundComponentComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
