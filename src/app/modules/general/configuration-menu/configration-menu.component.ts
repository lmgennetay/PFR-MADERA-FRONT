import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gestion-client-menu',
  templateUrl: './configuration-menu.component.html',
  styleUrls: ['./configuration-menu.component.css']
})
export class ConfigrationMenuComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  backClicked() {
    this.location.back();
  }
}
