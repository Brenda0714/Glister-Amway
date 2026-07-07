import { Component } from '@angular/core';
//import { environment } from '../../../environments/environment';
import * as AOS from 'aos'

declare var window: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  public isSidebarOpen: boolean = false;
  public isAtTop = false;

  constructor(){}

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh);
    let hostname = window.location.hostname;
    let hostSplit = hostname.split('.');
    let code = hostSplit[hostSplit.length - 1];

    window.utag_data.site_webProperty_mod = hostname + ' | ecommerce';
    window.utag_data.site_country = code;
    window.utag_data.site_currencyCode = this.getCurrencyCode(code);
  }

  getCurrencyCode(code: string) {
    if (code == 'mx') return 'mxn';
    else if (code == 'gt') return 'gtq';
    else if (code == 'sv') return 'svc';
    else if (code == 'hn') return 'hnl';
    else if (code == 'pa') return 'pab';
    else if (code == 'cr') return 'crc';
    else if (code == 'ar') return 'ars';
    else if (code == 'cl') return 'clp';
    else if (code == 'uy') return 'uyu';
    else if (code == 'co') return 'cop';
    else if (code == 've') return 'vef';
    else return '';
  }

  openSidebar() {
    this.isSidebarOpen = true;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
