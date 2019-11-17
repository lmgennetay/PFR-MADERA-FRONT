import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuDroiteRoutingModule } from './menu-droite-routing.module';
import { MenuDroiteComponent } from './menu-droite.component';


@NgModule({
  declarations: [
    MenuDroiteComponent
  ],
  imports: [
    CommonModule,
    MenuDroiteRoutingModule
  ],
  exports: [
    MenuDroiteComponent
  ],
})
export class MenuDroiteModule { }
