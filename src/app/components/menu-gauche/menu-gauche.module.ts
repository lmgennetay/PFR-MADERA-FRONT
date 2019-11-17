import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuGaucheRoutingModule } from './menu-gauche-routing.module';
import { MenuGaucheComponent } from './menu-gauche.component';


@NgModule({
  declarations: [
    MenuGaucheComponent
  ],
  imports: [
    CommonModule,
    MenuGaucheRoutingModule
  ],
  exports: [
    MenuGaucheComponent
  ],
})
export class MenuGaucheModule { }
