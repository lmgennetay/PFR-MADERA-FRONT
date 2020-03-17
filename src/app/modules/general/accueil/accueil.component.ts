import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { environment } from '../../../../environments/environment';
import {Location} from '@angular/common';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;

  constructor(
      private meta: Meta,
      private titleService: Title,
      public router: Router) {
  }

  ngOnInit() {
    if ( localStorage.user_id === undefined && localStorage.token === undefined ) {
      this.router.navigateByUrl('/');
    }
    else {
      if( localStorage.date === undefined || (Date.now() - new Date(localStorage.date).getTime()) >= 86400000 ) {
        $('#nav').attr('hidden');
        console.log(localStorage);
      }
      else {
        $('#nav').removeAttr('hidden');
        console.log(localStorage);
      }
    }
  }
}
