import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as bootstrap from 'bootstrap';
import { environment } from '../../../environments/environment';

declare var utag: any;
declare var window: any;

@Component({
    selector: 'app-traceability',
    imports: [CommonModule],
    templateUrl: './traceability.component.html',
    styleUrls: ['./traceability.component.scss']
})
export class TraceabilityComponent {


  public process: Array<any> = [
    { id: 1, title: '1. CULTIVO', img: 'assets/img/Trazabilidad/01.jpg', video: 'assets/img/Trazabilidad/01_Granja.mp4' },
    { id: 2, title: '2. RECEPCIÓN', img: 'assets/img/Trazabilidad/02.jpg', video: 'assets/img/Trazabilidad/02_Recepcion.mp4' },
    { id: 3, title: '3. PRUEBAS DE LABORATORIO', img: 'assets/img/Trazabilidad/03.jpg', video: 'assets/img/Trazabilidad/03_Laboratorios.mp4' },
    { id: 4, title: '4. ESCALAMIENTO', img: 'assets/img/Trazabilidad/04.jpg', video: 'assets/img/Trazabilidad/04_Escalamiento.mp4' },
    { id: 5, title: '5. FABRICACIÓN: MEZCLADO', img: 'assets/img/Trazabilidad/05.jpg', video: 'assets/img/Trazabilidad/05_FabricacionMezclado.mp4' },
    { id: 6, title: '6. MICROBIOLOGÍA', img: 'assets/img/Trazabilidad/06.jpg', video: 'assets/img/Trazabilidad/06_LaboratoriosMicrobiologia.mp4' },
    { id: 7, title: '7. ENVASADO', img: 'assets/img/Trazabilidad/07.jpg', video: 'assets/img/Trazabilidad/07_CienciaEnvasado.mp4' },
    { id: 8, title: '8. FABRICACIÓN: LLENADO', img: 'assets/img/Trazabilidad/08.jpg', video: 'assets/img/Trazabilidad/08_FabricacionLlenado.mp4' },
    { id: 9, title: '9. DISTRIBUCIÓN', img: 'assets/img/Trazabilidad/09.jpg', video: 'assets/img/Trazabilidad/09_Distribucion.mp4' }
  ];

  public videoSelected: string = '';
  public modal: any = null;

  ngOnInnit(){
    let utag_data = environment.utagInfo.traceability;

    window.utag_data = Object.assign(window.utag_data, utag_data);
    utag.view(window.utag_data);

  }

  ngAfterViewInit() {
    this.modal = new bootstrap.Modal(
      document.getElementById('video-detail') as HTMLElement,
      {}
    );
  }

  openModal(video: string) {
    this.videoSelected = video;

    this.modal.show();
  }

  closeModal() {
    this.videoSelected = '';

    this.modal.hide();
  }
}
