import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccueilComponent } from './modules/general/accueil/accueil.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
// import { HomeComponent } from './modules/general/home/home.component';
import { HeaderModule } from './components/header/header.module';
import { ConfigService } from './services/config/config.service';
import { PageFormComponent } from './components/page-form/page-form.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { GestionClientMenuComponent } from './modules/general/gestion-client-menu/gestion-client-menu.component';
import { GestionDevisMenuComponent } from './modules/general/gestion-devis-menu/gestion-devis-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AccueilComponent,
    PageFormComponent,
    GestionClientMenuComponent,
    GestionDevisMenuComponent,
    PageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule
  ],
  providers: [
    ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
