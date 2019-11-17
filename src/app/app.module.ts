import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccueilComponent } from './modules/general/accueil/accueil.component';

import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
// import { HomeComponent } from './modules/general/home/home.component';
// import { HeaderModule } from './components/header/header.module';
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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
