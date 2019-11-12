import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
