import {Component, Injector} from '@angular/core';
import { Validators } from '@angular/forms';

import {PageFormComponent} from '../../../components/page-form/page-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './logout-form.component.html',
  styleUrls: ['./logout-form.component.css']
})

export class LogoutFormComponent extends PageFormComponent {
  constructor(injector: Injector) {
    super(injector);
  }

  initialize() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
