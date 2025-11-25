import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

import * as bootstrap from 'bootstrap';

declare var utag: any;
declare var window: any;

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent {

  public serverRoute: string = environment.server;

  public learnings: Array<any> = [
    {
      id: 1, title: 'Infografías', icon: 'assets/img/Aprende/Hoja.png',
      resources: [
        {
          img: 'assets/img/Aprende/Infografias/Infografia-Gli-3pasos/Infografia-Gli-3pasos_page-0001.jpg', name: '3 PASOS', size: '546 KB', link: 'assets/img/Aprende/Infografias/Infografia-Gli-3pasos/Infografia-Gli-3pasos.pdf'
        },
        {
          img: 'assets/img/Aprende/Infografias/Infografia-Gli-Paso1_Cepillar/Infografia-Gli-Paso1_Cepillar.jpg', name: 'PASO 1: CEPILLAR', size: '36,523 KB', link: 'assets/img/Aprende/Infografias/Infografia-Gli-Paso1_Cepillar/Infografia-Gli-Paso1_Cepillar.pdf'
        },
        {
          img: 'assets/img/Aprende/Infografias/Infografia-Gli-Paso2_Usar hilo dental/Infografia-Gli-Paso2_Usar hilo dental.jpg', name: 'PASO 2: USAR HILO DENTAL', size: '37,281 KB', link: 'assets/img/Aprende/Infografias/Infografia-Gli-Paso2_Usar hilo dental/Infografia-Gli-Paso2_Usar hilo dental.pdf'
        },
        {
          img: 'assets/img/Aprende/Infografias/Infografia-Gli-Paso3-Enjuaguar/Infografia-Gli-Paso3-Enjuaguar.jpg', name: 'PASO 3: ENJUAGUAR', size: '3,607 KB', link: 'assets/img/Aprende/Infografias/Infografia-Gli-Paso3-Enjuaguar/Infografia-Gli-Paso3-Enjuaguar.pdf'
        },
      ]
    },
    {
      id: 2, title: 'Guia de producto y preguntas frecuentes', icon: 'assets/img/Aprende/Hoja.png',
      resources: [
        {
          img: 'assets/img/Aprende/Guia de productos/Pasta-dental---Hoja-de-producto/Pasta dental - Hoja de producto_page-0001.jpg', name: 'PASTA DENTAL - HOJA DE PRODUCTO', size: '2,180 KB', link: 'assets/img/Aprende/Guia de productos/Pasta-dental---Hoja-de-producto/Pasta dental - Hoja de producto.pdf'
        },
        {
          img: 'assets/img/Aprende/Guia de productos/Glister-Cepillo-Dental---Hoja-de-producto/Glister Cepillo Dental - Hoja de producto_page-0001.jpg', name: 'GLISTER CEPILLO DENTAL - HOJA DE PRODUCTO', size: '1,256 KB', link: 'assets/img/Aprende/Guia de productos/Glister-Cepillo-Dental---Hoja-de-producto/Glister Cepillo Dental - Hoja de producto.pdf'
        },
        {
          img: 'assets/img/Aprende/Guia de productos/Glister-Hilo-Dental---Hoja-de-producto/Glister Hilo Dental - Hoja de producto_page-0001.jpg', name: 'GLISTER HILO DENTAL - HOJA DE PRODUCTO', size: '1,560 KB', link: 'assets/img/Aprende/Guia de productos/Glister-Hilo-Dental---Hoja-de-producto/Glister Hilo Dental - Hoja de producto.pdf'
          
        },
        {
          img: 'assets/img/Aprende/Guia de productos/Glister-Enjuague-Bucal---Hoja-de-producto/Glister Enjuague Bucal - Hoja de producto_page-0001.jpg', name: 'GLISTER ENJUAGUE BUCAL - HOJA DE PRODUCTO', size: '1,284 KB', link: 'assets/img/Aprende/Guia de productos/Glister-Enjuague-Bucal---Hoja-de-producto/Glister Enjuague Bucal - Hoja de producto.pdf'
        },
        {
          img: 'assets/img/Aprende/Guia de productos/Glister-Refrescante-Bucal---Hoja-de-producto/Glister Refrescante Bucal - Hoja de producto_page-0001.jpg', name: 'GLISTER REFRESCANTE BUCAL - HOJA DE PRODUCTO', size: '1,230 KB', link: 'assets/img/Aprende/Guia de productos/Glister-Refrescante-Bucal---Hoja-de-producto/Glister Refrescante Bucal - Hoja de producto.pdf'
        },
      ]
    },
    {
      id: 3, title: 'Video sistema 3 pasos', icon: 'assets/img/Aprende/Play.png', 
      resources: [
        {
          img: 'assets/img/Aprende/SistemaTresPasos/Sistema3pasos.jpg', name: 'AMWAY GILSTER - SISTEMA 3 PASOS', size: '168,108 KB', link: 'assets/img/Aprende/SistemaTresPasos/Sistema3pasos.mp4'
        },
      ]
    },
    {
      id: 4, title: 'Video pasta dental', icon: 'assets/img/Aprende/Play.png',
      resources: [
        {
          img: 'assets/img/Aprende/PastaDental/PastaDental.jpg', name: 'AMWAY GLISTER - VIDEO PASTA DENTAL', size: '158,768 KB', link: 'assets/img/Aprende/PastaDental/PastaDental.mp4'
        },
      ]
    },
    {
      id: 5, title: 'Videos Dr. Glister', icon: 'assets/img/Aprende/Play.png', 
      resources: [
        {
          img: 'assets/img/Aprende/DrGlister/DrGlisterTodoestaconectado.jpg', name: 'DR GLISTER - TODO ESTÁ CONECTADO', size: '99,041 KB', link: 'assets/img/Aprende/DrGlister/DrGlisterTodoestaconectado.mp4'
        },
        {
          img: 'assets/img/Aprende/DrGlister/DrGlisterMicrobioma.jpg', name: 'DR GLISTER - MICROBIOMA', size: '67,079 KB', link: 'assets/img/Aprende/DrGlister/DrGlisterMicrobioma.mp4'
        },
        {
          img: 'assets/img/Aprende/DrGlister/DrGlisterTresPasos.jpg', name: 'DR GLISTER 3 PASOS', size: '109,092 KB', link: 'assets/img/Aprende/DrGlister/DrGlisterTresPasos.mp4'
        }
      ]
    },
  ]

  ngOnInit(){
    let utag_data = environment.utagInfo.learn;
        
    window.utag_data = Object.assign(window.utag_data, utag_data);
    utag.view(window.utag_data);
  }

  collapse(element: string){
    let collapse = document.getElementById(element) as HTMLElement;
    let bsCollapse = new bootstrap.Collapse(collapse);

    setTimeout(() => {
      let isOpen = collapse.getAttribute('is-open');

      if(isOpen) {
        collapse.removeAttribute('is-open');
        //collapse.classList.remove('show');
        bsCollapse.hide();
      }else{
        collapse.setAttribute('is-open', 'true');
      }
    }, 500);
  }

  donwload(link: string){
    window.open(this.serverRoute + link, '_blank');
  }
}
