import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public openMenuGauche = false;
  public openMenuDroite = false;
  title = 'madera-front';
  handleClickGauche(event) {
    if (this.openMenuGauche == false) {
      this.openMenuGauche = true;
    } else {
      this.openMenuGauche = false;
    }
  }
  handleClickDroite(event) {
    if (this.openMenuDroite == false) {
      this.openMenuDroite = true;
    } else {
      this.openMenuDroite = false;
    }
  }
}
