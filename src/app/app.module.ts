import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccueilComponent } from './modules/general/accueil/accueil.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
// import { HomeComponent } from './modules/general/home/home.component';
import { HeaderModule } from './components/header/header.module';
import { MenuGaucheModule } from './components/menu-gauche/menu-gauche.module';
import { MenuDroiteModule } from './components/menu-droite/menu-droite.module';
import { ConfigService } from './services/config/config.service';
import { PageFormComponent } from './components/page-form/page-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AccueilComponent,
    PageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    MenuGaucheModule,
    MenuDroiteModule
  ],
  providers: [
    ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
