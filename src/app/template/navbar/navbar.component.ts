import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import * as bootstrap from 'bootstrap';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
})
export class NavbarComponent {

  @Output() public openSidebar = new EventEmitter<any>();
  @Input() public isSidebarOpen: boolean = false;

  public oralSystemDropdown: any = null;

  //public ingredientsDropdown: any = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
      let dropdownEl = document.getElementById('oralSystemDropdown') as HTMLElement; 
      this.oralSystemDropdown = new bootstrap.Dropdown(dropdownEl);

      //let dropdownEl2 = document.getElementById('ingredientsDropdown') as HTMLElement; 
      //this.ingredientsDropdown = new bootstrap.Dropdown(dropdownEl2);
  }

  toggle(){
      //this.isOpen = !this.isOpen;
      this.openSidebar.next(this.isSidebarOpen);
  }

  openSubMenu(){
      this.oralSystemDropdown.show();
  }

  closeSubMenu(){
      this.oralSystemDropdown.hide();
  }

  navigateTo(route: Array<string>){
    this.router.navigate(route);
  }

  /*openSubMenu2(){
      this.ingredientsDropdown.show();
  }

  closeSubMenu2(){
      this.ingredientsDropdown.hide();
  }*/
}
