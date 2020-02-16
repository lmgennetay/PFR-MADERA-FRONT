import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccueilComponent } from './modules/general/accueil/accueil.component';
// import { LoginFormModule } from './modules/general/login/login-form.module';
// import { LoginFormComponent } from './modules/general/login/login-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
// import { HomeComponent } from './modules/general/home/home.component';
import { HeaderModule } from './components/header/header.module';
import { ConfigService } from './services/config/config.service';
import { PageFormComponent } from './components/page-form/page-form.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { ConfigrationMenuComponent } from './modules/general/configuration-menu/configration-menu.component';
import { GestionDevisMenuComponent } from './modules/general/gestion-devis-menu/gestion-devis-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AccueilComponent,
    // HomeComponent,
    // LoginFormComponent,
    PageFormComponent,
    ConfigrationMenuComponent,
    GestionDevisMenuComponent,
    PageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // LoginFormModule,
    HeaderModule
  ],
  providers: [
    ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
