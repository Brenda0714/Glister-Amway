import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DoctorGlisterService } from 'src/app/services/doctor-glister.service';
import { environment } from 'src/environments/environment';

declare var utag: any;
declare var window: any;

@Component({
    selector: 'app-doctor-glister',
    imports: [CommonModule, RouterModule],
    templateUrl: './doctor-glister.component.html',
    styleUrls: ['./doctor-glister.component.scss']
})
export class DoctorGlisterComponent {

  public backImg1: string = 'assets/img/RecomendadorDrGlister/Fondo.jpg';
  public backImg2: string = 'assets/img/RecomendadorDrGlister/FondoPreguntas.jpg';

  isClass1 = false;

  toggleClass() {
    this.isClass1 = !this.isClass1;
  }

  public questionIndex: number = 0;

  public questions: Array<any> = [
    {
      id: 0, position: '', question: '¡Conoce tu rutina ideal del cuidado bucal!', answer: true, img: 'assets/img/RecomendadorDrGlister/Inicio.jpg',
    },
    {
      id: 1, position: 'PRIMERA', question: '¿Has utilizado aparatos de ortodoncia, implantes u otros dispositivos dentales en el pasado o en la actualidad?', answer: null, img: 'assets/img/RecomendadorDrGlister/Pregunta-1.jpg',
    },
    {
      id: 2, position: 'SEGUNDA', question: '¿Has notado acumulación de placa en alguna zona específica de tu boca?', answer: null, img: 'assets/img/RecomendadorDrGlister/Pregunta-2.jpg',
    },
    {
      id: 3, position: 'TERCERA', question: '¿Experimentas sensibilidad en tus dientes y/o encías al comer, beber o al cepillarlos?', answer: null, img: 'assets/img/RecomendadorDrGlister/Pregunta-3.jpg',
    },
    {
      id: 4, position: 'CUARTA', question: '¿Incluyes el uso de hilo dental en tu rutina diaria de cuidado oral?', answer: null, img: 'assets/img/RecomendadorDrGlister/Pregunta-4.png',
    },
    {
      id: 5, position: 'QUINTA', question: '¿Utilizas enjuague bucal como parte de tu rutina de cuidado oral?', answer: null, img: 'assets/img/RecomendadorDrGlister/Pregunta-5.jpg',
    },
    {
      id: 6, position: 'SEXTA', question: '¿Realizas el cambio de tu cepillo dental cada tres meses?', answer: null, img: 'assets/img/RecomendadorDrGlister/Pregunta-6.jpg',
    },
    {
      id: 7, position: 'SEPTIMA', question: '¿Realizas visitas regulares al dentista para chequeos y limpiezas profesionales?', answer: null, img: 'assets/img/RecomendadorDrGlister/Pregunta-7.jpg',
    },
    {
      id: 8, position: 'OCTAVA', question: '¿Utilizas algún producto adicional en tu rutina de cuidado bucal, como limpiadores de lengua?', answer: null, img: 'assets/img/RecomendadorDrGlister/Pregunta-8.jpg',
    }
  ];

  constructor(private router: Router, private doctorGlisterService: DoctorGlisterService) {}

  ngOnInit() {
    this.doctorGlisterService.setQuestions(this.questions);

    let utag_data = environment.utagInfo.drGlister;
        
    window.utag_data = Object.assign(window.utag_data, utag_data);
    utag.view(window.utag_data);
  }

  changeStep(direction: string){
    if(direction == 'minus'){
      if(this.questionIndex > 0){
        this.questionIndex -= 1;
      }
    }else{
      if(this.questionIndex < 8){
        this.questionIndex += 1;
      }else if(this.questionIndex == 8){
        this.router.navigate(['doctor-glister-tips']);
      }
    }
  }

}
