import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as bootstrap from 'bootstrap';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';

declare var utag: any;
declare var window: any;

@Component({
    selector: 'app-oral-system-steps',
    imports: [CommonModule, RouterModule],
    templateUrl: './oral-system-steps.component.html',
    styleUrls: ['./oral-system-steps.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class OralSystemStepsComponent {

  public step: number = 0;
  public stepTmp: string | null = '';
  imageUrl = 'assets/img/Flecha.png';


  public steps: Array<any> = [
    {
      id: 1, title: 'PASO 1: CEPILLAR', subtitle: '¿Sabías qué los odontólogos recomiendan cepillarse los dientes durante 2 minutos al menos 2 veces al día?',
      description: "<span class='g-text mb2'>La duración recomendada para cepillarse los dientes es de dos minutos al menos dos veces al día. Sin embargo, muchos estudios han demostrado que la mayoría de las personas no cumplen con este tiempo. El cepillado dental es sumamente importante, ya que, ayuda a prevenir problemas como la caries, a remover la placa y tener unos dientes limpios.</span><span class='g-text mb2'>Realiza el paso 1 de tu rutina de cuidado bucal con el cepillo dental suave multiacción Glister™ con mango flexible (área del cuello) que ayuda a absorber el exceso de presión sobre las encías para una limpieza suave junto con la pasta dental Glister™ que te ayudará a aumentar hasta un 42% en la luminosidad del esmalte dental*.</span>",
      modeOfUse: '<span class="g-text mb2">Aplica la pasta de dientes <b class="green">Glister™</b> a las cerdas del cepillo y mueve suavemente el cepillo en breves trazos, limpiando la superficie interna, externa y superior de los dientes. Cepíllate durante <b class="green">2 minutos</b>, como mínimo <b class="green">dos veces al día.</b></span><span class="g-text mb2">Usando el limpiador en la parte posterior del cabezal del cepillo de dientes, muévelo por toda la superficie de la lengua, de atrás hacia adelante, ejerciendo una presión suave y termina enjuagando con agua.</span>',
      footer: '*Esta no es una pasta dental blanqueadora. El blanqueamiento dental puede suceder tras ejercer una rutina diaria de cepillado según lo recomendado. Por la legislación regulatoria el sello Plant-Based Goodness™ en chile no aplica.',
      img: 'assets/img/SistemaBucal/PastaDeDientesYCepillo.png', icon: 'assets/img/SistemaBucal/Info.jpg', from: 2
    },
    {
      id: 2, title: 'PASO 2: USAR HILO DENTAL', subtitle: '¿Sabías que al solo cepillar tus dientes no alcanzas toda la superficie dental?',
      description: "<span class='g-text mb2'>Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir en nuestra rutina de cuidado bucal el uso del hilo dental para llegar los lugares que el cepillo no alcanza.</span><span class='g-text mb2'>Realiza el paso 2 de tu rutina de cuidado bucal utilizando el Hilo Dental Multiacción Glister™ diseñado con estilo de cinta plana y con una capa de cera de origen natural que ayuda a reducir la placa hasta en un 68%*, resistiendo la trituración.</span>",
      modeOfUse: "<span class='g-text mb2'>Dispensa unos <b class='green'>30 cm</b> de hilo dental y envuélvelo alrededor de los dedos medios. Con el pulgar y los dedos, mueve suavemente entre cada diente hasta justo debajo de la línea de las encías.</span><span class='g-text mb2'>Desliza el <b class='green'>hilo dental</b> contra la superficie de cada diente. Úsalo diariamente después del cepillado.</span>",
      footer: '*Los hilos dentales encerados, como el Hilo Dental Multiacción Glister™, pueden reducir la placa entre los dientes hasta en un 68 %.',
      img: 'assets/img/SistemaBucal/HiloDental2.png', icon: 'assets/img/SistemaBucal/Info.jpg', from: 3
    },
    {
      id: 3, title: 'PASO 3: ENJUAGUAR', subtitle: '¿Sabías que el enjuague bucal ayuda a reducir la placa dental?',
      description: "<span class='g-text mb2'>El Enjuague Bucal Multiacción ayuda a eliminar el *99.9% de las bacterias que pueden causar mal aliento, al mismo tiempo que ayuda a reducir la placa hasta en un **29% más que un enjuague bucal sin CPC.</span><span class='g-text mb2'>Se ha demostrado clínicamente que los enjuagues bucales con CPC ayudan a reducir la placa más que los enjuagues que no lo tienen.</span><span class='g-text mb2'>¿Qué es CPC?</span><span class='g-text mb2'>Es un ingrediente antimicrobiano con poder probado para combatir la placa, estudios demuestran que ayuda a reducir la placa hasta un 29% más que un enjuague bucal sin este gran ingrediente.</span>",
      modeOfUse: "<span class='g-text mb2'>Realiza <b class='green'>4 aplicaciones del producto</b> dentro de la tapa y llena de agua hasta la primera línea o la línea más baja <b class='green'>(20 ml)</b>.</span><span class='g-text mb2'>Enjuaga la boca con el producto durante un período de <b class='green'>30 segundos</b>; realiza este procedimiento dos veces al día, una vez en la mañana y otra en la tarde.</span>",
      footer: '*Después del cepillado con una pasta dental con flúor. **El Enjuague Bucal Multiacción ayuda a eliminar el 99.9% de las bacterias que pueden causar mal aliento y gingivitis. *** Por la legislación regulatoria el sello Plant-Based Goodness™ en Chile no aplica.',
      img: 'assets/img/SistemaBucal/Enjuague2.png', icon: 'assets/img/SistemaBucal/Info.jpg', from: 4
    },
    {
      id: 4, title: 'PASO 4: REFRESCAR', subtitle: '¡Mantén un aliento fresco a donde quiera que vayas!',
      description: "<span class='g-text mb2'>Utiliza el Refrescante bucal en spray Glister™ que te ayudará a eliminar hasta un 99.99%* de las bacterias que causa mal aliento.</span><span class='g-text mb2'>Fórmula que incluye una mezcla mejorada de sabor a menta certificada por Nutrilite™.</span>",
      modeOfUse: "<span class='g-text mb2'>Sosten verticalmente y rocía directamente en la boca.</span>",
      footer: '*El Refrescante Bucal en Spray Glister™ exhibe una fuerte actividad contra las bacterias orales como Streptococcus mutans cuando se utiliza según las instrucciones. Ayuda a eliminar hasta un 99.99% de las bacterias orales generalmente conocidas por causar mal aliento y caries *Por la legislación regulatoria el sello Plant-Based Goodness™ en Chile no aplica.',
      img: 'assets/img/SistemaBucal/Refrescante2.png', icon: 'assets/img/SistemaBucal/Info.jpg', from: 5
    },
  ];

  public modal: any = null;

  constructor(private router: Router,
              private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      let step = params['step'];

      if(step){
        this.step = parseInt(step);
      }

      let utag_data = null;

      if(step && step == 0){
        utag_data = environment.utagInfo.oralSystemStep1;
      }else if(step && step == 1){
        utag_data = environment.utagInfo.oralSystemStep2;
      }else if(step && step == 2){
        utag_data = environment.utagInfo.oralSystemStep3;
      }else if(step && step == 3){
        utag_data = environment.utagInfo.oralSystemStep4;
      }else{
        utag_data = environment.utagInfo.oralSystemStep1;
      }

      window.utag_data = Object.assign(window.utag_data, utag_data);
      utag.view(window.utag_data);
    });
  }

  ngAfterViewInit() {
    this.modal = new bootstrap.Modal(
      document.getElementById('product-detail') as HTMLElement,
      {}
    );
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  openModal() {
    this.modal.show();
  }

  closeModal() {
    this.modal.hide();
  }

  changeStep(direction: string){
    if(direction == 'next' && this.step < 4)
      this.step += 1;
    else if(direction == 'prev' && this.step > 0)
      this.step -= 1;

    this.router.navigate(['oral-system-step', this.step])
  }

  navigateTo(route: Array<any>){
    this.router.navigate(route)
  }
}
