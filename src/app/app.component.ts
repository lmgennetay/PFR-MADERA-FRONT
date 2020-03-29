import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'madera-front';

  ngOnInit(){
    if ( localStorage.date === undefined || (Date.now() - new Date(localStorage.date).getTime()) >= 86400000 ) {
      $('#nav').hide();
      // console.log('deco ');
      // console.log(localStorage);
    } else {
      $('#nav').show();
      // console.log('co ');
      // console.log(localStorage);
    }
  }
}

