import { CommonModule } from '@angular/common';
import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorGlisterService } from 'src/app/services/doctor-glister.service';
import { environment } from 'src/environments/environment';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

declare var utag: any;
declare var window: any;

@Component({
    selector: 'app-doctor-glister-tips',
    imports: [CommonModule],
    templateUrl: './doctor-glister-tips.component.html',
    styleUrls: ['./doctor-glister-tips.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DoctorGlisterTipsComponent implements OnInit {
  public swiper: any = null;


  public tipmatch: string='';
  public tipmatchImg: string='';

  public products: Array<any> = [
    { id: 1, name: 'PASO 1: CEPILLAR', img: 'assets/img/RecomendadorDrGlister/PastaDeDientesYCepillo.png' },
    { id: 2, name: 'PASO 2: USAR HILO DENTAL', img: 'assets/img/RecomendadorDrGlister/HiloDental.png' },
    { id: 3, name: 'PASO 3: ENJUAGAR', img: 'assets/img/RecomendadorDrGlister/Enjuague.png' },
    { id: 4, name: 'PASO 4: REFRESCAR', img:'assets/img/RecomendadorDrGlister/Refrescante.png' }
  ];
/*   <span class="g-text mb2 text-center"><span class="green">hilo dental </span></span>', */

/*
<span class="green"><span class="green">cepillo dental suave multiacción Glister™</span></span>
<span class="green">pasta de dientes multiacción con fluoruro Glister™</span>
<span class="green"><span class="green">hilo dental multiacción Glister™</span></span>
<span class="green"><span class="green">enjuague bucal multiacción Glister™</span></span>



*/
  public tips: Array<any> = [
    { id: 1, answers: [true, true, true,true,true,true,true,true,true],
     tip:` <span class="g-text mb2 text-center">
     Si experimentas sensibilidad dental y acumulación de placa al cepillarte, puedes   considerar usar un cepillo de cerdas suaves para garantizar una limpieza eficaz sin dañar los dientes y las encías cómo el <span class="green">cepillo dental suave multiacción Glister™</span> con mango flexible (área del cuello) que ayuda a absorber el exceso de presión sobre las encías para una limpieza suave junto con  la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que  te  ayudará a aumentar hasta un  42% en la luminosidad del esmalte dental* realizando movimientos suaves y circulares.
    <br><br>
     No dejes de utilizar hilo dental y enjuague bucal en tu rutina. Te recomendamos probar el <span class="green">hilo dental multiacción Glister™</span>, que por su forma plana se desliza fácilmente entre los dientes para una acción de limpieza segura y efectiva. Asimismo, el <span class="green">enjuague bucal multiacción Glister™</span>, formulado sin alcohol, ayuda a eliminar las bacterias que pueden causar mal aliento y gingivitis.
     <br><br>
     Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
  </span>`,

     img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
     'assets/img/RecomendadorDrGlister/Cepillo.png',
    'assets/img/RecomendadorDrGlister/HiloDental.png',
    'assets/img/RecomendadorDrGlister/Enjuague.png']},


    { id: 2, answers: [true, true, true,true,true,true,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Si experimentas sensibilidad dental y acumulación de placa al cepillarte, dedica más tiempo y cuidado al cepillado. Puedes considerar usar un cepillo de cerdas suaves para garantizar una limpieza eficaz sin dañar los dientes y las encías, como el <span class="green">cepillo dental suave multiacción Glister™</span>. Este cepillo cuenta con un limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Recuerda cambiarlo cada tres meses o antes si las cerdas están muy desgastadas. Utilízalo junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que brinda hasta un 75% más de eficacia para pulir el esmalte. Realiza movimientos suaves y circulares.
    <br><br>
    No dejes de utilizar hilo dental y enjuague bucal en tu rutina. Te recomendamos probar el <span class="green">hilo dental multiacción Glister™</span>, que está recubierto con una cera de origen natural que ayuda a reducir la placa interproximal (entre los dientes) hasta en un 68%. Asimismo, el <span class="green">enjuague bucal multiacción Glister™</span>, formulado sin alcohol, ayuda a eliminar el 99,9% de las bacterias que causan el mal aliento.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal. Es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 3, answers: [true, true, true,true,true,true,true,false,true],
    tip:` <span class="g-text mb2 text-center">

    Programa visitas regulares al dentista para la prevención y tratamiento de problemas bucales en etapas tempranas, antes de que se conviertan en afecciones más graves. Si presentas sensibilidad y acumulación de placa en una zona específica, dedica más tiempo y cuidado al cepillado. Puedes probar usando el <span class="green">cepillo dental suave multiacción Glister™</span>, que ayuda a eliminar la placa hasta en un 84%. Combínalo con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> para aumentar hasta un 42% la luminosidad del esmalte dental.
    <br><br>
    No dejes de utilizar hilo dental y enjuague bucal, ya que son tus aliados para eliminar la placa y los restos de alimentos entre los dientes, así como para mantener el equilibrio del microbioma oral. Te recomendamos probar el <span class="green">hilo dental multiacción Glister™</span> con forma plana, que se desliza fácilmente incluso entre dientes muy separados. Además, el enjuague bucal Glister™, con CPC, ayuda a reducir la acumulación de placa en un 29% más que un enjuague bucal sin CPC.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal. Es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 4, answers: [true, true, true,true,true,true,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Sigue las recomendaciones del ortodoncista para el cuidado bucal con aparatos dentales. Dedica al menos 2 minutos al cepillado con movimientos suaves y circulares para reducir la sensibilidad y placa en áreas específicas. Considera el uso de cepillos de cerdas suaves como el <span class="green">cepillo dental suave multiacción Glister™</span>, que elimina la placa hasta en un 84%. Combínalo con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> para aumentar hasta un 42% la luminosidad del esmalte dental.
    <br><br>
    Prueba utilizando un hilo dental con forma plana, como el hilo dental multiacción Glister™, que se desliza fácilmente en espacios reducidos. También, utiliza enjuagues bucales con CPC, como el enjuague multiacción Glister™ con CPC, que reduce la acumulación de placa en un 29% más que un enjuague bucal sin CPC.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal. Es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 5, answers: [true, true, true,true,true,true,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Si experimentas sensibilidad dental y acumulación de placa al cepillarte, puedes   considerar usar un cepillo de cerdas suaves para garantizar una limpieza eficaz sin dañar los dientes y las encías cómo el <span class="green">cepillo dental suave multiacción Glister™</span> con mango flexible (área del cuello) que ayuda a absorber el exceso de presión sobre las encías para una limpieza suave junto con  la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que  te  ayudará a aumentar hasta un  42%  la luminosidad del esmalte dental.
    <br><br>
    El uso prolongado de un cepillo desgastado puede afectar la eficacia de limpieza y acumular bacterias en las cerdas. Recuerda reemplazar tu cepillo dental cada tres meses o cuando las cerdas estén desgastadas. No dejes de utilizar hilo dental y enjuague bucal en tu rutina. Te recomendamos probar el <span class="green">hilo dental multiacción Glister™</span>, que por su forma plana se desliza fácilmente entre los dientes para una acción de limpieza segura y efectiva. Asimismo, el <span class="green">enjuague bucal multiacción Glister™</span>, formulado sin alcohol, ayuda a eliminar las bacterias que pueden causar mal aliento y gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 6, answers: [true, true, true,true,true,true,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Aunque ya utilices hilo dental, te recomendamos probar uno encerado, como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 7, answers: [true, true, true,true,true,true,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Tu sonrisa merece lo mejor, especialmente si has utilizado aparatos de ortodoncia. Programa visitas regulares al dentista para detectar problemas temprano, y no olvides que, para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Presta atención especial a la limpieza de tus dientes y no ignores zonas problemáticas. Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> con sílice, que limpia y ayuda a eliminar las manchas, junto con el <span class="green">cepillo dental suave multiacción Glister™</span> con cabeza cónica diseñada para alcanzar los dientes posteriores.
    <br><br>
    Si notas la acumulación de placa en algunas zonas de tu boca y utilizas hilo dental, recuerda usar la técnica adecuada para obtener resultados óptimos. Te recomendamos nuestro <span class="green">hilo dental multiacción Glister™</span>, que debido a su forma plana, se desliza fácilmente entre los dientes, ayudando a reducir hasta un 68% la placa interproximal.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 8, answers: [true, true, true,true,true,true,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Si experimentas sensibilidad en tus dientes o encías, te recomendamos optar por un cepillo de cerdas suaves para reducir la irritación, como el <span class="green">cepillo dental suave multiacción Glister™</span> con mango flexible, que ayuda a absorber el exceso de presión sobre las encías.
    <br><br>
    En caso de percibir acumulación de placa, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 9, answers: [true, true, true,true,true,false,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Si notas acumulación de placa en una zona específica, es importante dedicar tiempo y cuidado extra. Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Si experimentas sensibilidad en tus dientes o encías, te recomendamos optar por un cepillo de cerdas suaves para reducir la irritación. El <span class="green">cepillo dental suave multiacción Glister™</span> con mango flexible es una excelente opción, ya que ayuda a absorber el exceso de presión sobre las encías.
    <br><br>
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Programe visitas cada seis meses o según las recomendaciones de tu dentista para mantener una buena higiene bucal.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 10, answers: [true, true, true,true,true,false,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Si notas acumulación de placa en una zona específica, es importante dedicar tiempo y cuidado extra. Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, sin alcohol y con CPC, un ingrediente que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29 % más que un enjuague bucal sin CPC* después del cepillado con una pasta dental con fluoruro.
    <br><br>
    Puedes usarlo después de cepillarte con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a la remineralización del esmalte de los dientes, depositando minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',

   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 11, answers: [true, true, true,true,true,false,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Si notas acumulación de placa en una zona específica, es importante dedicar tiempo y cuidado extra. Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, sin alcohol y con CPC, un ingrediente que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29 % más que un enjuague bucal sin CPC* después del cepillado con una pasta dental con fluoruro como la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>
    <br><br>
    Si experimentas sensibilidad en tus dientes o encías, te recomendamos optar por un cepillo de cerdas suaves para reducir la irritación. El <span class="green">cepillo dental suave multiacción Glister™</span> con mango flexible es una excelente opción, ya que ayuda a absorber el exceso de presión sobre las encías.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',

   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 12, answers: [true, true, true,true,true,false,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Programe visitas cada seis meses o según las recomendaciones de tu dentista para mantener una buena higiene bucal.
    <br><br>
    En caso de percibir acumulación de placa, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 13, answers: [true, true, true,true,true,false,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias. Si experimentas sensibilidad en tus dientes o encías, te recomendamos optar por un cepillo de cerdas suaves para reducir la irritación.
    <br><br>
    El <span class="green">cepillo dental suave multiacción Glister™</span> con mango flexible es una excelente opción, ya que ayuda a absorber el exceso de presión sobre las encías al mismo tiempo que ayuda a eliminar la placa de las superficies esmaltadas hasta en un 86%.
    <br><br>
    En caso de percibir acumulación de placa, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 14, answers: [true, true, true,true,true,false,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Aunque no utilices producto adicionales, como limpiadores de lengua te recomendamos el <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal ayudando a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    En caso de percibir acumulación de placa, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 15, answers: [true, true, true,true,true,false,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 16, answers: [true, true, true,true,true,false,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Programa visitas regulares al dentista para detectar problemas temprano y no olvides que, para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Si experimentas sensibilidad en tus dientes o encías, te recomendamos optar por un cepillo de cerdas suaves para reducir la irritación. El <span class="green">cepillo dental suave multiacción Glister™</span> con mango flexible es una excelente opción, ya que ayuda a absorber el exceso de presión sobre las encías.
    <br><br>
    En caso de percibir acumulación de placa, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',

   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 17, answers: [true, true, true,false,true,true,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 18, answers: [true, true, true,true,false,true,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Toma ventaja de cepillos dentales que incluyan en su diseño limpiadores de lengua y mejillas como el <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal ayudando a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 19, answers: [true, true, true,true,false,true,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 20, answers: [true, true, true,true,false,true,true,false,false],
    tip:` <span class="g-text mb2 text-center">

    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Toma ventaja de cepillos dentales que incluyan en su diseño limpiadores de lengua y mejillas como el <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal ayudando a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 21, answers: [true, true, true,true,false,true,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante. Incluye en tu rutina de cuidado bucal El uso del hilo dental como el <span class="green">hilo dental multiacción Glister™</span>, encerado naturalmente, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Toma ventaja de cepillos dentales que incluyan en su diseño limpiadores de lengua y mejillas como el <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal ayudando a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 22, answers: [true, true, true,true,false,true,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Puedes utilizar el <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Incluye en tu rutina de cuidado bucal el uso del hilo dental como el <span class="green">hilo dental multiacción Glister™</span>, encerado naturalmente y resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 23, answers: [true, true, true,true,false,true,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Incluye en tu rutina el <span class="green">cepillo dental suave multiacción Glister™</span> con cerdas de varias alturas para ayudar a remover placa efectivamente.
    <br><br>
    Incluye en tu rutina de cuidado bucal el uso del hilo dental como el <span class="green">hilo dental multiacción Glister™</span>, encerado naturalmente, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 24, answers: [true, true, true,true,false,true,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Incluye en tu rutina el <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Incluye en tu rutina de cuidado bucal el uso del hilo dental como el <span class="green">hilo dental multiacción Glister™</span>, encerado naturalmente, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 25, answers: [true, true, true,true,false,false,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Para una limpieza eficaz, incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 26, answers: [true, true, true,true,false,false,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Para una limpieza eficaz, incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 27, answers: [true, true, true,true,false,false,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 28, answers: [true, true, true,true,false,false,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 29, answers: [true, true, true,true,false,false,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Prueba el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Utiliza en tu rutina de cuidado bucal el <span class="green">hilo dental multiacción Glister™</span>, encerado naturalmente, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, utiliza el <span class="green">enjuague bucal multiacción Glister™</span>, formulado sin alcohol, ayuda a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 30, answers: [true, true, true,true,false,false,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    No ignores las zonas problemáticas donde veas acumulación de placa. Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Prueba el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Utiliza en tu rutina de cuidado bucal el <span class="green">hilo dental multiacción Glister™</span>, encerado naturalmente, que ayuda a reducir hasta un 68% más de placa entre los dientes. Considera incorporar el enjuague bucal en tu rutina, utiliza el <span class="green">enjuague bucal multiacción Glister™</span>, formulado sin alcohol, ayuda a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 31, answers: [true, true, true,true,false,false,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Utiliza en tu rutina de cuidado bucal el <span class="green">hilo dental multiacción Glister™</span>, encerado naturalmente, que ayuda a reducir hasta un 68% más de placa entre los dientes. Considera incorporar el enjuague bucal en tu rutina, utiliza el <span class="green">enjuague bucal multiacción Glister™</span>, formulado sin alcohol, ayuda a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 32, answers: [true, true, true,true,false,false,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Prueba el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Utiliza en tu rutina de cuidado bucal el <span class="green">hilo dental multiacción Glister™</span>, encerado naturalmente, que ayuda a reducir hasta un 68% más de placa entre los dientes. Considera incorporar el enjuague bucal en tu rutina, utiliza el <span class="green">enjuague bucal multiacción Glister™</span>, formulado sin alcohol, ayuda a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 33, answers: [true, true, true,false,true,true,true,true,true],
    tip:` <span class="g-text mb2 text-center">

    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 34, answers: [true, true, true,false,true,true,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    Presta atención especial a su limpieza y no ignores zonas problemáticas. Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Úsalo junto con el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 35, answers: [true, true, true,false,true,true,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    Presta atención especial a su limpieza y no ignores zonas problemáticas. Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Úsalo junto con el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 36, answers: [true, true, true,false,true,true,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    Presta atención especial a su limpieza y no ignores zonas problemáticas. Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> con silice, que limpia y ayuda a eliminar las manchas junto con el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con cabeza cónica para llegar a los dientes posteriores.
    <br><br>
    Si percibes placa en algunas zonas de tu boca y utilizas hilo dental recuerda usar la técnica adecuada para resultados óptimos. Te recomendamos nuestro <span class="green">hilo dental multiacción Glister™</span> que por su forma plana se desliza fácilmente entre los dientes ayudando a reducir hasta un 68% la placa interproximal.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 37, answers: [true, true, true,false,true,true,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    En caso de percibir placa, brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 38, answers: [true, true, true,false,true,true,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    En caso de percibir placa, brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 39, answers: [true, true, true,false,true,true,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    En caso de percibir placa, brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 40, answers: [true, true, true,false,true,true,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    En caso de percibir placa, brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 41, answers: [true, true, true,false,true,false,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 42, answers: [true, true, true,false,true,false,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 43, answers: [true, true, true,false,true,false,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 44, answers: [true, true, true,false,true,false,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 45, answers: [true, true, true,false,true,false,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Prueba el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 46, answers: [true, true, true,false,true,false,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Prueba el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 47, answers: [true, true, true,false,true,false,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Prueba el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 48, answers: [true, true, true,false,true,false,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Prueba el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 49, answers: [true, true, true,false,false,true,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 50, answers: [true, true, true,false,false,true,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 51, answers: [true, true, true,false,false,true,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 52, answers: [true, true, true,false,false,true,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 53, answers: [true, true, true,false,false,true,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    En caso de percibir placa, brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 54, answers: [true, true, true,false,false,true,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    En caso de percibir placa, brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 55, answers: [true, true, true,false,false,true,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 56, answers: [true, true, true,false,false,true,false,false,false],
    tip:` <span class="g-text mb2 text-center">

    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 57, answers: [true, true, true,false,false,false,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 58, answers: [true, true, true,false,false,false,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 59, answers: [true, true, true,false,false,false,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 60, answers: [true, true, true,false,false,false,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 61, answers: [true, true, true,false,false,false,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 62, answers: [true, true, true,false,false,false,false,true,false],
    tip:` <span class="g-text mb2 text-center">

    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 63, answers: [true, true, true,false,false,false,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Programa visitas regulares al dentista para detectar problemas temprano y no olvides que, para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 64, answers: [true, true, true,false,false,false,false,false,false],
    tip:` <span class="g-text mb2 text-center">

    . Programa visitas regulares al dentista para detectar problemas temprano y no olvides que, para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 65, answers: [true, true, false,true,true,true,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    Presta atención especial a su limpieza y no ignores zonas problemáticas. Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
   Úsalo junto con el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
   <br><br>
   Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 66, answers: [true, true, false,true,true,true,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    Presta atención especial a su limpieza y no ignores zonas problemáticas. Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
   Úsalo junto con el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
   <br><br>
   Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 67, answers: [true, true, false,true,true,true,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Presta atención especial a su limpieza y no ignores zonas problemáticas. Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Úsalo junto con el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 68, answers: [true, true, false,true,true,true,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Presta atención especial a su limpieza y no ignores zonas problemáticas. Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Úsalo junto con el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 69, answers: [true, true, false,true,true,true,false,true,true],
    tip:` <span class="g-text mb2 text-center">

    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Utiliza el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 70, answers: [true, true, false,true,true,true,false,true,false],
    tip:` <span class="g-text mb2 text-center">

    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Utiliza el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 71, answers: [true, true, false,true,true,true,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Si experimentas sensibilidad en tus dientes o encías, te recomendamos optar por un cepillo de cerdas suaves para reducir la irritación, como el <span class="green">cepillo dental suave multiacción Glister™</span> con mango flexible, que ayuda a absorber el exceso de presión sobre las encías.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 72, answers: [true, true, false,true,true,true,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Si experimentas sensibilidad en tus dientes o encías, te recomendamos optar por un cepillo de cerdas suaves para reducir la irritación, como el <span class="green">cepillo dental suave multiacción Glister™</span> con mango flexible, que ayuda a absorber el exceso de presión sobre las encías.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 73, answers: [true, true, false,true,true,false,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 74, answers: [true, true, false,true,true,false,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 75, answers: [true, true, false,true,true,false,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 76, answers: [true, true, false,true,true,false,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 77, answers: [true, true, false,true,true,false,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 78, answers: [true, true, false,true,true,false,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 79, answers: [true, true, false,true,true,false,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 80, answers: [true, true, false,true,true,false,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 81, answers: [true, true, false,true,false,true,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 82, answers: [true, true, false,true,false,true,true,true,false],
    tip:` <span class="g-text mb2 text-center">

    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 83, answers: [true, true, false,true,false,true,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 84, answers: [true, true, false,true,false,true,true,false,false],
    tip:` <span class="g-text mb2 text-center">

    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 85, answers: [true, true, false,true,false,true,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 86, answers: [true, true, false,true,false,true,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 87, answers: [true, true, false,true,false,true,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 88, answers: [true, true, false,true,false,true,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 89, answers: [true, true, false,true,false,false,true,true,true],
    tip:` <span class="g-text mb2 text-center">

    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
   Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 90, answers: [true, true, false,true,false,false,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
   Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 91, answers: [true, true, false,true,false,false,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
     Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
     <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 92, answers: [true, true, false,true,false,false,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
     Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
     <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,


    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 93, answers: [true, true, false,true,false,false,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
     Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
     <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,


    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 94, answers: [true, true, false,true,false,false,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
     Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
     <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,


    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 95, answers: [true, true, false,true,false,false,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Programe visitas cada seis meses o según las recomendaciones de tu dentista para mantener una buena higiene bucal.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
     Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
     <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,


    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 96, answers: [true, true, false,true,false,false,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Programe visitas cada seis meses o según las recomendaciones de tu dentista para mantener una buena higiene bucal.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
     Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
     <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,


    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 97, answers: [true, true, false,false,true,true,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    No ignores las zonas difíciles de alcanzar. Aunque ya utilices hilo dental, te recomendamos probar uno encerado, como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 98, answers: [true, true, false,false,true,true,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    No ignores las zonas difíciles de alcanzar. Aunque ya utilices hilo dental, te recomendamos probar uno encerado, como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,


    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 99, answers: [true, true, false,false,true,true,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 100, answers: [true, true, false,false,true,true,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 101, answers: [true, true, false,false,true,true,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    no olvides que, para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 102, answers: [true, true, false,false,true,true,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    no olvides que, para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,
    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 103, answers: [true, true, false,false,true,true,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Tu sonrisa merece lo mejor, especialmente si has utilizado aparatos de ortodoncia. Programa visitas regulares al dentista para detectar problemas temprano y no olvides que, para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 104, answers: [true, true, false,false,true,true,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Tu sonrisa merece lo mejor, especialmente si has utilizado aparatos de ortodoncia. Programa visitas regulares al dentista para detectar problemas temprano y no olvides que, para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 105, answers: [true, true, false,false,true,false,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 106, answers: [true, true, false,false,true,false,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 107, answers: [true, true, false,false,true,false,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Tu sonrisa merece lo mejor, especialmente si has utilizado aparatos de ortodoncia. Programa visitas regulares al dentista para detectar problemas temprano.
    <br><br>
    Incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 108, answers: [true, true, false,false,true,false,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Tu sonrisa merece lo mejor, especialmente si has utilizado aparatos de ortodoncia. Programa visitas regulares al dentista para detectar problemas temprano.
    <br><br>
    Incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 109, answers: [true, true, false,false,true,false,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Puedes utilizar el <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 110, answers: [true, true, false,false,true,false,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Puedes utilizar el <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Cepillo.png',
     'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 111, answers: [true, true, false,false,true,false,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 112, answers: [true, true, false,false,true,false,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 113, answers: [true, true, false,false,false,true,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    No ignores las zonas difíciles de alcanzar. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 114, answers: [true, true, false,false,false,true,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    No ignores las zonas difíciles de alcanzar. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 115, answers: [true, true, false,false,false,true,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    No ignores las zonas difíciles de alcanzar. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,
    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 116, answers: [true, true, false,false,false,true,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    No ignores las zonas difíciles de alcanzar. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 117, answers: [true, true, false,false,false,true,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    No ignores las zonas difíciles de alcanzar. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,
    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 118, answers: [true, true, false,false,false,true,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    No ignores las zonas difíciles de alcanzar. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 119, answers: [true, true, false,false,false,true,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    No ignores las zonas difíciles de alcanzar. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,
    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 120, answers: [true, true, false,false,false,true,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    No ignores las zonas difíciles de alcanzar. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,
    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 121, answers: [true, true, false,false,false,false,true,true,true],
    tip:` <span class="g-text mb2 text-center">

    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 122, answers: [true, true, false,false,false,false,true,true,false],
    tip:` <span class="g-text mb2 text-center">

    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 123, answers: [true, true, false,false,false,false,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 124, answers: [true, true, false,false,false,false,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 125, answers: [true, true, false,false,false,false,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 126, answers: [true, true, false,false,false,false,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 127, answers: [true, true, false,false,false,false,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 128, answers: [true, true, false,false,false,false,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.

    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,
    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 129, answers: [true, false, true,true,true,true,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Aunque ya utilices hilo dental, te recomendamos probar uno encerado, como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 130, answers: [true, false, true,true,true,true,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Aunque ya utilices hilo dental, te recomendamos probar uno encerado, como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 131, answers: [true, false, true,true,true,true,true,false,true],
    tip:` <span class="g-text mb2 text-center">

    Programa visitas regulares al dentista para la prevención y tratamiento de problemas bucales en etapas tempranas, antes de que se conviertan en afecciones más graves. Si presentas sensibilidad y acumulación de placa en una zona específica, dedica más tiempo y cuidado al cepillado. Puedes probar usando el <span class="green">cepillo dental suave multiacción Glister™</span>, que ayuda a eliminar la placa hasta en un 84%. Combínalo con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> para aumentar hasta un 42% la luminosidad del esmalte dental.
    <br><br>
    No dejes de utilizar hilo dental y enjuague bucal, ya que son tus aliados para eliminar la placa y los restos de alimentos entre los dientes, así como para mantener el equilibrio del microbioma oral. Te recomendamos probar el <span class="green">hilo dental multiacción Glister™</span> con forma plana, que se desliza fácilmente incluso entre dientes muy separados. Además, el enjuague bucal Glister™, con CPC, ayuda a reducir la acumulación de placa en un 29% más que un enjuague bucal sin CPC.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal. Es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 132, answers: [true, false, true,true,true,true,true,false,false],
    tip:` <span class="g-text mb2 text-center">

    Dedica al menos 2 minutos al cepillado con movimientos suaves y circulares para reducir la sensibilidad y placa en áreas específicas. Considera el uso de cepillos de cerdas suaves como el <span class="green">cepillo dental suave multiacción Glister™</span>, que elimina la placa hasta en un 84%. Combínalo con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> para aumentar hasta un 42% la luminosidad del esmalte dental.
    <br><br>
    Prueba utilizando un hilo dental con forma plana, como el hilo dental multiacción GlisterTM, que se desliza fácilmente en espacios reducidos. También, utiliza enjuagues bucales con CPC, como el enjuague multiacción Glister™ con CPC, que reduce la acumulación de placa en un 29% más que un enjuague bucal sin CPC.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal. Es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png']},


   { id: 133, answers: [true, false, true,true,true,true,false,true,true],
    tip:` <span class="g-text mb2 text-center">

    Si experimentas sensibilidad dental y acumulación de placa al cepillarte, puedes   considerar usar un cepillo de cerdas suaves para garantizar una limpieza eficaz sin dañar los dientes y las encías cómo el <span class="green">cepillo dental suave multiacción Glister™</span> con mango flexible (área del cuello) que ayuda a absorber el exceso de presión sobre las encías para una limpieza suave junto con  la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que  te  ayudará a aumentar hasta un  42%  la luminosidad del esmalte dental.
    <br><br>
    El uso prolongado de un cepillo desgastado puede afectar la eficacia de limpieza y acumular bacterias en las cerdas. Recuerda reemplazar tu cepillo dental cada tres meses o cuando las cerdas estén desgastadas. No dejes de utilizar hilo dental y enjuague bucal en tu rutina. Te recomendamos probar el <span class="green">hilo dental multiacción Glister™</span>, que por su forma plana se desliza fácilmente entre los dientes para una acción de limpieza segura y efectiva. Asimismo, el <span class="green">enjuague bucal multiacción Glister™</span>, formulado sin alcohol, ayuda a eliminar las bacterias que pueden causar mal aliento y gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 134, answers: [true, false, true,true,true,true,false,true,false],
    tip:` <span class="g-text mb2 text-center">

    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Aunque ya utilices hilo dental, te recomendamos probar uno encerado, como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 135, answers: [true, false, true,true,true,true,false,false,true],
    tip:` <span class="g-text mb2 text-center">

    Tu sonrisa merece lo mejor, programa visitas regulares al dentista para detectar problemas temprano, y no olvides que, para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Presta atención especial a la limpieza de tus dientes y no ignores zonas problemáticas. Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> con sílice, que limpia y ayuda a eliminar las manchas, junto con el <span class="green">cepillo dental suave multiacción Glister™</span> con cabeza cónica diseñada para alcanzar los dientes posteriores.
    <br><br>
    Si notas la acumulación de placa en algunas zonas de tu boca y utilizas hilo dental, recuerda usar la técnica adecuada para obtener resultados óptimos. Te recomendamos nuestro <span class="green">hilo dental multiacción Glister™</span>, que debido a su forma plana, se desliza fácilmente entre los dientes, ayudando a reducir hasta un 68% la placa interproximal.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,


    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 136, answers: [true, false, true,true,true,true,false,false,false],
    tip:` <span class="g-text mb2 text-center">

    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Si experimentas sensibilidad en tus dientes o encías, te recomendamos optar por un cepillo de cerdas suaves para reducir la irritación, como el <span class="green">cepillo dental suave multiacción Glister™</span> con mango flexible, que ayuda a absorber el exceso de presión sobre las encías.
    <br><br>
    En caso de percibir acumulación de placa, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 137, answers: [true, false, true,true,true,false,true,true,true],
    tip:` <span class="g-text mb2 text-center">

    Si notas acumulación de placa en una zona específica, es importante dedicar tiempo y cuidado extra. Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Si experimentas sensibilidad en tus dientes o encías, te recomendamos optar por un cepillo de cerdas suaves para reducir la irritación. El <span class="green">cepillo dental suave multiacción Glister™</span> con mango flexible es una excelente opción, ya que ayuda a absorber el exceso de presión sobre las encías.
    <br><br>
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Programe visitas cada seis meses o según las recomendaciones de tu dentista para mantener una buena higiene bucal.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Cepillo.png',
     'assets/img/RecomendadorDrGlister/Enjuague.png']},
  


   { id: 138, answers: [true, false, true,true,true,false,true,true,false],
    tip:` <span class="g-text mb2 text-center">

    Si notas acumulación de placa en una zona específica, es importante dedicar tiempo y cuidado extra. Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, sin alcohol y con CPC, un ingrediente que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29 % más que un enjuague bucal sin CPC* después del cepillado con una pasta dental con fluoruro.
    <br><br>
    Puedes usarlo después de cepillarte con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a la remineralización del esmalte de los dientes, depositando minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 139, answers: [true, false, true,true,true,false,true,false,true],
    tip:` <span class="g-text mb2 text-center">

    Si notas acumulación de placa en una zona específica, es importante dedicar tiempo y cuidado extra. Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, sin alcohol y con CPC, un ingrediente que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29 % más que un enjuague bucal sin CPC* después del cepillado con una pasta dental con fluoruro como la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>
    <br><br>
    Si experimentas sensibilidad en tus dientes o encías, te recomendamos optar por un cepillo de cerdas suaves para reducir la irritación. El <span class="green">cepillo dental suave multiacción Glister™</span> con mango flexible es una excelente opción, ya que ayuda a absorber el exceso de presión sobre las encías.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 140, answers: [true, false, true,true,true,false,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Programe visitas cada seis meses o según las recomendaciones de tu dentista para mantener una buena higiene bucal.
    <br><br>
En caso de percibir acumulación de placa, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro.
<br><br>
Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 141, answers: [true, false, true,true,true,false,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias. Si experimentas sensibilidad en tus dientes o encías, te recomendamos optar por un cepillo de cerdas suaves para reducir la irritación.
    <br><br>
    El <span class="green">cepillo dental suave multiacción Glister™</span> con mango flexible es una excelente opción, ya que ayuda a absorber el exceso de presión sobre las encías al mismo tiempo que ayuda a eliminar la placa de las superficies esmaltadas hasta en un 86%.
    <br><br>
    En caso de percibir acumulación de placa, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 142, answers: [true, false, true,true,true,false,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Aunque no utilices producto adicionales, como limpiadores de lengua te recomendamos el <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal ayudando a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    En caso de percibir acumulación de placa, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Cepillo.png',
     'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 143, answers: [true, false, true,true,true,false,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
<br><br>
Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      
     'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 144, answers: [true, false, true,true,true,false,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Programa visitas regulares al dentista para detectar problemas temprano y no olvides que, para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Si experimentas sensibilidad en tus dientes o encías, te recomendamos optar por un cepillo de cerdas suaves para reducir la irritación. El <span class="green">cepillo dental suave multiacción Glister™</span> con mango flexible es una excelente opción, ya que ayuda a absorber el exceso de presión sobre las encías.
    <br><br>
    En caso de percibir acumulación de placa, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 145, answers: [true, false, true,true,false,true,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 146, answers: [true, false, true,true,false,true,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Toma ventaja de cepillos dentales que incluyan en su diseño limpiadores de lengua y mejillas como el <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal ayudando a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 147, answers: [true, false, true,true,false,true,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 148, answers: [true, false, true,true,false,true,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Toma ventaja de cepillos dentales que incluyan en su diseño limpiadores de lengua y mejillas como el <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal ayudando a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 149, answers: [true, false, true,true,false,true,false,true,true],
    tip:` <span class="g-text mb2 text-center">

    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante. Incluye en tu rutina de cuidado bucal El uso del hilo dental como el <span class="green">hilo dental multiacción Glister™</span>, encerado naturalmente, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Toma ventaja de cepillos dentales que incluyan en su diseño limpiadores de lengua y mejillas como el <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal ayudando a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 150, answers: [true, false, true,true,false,true,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Puedes utilizar el <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Incluye en tu rutina de cuidado bucal el uso del hilo dental como el <span class="green">hilo dental multiacción Glister™</span>, encerado naturalmente y resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 151, answers: [true, false, true,true,false,true,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Incluye en tu rutina el <span class="green">cepillo dental suave multiacción Glister™</span> con cerdas de varias alturas para ayudar a remover placa efectivamente.
    <br><br>
    Incluye en tu rutina de cuidado bucal el uso del hilo dental como el <span class="green">hilo dental multiacción Glister™</span>, encerado naturalmente, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 152, answers: [true, false, true,true,false,true,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Incluye en tu rutina el <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Incluye en tu rutina de cuidado bucal el uso del hilo dental como el <span class="green">hilo dental multiacción Glister™</span>, encerado naturalmente, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Cepillo.png',
     'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 153, answers: [true, false, true,true,false,false,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Para una limpieza eficaz, incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 154, answers: [true, false, true,true,false,false,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Para una limpieza eficaz, incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 155, answers: [true, false, true,true,false,false,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 156, answers: [true, false, true,true,false,false,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 157, answers: [true, false, true,true,false,false,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Prueba el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
No ignores las zonas problemáticas donde veas acumulación de placa. Utiliza en tu rutina de cuidado bucal el <span class="green">hilo dental multiacción Glister™</span>, encerado naturalmente, que ayuda a reducir hasta un 68% más de placa entre los dientes.
<br><br>
Considera incorporar el enjuague bucal en tu rutina, utiliza el <span class="green">enjuague bucal multiacción Glister™</span>, formulado sin alcohol, ayuda a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
<br><br>
Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 158, answers: [true, false, true,true,false,false,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    No ignores las zonas problemáticas donde veas acumulación de placa. Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Prueba el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Utiliza en tu rutina de cuidado bucal el <span class="green">hilo dental multiacción Glister™</span>, encerado naturalmente, que ayuda a reducir hasta un 68% más de placa entre los dientes. Considera incorporar el enjuague bucal en tu rutina, utiliza el <span class="green">enjuague bucal multiacción Glister™</span>, formulado sin alcohol, ayuda a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 159, answers: [true, false, true,true,false,false,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Utiliza en tu rutina de cuidado bucal el <span class="green">hilo dental multiacción Glister™</span>, encerado naturalmente, que ayuda a reducir hasta un 68% más de placa entre los dientes. Considera incorporar el enjuague bucal en tu rutina, utiliza el <span class="green">enjuague bucal multiacción Glister™</span>, formulado sin alcohol, ayuda a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 160, answers: [true, false, true,true,false,false,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Prueba el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Utiliza en tu rutina de cuidado bucal el <span class="green">hilo dental multiacción Glister™</span>, encerado naturalmente, que ayuda a reducir hasta un 68% más de placa entre los dientes. Considera incorporar el enjuague bucal en tu rutina, utiliza el <span class="green">enjuague bucal multiacción Glister™</span>, formulado sin alcohol, ayuda a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 161, answers: [true, false, true,false,true,true,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    Presta atención especial a su limpieza y no ignores zonas problemáticas. Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Úsalo junto con el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 162, answers: [true, false, true,false,true,true,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    Presta atención especial a su limpieza y no ignores zonas problemáticas. Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Úsalo junto con el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 163, answers: [true, false, true,false,true,true,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    Presta atención especial a su limpieza y no ignores zonas problemáticas. Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> con silice, que limpia y ayuda a eliminar las manchas junto con el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con cabeza cónica para llegar a los dientes posteriores.
    <br><br>
    Si percibes placa en algunas zonas de tu boca y utilizas hilo dental recuerda usar la técnica adecuada para resultados óptimos. Te recomendamos nuestro <span class="green">hilo dental multiacción Glister™</span> que por su forma plana se desliza fácilmente entre los dientes ayudando a reducir hasta un 68% la placa interproximal.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 164, answers: [true, false, true,false,true,true,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    Presta atención especial a su limpieza y no ignores zonas problemáticas. Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> con silice, que limpia y ayuda a eliminar las manchas junto con el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con cabeza cónica para llegar a los dientes posteriores.
    <br><br>
    Si percibes placa en algunas zonas de tu boca y utilizas hilo dental recuerda usar la técnica adecuada para resultados óptimos. Te recomendamos nuestro <span class="green">hilo dental multiacción Glister™</span> que por su forma plana se desliza fácilmente entre los dientes ayudando a reducir hasta un 68% la placa interproximal.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 165, answers: [true, false, true,false,true,true,false,true,true],
    tip:` <span class="g-text mb2 text-center">

    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    En caso de percibir placa, brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 166, answers: [true, false, true,false,true,true,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    En caso de percibir placa, brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,
    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 167, answers: [true, false, true,false,true,true,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    En caso de percibir placa, brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 168, answers: [true, false, true,false,true,true,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    En caso de percibir placa, brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 169, answers: [true, false, true,false,true,false,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 170, answers: [true, false, true,false,true,false,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,
    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 171, answers: [true, false, true,false,true,false,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 172, answers: [true, false, true,false,true,false,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 173, answers: [true, false, true,false,true,false,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Prueba el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 174, answers: [true, false, true,false,true,false,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Prueba el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
<br><br>
Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 175, answers: [true, false, true,false,true,false,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Prueba el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 176, answers: [true, false, true,false,true,false,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Prueba el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 177, answers: [true, false, true,false,false,true,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 178, answers: [true, false, true,false,false,true,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 179, answers: [true, false, true,false,false,true,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 180, answers: [true, false, true,false,false,true,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 181, answers: [true, false, true,false,false,true,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    En caso de percibir placa, brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 182, answers: [true, false, true,false,false,true,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    En caso de percibir placa, brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},
   { id: 183, answers: [true, false, true,false,false,true,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 184, answers: [true, false, true,false,false,true,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,


    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 185, answers: [true, false, true,false,false,false,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 186, answers: [true, false, true,false,false,false,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,
    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},
   

   { id: 187, answers: [true, false, true,false,false,false,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},
   
   { id: 188, answers: [true, false, true,false,false,false,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},
   

   { id: 189, answers: [true, false, true,false,false,false,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},
   

   { id: 190, answers: [true, false, true,false,false,false,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},
   
   { id: 191, answers: [true, false, true,false,false,false,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Programa visitas regulares al dentista para detectar problemas temprano y no olvides que, para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},
   

   { id: 192, answers: [true, false, true,false,false,false,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Programa visitas regulares al dentista para detectar problemas temprano y no olvides que, para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},
   

   { id: 193, answers: [true, false, false,true,true,true,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    Presta atención especial a su limpieza y no ignores zonas problemáticas. Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
   Úsalo junto con el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
   <br><br>
   Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.

    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 194, answers: [true, false, false,true,true,true,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    Presta atención especial a su limpieza y no ignores zonas problemáticas. Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
   Úsalo junto con el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
   <br><br>
   Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,
    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},


   { id: 195, answers: [true, false, false,true,true,true,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
Presta atención especial a su limpieza y no ignores zonas problemáticas. Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
<br><br>
Úsalo junto con el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
<br><br>
Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 196, answers: [true, false, false,true,true,true,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
Presta atención especial a su limpieza y no ignores zonas problemáticas. Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
<br><br>
Úsalo junto con el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
<br><br>
Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 197, answers: [true, false, false,true,true,true,false,true,true],
    tip:` <span class="g-text mb2 text-center">

Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Utiliza el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
<br><br>
Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
<br><br>
Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 198, answers: [true, false, false,true,true,true,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Utiliza el cepillo <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Cepilla tus dientes con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span> que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 199, answers: [true, false, false,true,true,true,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Si experimentas sensibilidad en tus dientes o encías, te recomendamos optar por un cepillo de cerdas suaves para reducir la irritación, como el <span class="green">cepillo dental suave multiacción Glister™</span> con mango flexible, que ayuda a absorber el exceso de presión sobre las encías.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 200, answers: [true, false, false,true,true,true,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Si experimentas sensibilidad en tus dientes o encías, te recomendamos optar por un cepillo de cerdas suaves para reducir la irritación, como el <span class="green">cepillo dental suave multiacción Glister™</span> con mango flexible, que ayuda a absorber el exceso de presión sobre las encías.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 201, answers: [true, false, false,true,true,false,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 202, answers: [true, false, false,true,true,false,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 203, answers: [true, false, false,true,true,false,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 204, answers: [true, false, false,true,true,false,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
<br><br>
Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 205, answers: [true, false, false,true,true,false,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 206, answers: [true, false, false,true,true,false,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 207, answers: [true, false, false,true,true,false,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 208, answers: [true, false, false,true,true,false,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 209, answers: [true, false, false,true,false,true,true,true,true],
    tip:` <span class="g-text mb2 text-center">

    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 210, answers: [true, false, false,true,false,true,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 211, answers: [true, false, false,true,false,true,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 212, answers: [true, false, false,true,false,true,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 213, answers: [true, false, false,true,false,true,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 214, answers: [true, false, false,true,false,true,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 215, answers: [true, false, false,true,false,true,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 216, answers: [true, false, false,true,false,true,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas y para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, resistente a la trituración, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 217, answers: [true, false, false,true,false,false,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
   Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 218, answers: [true, false, false,true,false,false,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
    <br><br>
   Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,
    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 219, answers: [true, false, false,true,false,false,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
     Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
     <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 220, answers: [true, false, false,true,false,false,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
     Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
     <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,
    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 221, answers: [true, false, false,true,false,false,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
     Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
     <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 222, answers: [true, false, false,true,false,false,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
     Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
     <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 223, answers: [true, false, false,true,false,false,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Programe visitas cada seis meses o según las recomendaciones de tu dentista para mantener una buena higiene bucal.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
     Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
     <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 224, answers: [true, false, false,true,false,false,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas. Programe visitas cada seis meses o según las recomendaciones de tu dentista para mantener una buena higiene bucal.
    <br><br>
    Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal. Utiliza el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
     Considera incorporar el enjuague bucal en tu rutina, como el <span class="green">enjuague bucal multiacción Glister™</span>, que está formulado sin alcohol. Este enjuague bucal no solo ayuda a reducir significativamente la placa en comparación con el cepillado solo, sino que también contribuye a eliminar hasta el 99,9% de las bacterias que causan gingivitis.
     <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


   { id: 225, answers: [true, false, false,false,true,true,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    No ignores las zonas difíciles de alcanzar. Aunque ya utilices hilo dental, te recomendamos probar uno encerado, como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},


   { id: 226, answers: [true, false, false,false,true,true,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
No ignores las zonas difíciles de alcanzar. Aunque ya utilices hilo dental, te recomendamos probar uno encerado, como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
<br><br>
Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 227, answers: [true, false, false,false,true,true,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
<br><br>
Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 228, answers: [true, false, false,false,true,true,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 229, answers: [true, false, false,false,true,true,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    no olvides que, para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 230, answers: [true, false, false,false,true,true,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    no olvides que, para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 231, answers: [true, false, false,false,true,true,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    Tu sonrisa merece lo mejor, especialmente si has utilizado aparatos de ortodoncia. Programa visitas regulares al dentista para detectar problemas temprano y no olvides que, para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 232, answers: [true, false, false,false,true,true,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    Tu sonrisa merece lo mejor, especialmente si has utilizado aparatos de ortodoncia. Programa visitas regulares al dentista para detectar problemas temprano y no olvides que, para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses.
    <br><br>
    Brinda un cuidado extra con movimientos suaves y circulares utilizando un cepillo de cerdas suaves, como el <span class="green">cepillo dental suave multiacción Glister™</span>, con limpiador de lengua/mejillas que ayuda a eliminar más bacterias que el cepillado solo. Junto con la <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>, que ayuda a depositar minerales nuevamente en el esmalte para fortalecer los dientes y hacerlos más resistentes a las caries.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:['assets/img/RecomendadorDrGlister/PastaDeDientes.png',
    'assets/img/RecomendadorDrGlister/Cepillo.png']},

   { id: 233, answers: [true, false, false,false,true,false,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 234, answers: [true, false, false,false,true,false,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    Incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 235, answers: [true, false, false,false,true,false,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Tu sonrisa merece lo mejor, especialmente si has utilizado aparatos de ortodoncia. Programa visitas regulares al dentista para detectar problemas temprano.
    <br><br>
    Incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 236, answers: [true, false, false,false,true,false,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Tu sonrisa merece lo mejor, especialmente si has utilizado aparatos de ortodoncia. Programa visitas regulares al dentista para detectar problemas temprano.
    <br><br>
    Incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},
   { id: 237, answers: [true, false, false,false,true,false,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Puedes utilizar el <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
    'assets/img/RecomendadorDrGlister/Cepillo.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},
   { id: 238, answers: [true, false, false,false,true,false,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Para una limpieza eficaz, los odontólogos recomiendan cambiar tu cepillo dental cada tres meses. Puedes utilizar el <span class="green">cepillo dental suave multiacción Glister™</span> con limpiador de lengua/mejillas en el cabezal que ayuda a limpiar los dientes, la lengua, las mejillas y las encías, eliminando más bacterias que el cepillado solo.
    <br><br>
    Incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Cepillo.png',
     'assets/img/RecomendadorDrGlister/Enjuague.png']},
   { id: 239, answers: [true, false, false,false,true,false,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 240, answers: [true, false, false,false,true,false,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    Incorpora un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 241, answers: [true, false, false,false,false,true,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    No ignores las zonas difíciles de alcanzar. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png']},

   { id: 242, answers: [true, false, false,false,false,true,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    Una combinación de cepillado diario, uso de hilo dental y enjuague bucal, buena nutrición y chequeos dentales regulares son muy importantes para tener una sonrisa radiante.
    <br><br>
    No ignores las zonas difíciles de alcanzar. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},
   { id: 243, answers: [true, false, false,false,false,true,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
No ignores las zonas difíciles de alcanzar. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
<br><br>
Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},
   { id: 244, answers: [true, false, false,false,false,true,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro.
    <br><br>
    No ignores las zonas difíciles de alcanzar. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},
   { id: 245, answers: [true, false, false,false,false,true,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    No ignores las zonas difíciles de alcanzar. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},
   { id: 246, answers: [true, false, false,false,false,true,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    No ignores las zonas difíciles de alcanzar. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},
   { id: 247, answers: [true, false, false,false,false,true,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
No ignores las zonas difíciles de alcanzar. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
<br><br>
Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},
   { id: 248, answers: [true, false, false,false,false,true,false,false,false],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    No ignores las zonas difíciles de alcanzar. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png']},
   { id: 249, answers: [true, false, false,false,false,false,true,true,true],
    tip:` <span class="g-text mb2 text-center">
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
   'assets/img/RecomendadorDrGlister/HiloDental.png',
   'assets/img/RecomendadorDrGlister/Enjuague.png']},
   { id: 250, answers: [true, false, false,false,false,false,true,true,false],
    tip:` <span class="g-text mb2 text-center">
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},
   { id: 251, answers: [true, false, false,false,false,false,true,false,true],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},
   { id: 252, answers: [true, false, false,false,false,false,true,false,false],
    tip:` <span class="g-text mb2 text-center">
    Recuerda no descuidar las visitas al dentista. Los chequeos y limpiezas profesionales son clave para detectar problemas en etapas tempranas.
    <br><br>
No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
<br><br>
Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
<br><br>
Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},
   { id: 253, answers: [true, false, false,false,false,false,false,true,true],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},

   { id: 254, answers: [true, false, false,false,false,false,false,true,false],
    tip:` <span class="g-text mb2 text-center">
    Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},
   { id: 255, answers: [true, false, false,false,false,false,false,false,true],
    tip:` <span class="g-text mb2 text-center">
    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},
   { id: 256, answers: [true, false, false,false,false,false,false,false,false],
    tip:` <span class="g-text mb2 text-center">

    No descuides las visitas al dentista. Los chequeos y limpiezas profesionales periódicas son fundamentales para detectar problemas tempranos, como acumulación de placa y sarro. Es importante cambiar tu cepillo dental cada tres meses, ya que un cepillo desgastado no limpia adecuadamente y puede acumular bacterias.
    <br><br>
    No ignores las zonas problemáticas donde veas acumulación de placa. Estudios demuestran que el cepillado sólo alcanza el 60% de la superficie dental y esto hace necesario incluir el uso del hilo dental en tu rutina de cuidado bucal como el <span class="green">hilo dental multiacción Glister™</span>, que ayuda a reducir hasta un 68% más de placa entre los dientes.
    <br><br>
    Además, puedes incorporar un enjuague bucal con CPC, como el <span class="green">enjuague bucal multiacción Glister™</span>, ya que se ha demostrado clínicamente que ayuda a reducir la acumulación de placa hasta en un 29% más que un enjuague bucal sin CPC, después de cepillarte con una pasta dental que contenga fluoruro como <span class="green">pasta de dientes multiacción con fluoruro Glister™</span>.
    <br><br>
    Recuerda que estas recomendaciones son generales y no sustituyen una visita con un especialista en cuidado bucal, es importante consultar a un dentista para obtener una evaluación personalizada.
    </span>`,

    img:[
      'assets/img/RecomendadorDrGlister/HiloDental.png',
      'assets/img/RecomendadorDrGlister/Enjuague.png']},


  ];



  constructor(private router: Router, public doctorGlisterService: DoctorGlisterService) {}

  ngOnInit() {
    // Acceder a la variable questions
    const questions = this.doctorGlisterService.questions;

    for (let i = 0; i < this.tips.length; i++) {
      const tip = this.tips[i];
      const tipAnswers = tip.answers;

      // Comparar las respuestas del tip con las respuestas de las preguntas
      let match = true;
      for (let j = 0; j < tipAnswers.length; j++) {
        if (tipAnswers[j] !== questions[j].answer) {
          match = false;
          break;
        }
      }

      if (match) {
        console.log('Tip:', tip.tip);
        this.tipmatch=tip.tip;
        this.tipmatchImg=tip.img;
        // Realiza la acción que desees con el tip que coincide con las respuestas
        break; // Si solo quieres obtener el primer tip que coincide
      }
    }


    let utag_data = environment.utagInfo.drGlisterTips;
        
    window.utag_data = Object.assign(window.utag_data, utag_data);
    utag.view(window.utag_data);
  }

  ngAfterViewInit(){
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
      /*
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }*/
    });
  }

  navigateTo(route: Array<any>) {
    this.router.navigate(route);
  }
}
