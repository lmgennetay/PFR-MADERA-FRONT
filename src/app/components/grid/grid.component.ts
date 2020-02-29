import {Component, Injector, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ConfigService } from '../../services/config/config.service';
import { ItemsService } from '../../services/items/items.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  @Input() items: any;
  @Input() columns: any;
  @Input() link: any;
  @Input() filter: any;
  @Input() itemsCount: any;
  @Input() pagination: any;
  route: any;
  api: any;
  url: any;
  startpoint: any;
  urlsource: any;
  urlSelect: any;
  endpoint: any;
  select: any;
  icon: any;
  item: any = {};
  public itemsService: ItemsService;
  public configService: ConfigService;

  constructor(public router: Router, injector: Injector) {
    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.configService = injector.get(ConfigService);
    this.itemsService = injector.get(ItemsService);
    this.api = this.configService.config.api;
    this.url = this.configService.config.url;
    this.urlSelect = this.configService.config.url + this.select;
  }

  initialize() {
    this.api = this.configService.config.api;
    this.url = this.configService.config.url + this.endpoint;
    this.urlSelect = this.configService.config.url + this.select;
  }

  selectItem(id: any) {
    this.router.navigate(['/' + this.link, id]);
  }

  onDelete(url: any, endpoint: any, id: any, redirect: any) {
    alert('grid ' + endpoint);
    url = url + endpoint ;
    if ((id !== undefined) && (id != null)) {
      this.item.connection = {loginId : localStorage.id, loginToken : localStorage.token};
      this.itemsService.deleteItem(url, id)
        .subscribe(data => { console.log(data);
        //  this.router.navigateByUrl('/modules/devis/1');
      });
    }
  }
}
