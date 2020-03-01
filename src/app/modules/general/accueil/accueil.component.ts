import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  public router: Router;

  constructor(
      private meta: Meta,
      private titleService: Title) {

  }

  ngOnInit() {
    if ( localStorage.user_id !== null && localStorage.user_id !== undefined && localStorage.token !== null && localStorage.token === undefined ) {
      this.router.navigate(['']);
    }
  }
}
