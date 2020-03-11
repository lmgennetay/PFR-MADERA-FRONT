import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
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
