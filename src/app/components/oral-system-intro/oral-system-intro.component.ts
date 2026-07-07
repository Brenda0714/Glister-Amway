import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

declare var utag: any;
declare var window: any;

@Component({
    selector: 'app-oral-system-intro',
    imports: [CommonModule],
    templateUrl: './oral-system-intro.component.html',
    styleUrls: ['./oral-system-intro.component.scss']
})
export class OralSystemIntroComponent {
  
  public hasToothPaste: boolean = false;

  public minMax: any = {
    left: 0, right: 0, top: 0, bottom: 0
  } 

  constructor(private router: Router){}

  ngOnInit(){
    let utag_data = environment.utagInfo.oralSystemAnimation;
        
    window.utag_data = Object.assign(window.utag_data, utag_data);
    utag.view(window.utag_data);
  }
  
  ngAfterViewInit(): void {
    /*let dragable = document.getElementById("dragable") as HTMLElement;
    let dragable2 = document.getElementById("dragable2") as HTMLElement;
    let dragzone = document.getElementById("dragzone") as HTMLElement;
    
    this.minMax.right = dragzone.clientWidth;
    this.minMax.bottom = dragzone.clientHeight;

    this.dragElement(dragable, dragzone);
    this.dragElement(dragable2, dragzone);*/
    (document.getElementById('animation') as HTMLElement).addEventListener('ended', () => {
      setTimeout(() => {
        this.navigateTo(['oral-system-step', 0]);
      }, 500);
    }, false);
  }

  reloadElements(){
    let dragable = document.getElementById("dragable") as HTMLElement;
    let dragable2 = document.getElementById("dragable2") as HTMLElement;

    dragable.style.left = '10%';
    dragable.style.top = '10%';

    let positionX = this.minMax.right - dragable2.clientWidth;
    let positionY = this.minMax.bottom - dragable2.clientHeight;

    dragable2.style.left = 'calc(' + positionX + 'px - 10%)';
    dragable2.style.top =  'calc(' + positionY + 'px - 10%)';

    this.hasToothPaste = false;
  }

  dragElement(element: any, dragzone: any) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    const dragMouseUp = () => {
      document.onmouseup = null;
      document.onmousemove = null;

      //element.classList.remove("drag");
    };

    const dragMouseMove = (event: any) => {
      event.preventDefault();

      pos1 = pos3 - event.clientX;
      pos2 = pos4 - event.clientY;
      pos3 = event.clientX;
      pos4 = event.clientY;

      let positionY = element.offsetTop - pos2;
      let positionX = element.offsetLeft - pos1;
      let height = element.clientHeight;
      let width = element.clientWidth;
      let newBottom = this.minMax.bottom - height;  
      let newRight = this.minMax.right - width;  

      if((positionY > this.minMax.top && positionY < newBottom)){
        element.style.top = `${element.offsetTop - pos2}px`;

        this.validateCollapseDivs();
      }
      if((positionX > this.minMax.left && positionX < newRight)){
        element.style.left = `${element.offsetLeft - pos1}px`;

        this.validateCollapseDivs();
      }
    };

    const dragMouseDown = (event: any) => {
      event.preventDefault();

      pos3 = event.clientX;
      pos4 = event.clientY;

      //element.classList.add("drag");

      document.onmouseup = dragMouseUp;
      document.onmousemove = dragMouseMove;
    };

    element.onmousedown = dragMouseDown;
  };

  validateCollapseDivs() {
    let div1 = (document.getElementById('dragable') as HTMLElement).getBoundingClientRect();
    //let div1Top = div1.top;
    //let div1Left = div1.left;
    let div1Right = div1.right;
    let div1Bottom = div1.bottom;

    let div2 = (document.getElementById('dragable2') as HTMLElement).getBoundingClientRect();
    let div2Top = div2.top;
    let div2Left = div2.left;
    //let div2Right = div2.right;
    //let div2Bottom = div2.bottom;

    let horizontalMatch = false;
    let verticalMatch = false;

    let width = div1.width / 2;
    let height = div1.height;

    if ((div1Bottom >= div2Top) && (div1Bottom <= (div2Top + 20))) {
      verticalMatch = true;
    } else {
      verticalMatch = false;
    }

    if ((div1Right >= (div2Left + width)) && (div1Right <= (div2Left + (width + 60)))) {
      horizontalMatch = true;
    } else {
      horizontalMatch = false;
    }

    /*if ((div2Top > div1Top && div2Top < div1Bottom) || (div2Bottom > div1Top && div2Bottom < div1Bottom)) {
      verticalMatch = true;
    } else {
      verticalMatch = false;
    }

    if ((div2Right > div1Left && div2Right < div1Right) || (div2Left < div1Right && div2Left > div1Left)) {
      horizontalMatch = true;
    } else {
      horizontalMatch = false;
    }*/

    if (horizontalMatch && verticalMatch) {
      this.hasToothPaste = true;
      setTimeout(() => {
        this.navigateTo(['oral-system-step', 0]);
      }, 1500);
    }else{
      //this.hasToothPaste = false;
    }
  }

  navigateTo(route: Array<any>) {
    this.router.navigate(route);
  }
}
