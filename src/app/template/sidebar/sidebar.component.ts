import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: false
})
export class SidebarComponent {
  @Input() public isSidebarOpen: boolean = false;
  @Output() public closeSidebar = new EventEmitter<any>();

  public isOpenSubMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
      this.isOpenSubMenu = !this.isOpenSubMenu;
  }

  closeSubmenu() {
    this.isOpenSubMenu = false;
  }

  close() {
      this.closeSidebar.emit(false);
  }
}
