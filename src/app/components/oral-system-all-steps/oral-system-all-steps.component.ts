import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

declare var utag: any;
declare var window: any;

@Component({
    selector: 'app-oral-system-all-steps',
    imports: [CommonModule],
    templateUrl: './oral-system-all-steps.component.html',
    styleUrls: ['./oral-system-all-steps.component.scss']
})
export class OralSystemAllStepsComponent {

  public steps: Array<any> = [
    { id: 1, step: 'PASO 1', img: 'assets/img/SistemaBucal/Paso1.png' },
    { id: 2, step: 'PASO 2', img: 'assets/img/SistemaBucal/Paso2.png' },
    { id: 3, step: 'PASO 3', img: 'assets/img/SistemaBucal/Paso3.png' },
    { id: 4, step: 'REFRESCAR', img: 'assets/img/SistemaBucal/Paso4.jpg' },
  ]

  ngOnInit(){
    let utag_data = environment.utagInfo.oralSystemAnimation;
        
    window.utag_data = Object.assign(window.utag_data, utag_data);
    utag.view(window.utag_data);
  }
}
