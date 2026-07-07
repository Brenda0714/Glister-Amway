import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import { Router, RouterModule } from '@angular/router';

import * as bootstrap from 'bootstrap';
import { environment } from 'src/environments/environment';

declare var utag: any;
declare var window: any;

@Component({
    selector: 'app-oral-system',
    imports: [CommonModule, RouterModule],
    templateUrl: './oral-system.component.html',
    styleUrls: ['./oral-system.component.scss']
})
export class OralSystemComponent {

  public swiper: any = null;
  public modal: any = null;

  public autoplay: boolean = false;
  public rotate: boolean = false;

  public videos: Array<any> = [
    {
      id: 1, rotate: false, img: 'assets/img/SistemaBucal/1.png',
      rounded: false,
      video: 'assets/img/SistemaBucal/Video1.mp4',
      route: ['oral-system-step', 0],
      description: 'Limpia y ayuda a eliminar la placa, dejando los dientes suaves y brillantes.'
    },
    {
      id: 2, rotate: false, img: 'assets/img/SistemaBucal/2.png',
      rounded: false,
      video: 'assets/img/SistemaBucal/Video2.mp4',
      route: ['oral-system-step', 1],
      description: 'Elimina la placa de las áreas dificiles de alcanzar, mientras estimula suavemente las encias.'
    },
    {
      id: 3, rotate: false, img: 'assets/img/SistemaBucal/3.png',
      rounded: false,
      video: 'assets/img/SistemaBucal/Video3.mp4',
      route: ['oral-system-step', 2],
      description: 'Ayuda a refrescar el aliento y limpiar entre los dientes.'
    },
    {
      id: 4, rotate: false, img: 'assets/img/SistemaBucal/4.jpg',
      rounded: true,
      video: 'assets/img/SistemaBucal/Video4.mp4',
      route: ['oral-system-step', 3],
      description: 'Aliento fresco en todo momento.'
    }
  ]

  public products: Array<any> = [
    {
      id: 1, img: 'assets/img/SistemaBucal/Pasta-de-Dientes.jpg',
      buy:'2',
      name: 'Pasta de Dientes Multiacción con Fluoruro', description: 'Ayuda a eliminar la placa, limpia eficazmente y ayuda a disminuir las manchas por consumo de café, té y tabaco.'
    },
    {
      id: 2, img: 'assets/img/SistemaBucal/Cepillo.jpg',
      buy:'2',
      name: 'Cepillo Dental Suave Multiacción', description: 'Herramienta de acción múltiple con cerdas suaves ayuda a eliminar la placa, limpiar los dientes, la lengua y masajear las encías.'
    },
    {
      id: 3, img: 'assets/img/SistemaBucal/Hilo-Dental.jpg',
      buy:'3',
      name: 'Hilo Dental Multiacción', description: 'Hilo dental de acción múltiple elimina la placa de las superficies de los dientes, que el cepillado no puede alcanzar, mientras estimula suavemente las encías.'
    },
    {
      id: 4, img: 'assets/img/SistemaBucal/Enjuague.jpg',
      buy:'4',
      name: 'Enjuague Bucal Multiacción', description: 'Concentrado de acción múltiple que ayuda a reducir la placa, a limpiar entre los dientes y refrescar el aliento.'
    },
    {
      id: 5, img: 'assets/img/SistemaBucal/Refrescante.jpg',
      buy:'5',
      name: 'Refrescante bucal en Spray', description: 'Obtén un aliento refrescante, instantáneo y duradero con cada rociado de este spray esencial para llevar a cualquier parte por su práctico tamaño.'
    }
  ];

  public videoSelected: string = '';
  public flipCardHeigth: Number = 300;

  constructor(private router: Router){}

  ngOnInit(){
    let utag_data = environment.utagInfo.oralSystem;

    window.utag_data = Object.assign(window.utag_data, utag_data);

    utag.view(window.utag_data);
  }

  ngAfterViewInit(){
    var video1 = document.getElementById('video_1') as HTMLElement;

    setTimeout(() => {
      this.flipCardHeigth = video1.clientWidth;
    }, 500);

    this.swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      loop: true,
      autoplay: {
        disableOnInteraction: false,
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      /*navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }*/
    });

    this.modal = new bootstrap.Modal(
      document.getElementById('video-detail') as HTMLElement,
      {}
    );
  }

  play(item: number) {
    let video = document.getElementById('video_' + item) as HTMLVideoElement;
    if (video) {
      video.muted = true;
      video.play();
    }
  }

  stop(item: number) {
    let video = document.getElementById('video_' + item) as HTMLVideoElement;
    if (video) {
      video.muted = true;
      video.pause();
      video.currentTime = 0;
      video.load();
    }
  }

  rotateCard(item: number){
    this.videos[item - 1].rotate = !this.videos[item - 1].rotate;
  }

  openModal(video: string){
    this.videoSelected = video;

    this.modal.show();
  }

  closeModal() {
    this.videoSelected = '';

    this.modal.hide();
  }

  navigateTo(route: Array<any>){
    this.router.navigate(route);
  }

}
