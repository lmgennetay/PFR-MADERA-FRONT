import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuGaucheComponent } from './menu-gauche/menu-gauche.component';
import { MenuDroiteComponent } from './menu-droite/menu-droite.component';
import { ClientComponent } from './client/client.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuGaucheComponent,
    MenuDroiteComponent,
    ClientComponent,
    PageNotFoundComponentComponent,
    GestionClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
