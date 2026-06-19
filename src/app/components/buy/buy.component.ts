import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

declare var utag: any;
declare var window: any;

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent {

  public btnBuy: Array<any> = [
    { id: 1, img: 'assets/img/Compras/IMG_1_2.png', link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdsList&IC=1&C=NL&line=N&NavM=N&utm_source=site_glister&utm_medium=home&utm_campaign=ar_es_glister&utm_content=cta_compraahora&utm_term=categoría_cuidado_Oral' },
    { id: 2, img: 'assets/img/Compras/IMG_3_2.png', link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdsList&IC=2&C=BM&line=B&NavM=N&utm_source=site_glister&utm_medium=home&utm_campaign=cl_es_glister&utm_content=cta_compraahora&utm_term=categoría_cuidado_Oral' },
    { id: 3, img: 'assets/img/Compras/IMG_11_2.png', link: 'https://www.amway.com.co/category/higiene-bucal?utm_source=site_glister&utm_medium=home&utm_campaign=co_es_glister&utm_content=cta_compraahora&utm_term=categoría_cuidado_Oral' },
    { id: 4, img: 'assets/img/Compras/IMG_4_2.png', link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdsList&IC=2&C=DT&line=D&NavM=N&utm_source=site_glister&utm_medium=home&utm_campaign=cr_es_glister&utm_content=cta_compraahora&utm_term=categoría_cuidado_Oral' },
    { id: 5, img: 'assets/img/Compras/IMG_5_2.png', link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdsList&IC=2&C=QB&line=Q&NavM=N&utm_source=site_glister&utm_medium=home&utm_campaign=sv_es_glister&utm_content=cta_compraahora&utm_term=categoría_cuidado_Oral' },
    { id: 6, img: 'assets/img/Compras/IMG_12_2.png', link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdsList&IC=2&C=ER&line=E&NavM=N&utm_source=site_glister&utm_medium=home&utm_campaign=gt_es_glister&utm_content=cta_compraahora&utm_term=categoría_cuidado_Oral' },
    { id: 7, img: 'assets/img/Compras/IMG_6_2.png', link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdsList&IC=2&C=ET&line=E&NavM=N&utm_source=site_glister&utm_medium=home&utm_campaign=hn_es_glister&utm_content=cta_compraahora&utm_term=categoría_cuidado_Oral' },
    { id: 8, img: 'assets/img/Compras/IMG_7_2.png', link: 'https://www.amway.com.mx/category/higiene-bucal&utm_source=site_glister&utm_medium=home&utm_campaign=mx_glister&utm_content=cta_compraahora&utm_term=categoría_cuidado_Oral' },
    { id: 9, img: 'assets/img/Compras/IMG_8_2.png', link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdsList&IC=2&C=DS&line=D&NavM=N&utm_source=site_glister&utm_medium=home&utm_campaign=pa_es_glister&utm_content=cta_compraahora&utm_term=categoría_cuidado_Oral' },
    { id: 10, img: 'assets/img/Compras/IMG_9_2.png', link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdsList&IC=2&C=BO&line=B&NavM=N&utm_source=site_glister&utm_medium=home&utm_campaign=uy_es_glister&utm_content=cta_compraahora&utm_term=categoría_cuidado_Oral' },
  ];
  public step1: Array<any> = [
    { id: 1, img: 'assets/img/Compras/IMG_1_2.png', link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=N&BC=124106&C=NL&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=ar_es_glister&utm_content=cta_compraahora&utm_term=paso1_cepillar' },
    { id: 2, img: 'assets/img/Compras/IMG_3_2.png', link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=124106&C=BM&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=cl_es_glister&utm_content=cta_compraahora&utm_term=paso1_cepillar' },
    { id: 3, img: 'assets/img/Compras/IMG_11_2.png', link: 'https://www.amway.com.co/product/Pasta-de-Dientes-Multiaccion-con-Fluoruro-200-g/124106SP?utm_source=site_glister&utm_medium=home&utm_campaign=co_es_glister&utm_content=cta_compraahora&utm_term=paso1_cepillar' },
    { id: 4, img: 'assets/img/Compras/IMG_4_2.png', link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=D&BC=124106&C=DT&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=cr_es_glister&utm_content=cta_compraahora&utm_term=paso1_cepillar' },
    { id: 5, img: 'assets/img/Compras/IMG_5_2.png', link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=Q&BC=124106&C=QB&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=sv_es_glister&utm_content=cta_compraahora&utm_term=paso1_cepillar' },
    { id: 6, img: 'assets/img/Compras/IMG_12_2.png', link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=E&BC=124106&C=ER&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=gt_es_glister&utm_content=cta_compraahora&utm_term=paso1_cepillar' },
    { id: 7, img: 'assets/img/Compras/IMG_6_2.png', link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=E&BC=124106&C=ET&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=hn_es_glister&utm_content=cta_compraahora&utm_term=paso1_cepillar' },
    { id: 8, img: 'assets/img/Compras/IMG_7_2.png', link: 'https://www.amway.com.mx/product/pasta-de-dientes-multiaccion-con-fluoruro/124106SP&utm_source=site_glister&utm_medium=home&utm_campaign=mx_glister&utm_content=cta_compraahora&utm_term=paso1_cepillar' },
    { id: 9, img: 'assets/img/Compras/IMG_8_2.png', link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=D&BC=124106&C=DS&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=pa_es_glister&utm_content=cta_compraahora&utm_term=paso1_cepillar' },
    { id: 10, img: 'assets/img/Compras/IMG_9_2.png', link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=124106&C=BO&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=uy_es_glister&utm_content=cta_compraahora&utm_term=paso1_cepillar' },
  ];
  public step2: Array<any> = [
    { id: 1, img: 'assets/img/Compras/IMG_1_2.png', link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=N&BC=124112&C=NL&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=ar_es_glister&utm_content=cta_compraahora&utm_term=paso2_hilo_dental' },
    { id: 2, img: 'assets/img/Compras/IMG_3_2.png', link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=124112&C=BM&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=cl_es_glister&utm_content=cta_compraahora&utm_term=paso2_hilo_dental' },
    { id: 3, img: 'assets/img/Compras/IMG_11_2.png', link: 'https://www.amway.com.co/product/Hilo-Dental-Multiaccion/124112SP?utm_source=site_glister&utm_medium=home&utm_campaign=co_es_glister&utm_content=cta_compraahora&utm_term=paso2_hilo_dental' },
    { id: 4, img: 'assets/img/Compras/IMG_4_2.png', link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=D&BC=124112&C=DT&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=cr_es_glister&utm_content=cta_compraahora&utm_term=paso2_hilo_dental' },
    { id: 5, img: 'assets/img/Compras/IMG_5_2.png', link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=Q&BC=124112&C=QB&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=sv_es_glister&utm_content=cta_compraahora&utm_term=paso2_hilo_dental' },
    { id: 6, img: 'assets/img/Compras/IMG_12_2.png', link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=E&BC=124112&C=ER&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=gt_es_glister&utm_content=cta_compraahora&utm_term=paso2_hilo_dental' },
    { id: 7, img: 'assets/img/Compras/IMG_6_2.png', link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=E&BC=124112&C=ET&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=hn_es_glister&utm_content=cta_compraahora&utm_term=paso2_hilo_dental' },
    { id: 8, img: 'assets/img/Compras/IMG_7_2.png', link: 'https://www.amway.com.mx/product/hilo-dental-multiaccion/124112SP&utm_source=site_glister&utm_medium=home&utm_campaign=mx_glister&utm_content=cta_compraahora&utm_term=paso2_hilo_dental' },
    { id: 9, img: 'assets/img/Compras/IMG_8_2.png', link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=D&BC=124112&C=DS&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=pa_es_glister&utm_content=cta_compraahora&utm_term=paso2_hilo_dental' },
    { id: 10, img: 'assets/img/Compras/IMG_9_2.png', link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=124112&C=BO&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=uy_es_glister&utm_content=cta_compraahora&utm_term=paso2_hilo_dental' },
  ];
  public step3: Array<any> = [
    { id: 1, img: 'assets/img/Compras/IMG_1_2.png', link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=N&BC=124108&C=NL&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=ar_es_glister&utm_content=cta_compraahora&utm_term=paso3_enjuaguar' },
    { id: 2, img: 'assets/img/Compras/IMG_3_2.png', link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=124108&C=BM&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=cl_es_glister&utm_content=cta_compraahora&utm_term=paso3_enjuaguar' },
    { id: 3, img: 'assets/img/Compras/IMG_11_2.png', link: 'https://www.amway.com.co/product/Enjuague-Bucal-Multiacción/124108SP?utm_source=site_glister&utm_medium=home&utm_campaign=co_es_glister&utm_content=cta_compraahora&utm_term=paso3_enjuaguar' },
    { id: 4, img: 'assets/img/Compras/IMG_4_2.png', link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=D&BC=124108&C=DT&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=cr_es_glister&utm_content=cta_compraahora&utm_term=paso3_enjuaguar' },
    { id: 5, img: 'assets/img/Compras/IMG_5_2.png', link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=Q&BC=124108&C=QB&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=sv_es_glister&utm_content=cta_compraahora&utm_term=paso3_enjuaguar' },
    { id: 6, img: 'assets/img/Compras/IMG_12_2.png', link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=E&BC=124108&C=ER&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=gt_es_glister&utm_content=cta_compraahora&utm_term=paso3_enjuaguar' },
    { id: 7, img: 'assets/img/Compras/IMG_6_2.png', link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=E&BC=124108&C=ET&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=hn_es_glister&utm_content=cta_compraahora&utm_term=paso3_enjuaguar' },
    { id: 8, img: 'assets/img/Compras/IMG_7_2.png', link: 'https://www.amway.com.mx/product/enjuague-bucal-multiaccion/124108SP&utm_source=site_glister&utm_medium=home&utm_campaign=mx_glister&utm_content=cta_compraahora&utm_term=paso3_enjuaguar' },
    { id: 9, img: 'assets/img/Compras/IMG_8_2.png', link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=D&BC=124108&C=DS&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=pa_es_glister&utm_content=cta_compraahora&utm_term=paso3_enjuaguar' },
    { id: 10, img: 'assets/img/Compras/IMG_9_2.png', link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=124108&C=BO&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=uy_es_glister&utm_content=cta_compraahora&utm_term=paso3_enjuaguar' },
  ];
  public step4: Array<any> = [
    { id: 1, img: 'assets/img/Compras/IMG_1_2.png', link: 'https://www.amway.com.ar/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=N&BC=124111&C=NL&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=ar_es_glister&utm_content=cta_compraahora&utm_term=paso4_refrescar' },
    { id: 2, img: 'assets/img/Compras/IMG_3_2.png', link: 'https://www.amway.cl/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=124111&C=BM&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=cl_es_glister&utm_content=cta_compraahora&utm_term=paso4_refrescar' },
    { id: 3, img: 'assets/img/Compras/IMG_11_2.png', link: 'https://www.amway.com.co/product/Refrescante-Bucal-en-Spray/124111sp?utm_source=site_glister&utm_medium=home&utm_campaign=co_es_glister&utm_content=cta_compraahora&utm_term=paso4_refrescar' },
    { id: 4, img: 'assets/img/Compras/IMG_4_2.png', link: 'https://www.amway.co.cr/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=D&BC=124111&C=DT&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=cr_es_glister&utm_content=cta_compraahora&utm_term=paso4_refrescar' },
    { id: 5, img: 'assets/img/Compras/IMG_5_2.png', link: 'https://www.amway.com.sv/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=Q&BC=124111&C=QB&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=sv_es_glister&utm_content=cta_compraahora&utm_term=paso4_refrescar' },
    { id: 6, img: 'assets/img/Compras/IMG_12_2.png', link: 'https://www.amway.com.gt/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=E&BC=124111&C=ER&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=gt_es_glister&utm_content=cta_compraahora&utm_term=paso4_refrescar' },
    { id: 7, img: 'assets/img/Compras/IMG_6_2.png', link: 'https://www.amway.com.hn/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=E&BC=124111&C=ET&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=hn_es_glister&utm_content=cta_compraahora&utm_term=paso4_refrescar' },
    { id: 8, img: 'assets/img/Compras/IMG_7_2.png', link: 'https://www.amway.com.mx/product/refrescante-bucal-en-spray/124111SP&utm_source=site_glister&utm_medium=home&utm_campaign=mx_glister&utm_content=cta_compraahora&utm_term=paso4_refrescar' },
    { id: 9, img: 'assets/img/Compras/IMG_8_2.png', link: 'https://www.amway.com.pa/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=D&BC=124111&C=DS&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=pa_es_glister&utm_content=cta_compraahora&utm_term=paso4_refrescar' },
    { id: 10, img: 'assets/img/Compras/IMG_9_2.png', link: 'https://www.amway.com.uy/Store/Catalogue.aspx?show=PrdDetail&NavM=N&line=B&BC=124111&C=BO&Brand=&utm_source=site_glister&utm_medium=home&utm_campaign=uy_es_glister&utm_content=cta_compraahora&utm_term=paso4_refrescar' },
  ];

  public countries: Array<any> = [];
  public country: number = 0;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let from = params['from'];
      let utag_data = null;

      if(from && from == 1){
        this.countries = this.btnBuy;
        utag_data = environment.utagInfo.buyOralSystem;
      }else if(from && from == 2){
        this.countries = this.step1;
        utag_data = environment.utagInfo.buyProduct1;
      }else if(from && from == 3){
        this.countries = this.step2;
        utag_data = environment.utagInfo.buyProduct2;
      }else if(from && from == 4){
        this.countries = this.step3;
        utag_data = environment.utagInfo.buyProduct3;
      }else if(from && from == 5){
        this.countries = this.step4;
        utag_data = environment.utagInfo.buyProduct4;
      }else{
        this.countries = this.btnBuy;
        utag_data = environment.utagInfo.buyOralSystem;
      }

      window.utag_data = Object.assign(window.utag_data, utag_data);
      utag.view(window.utag_data);
      console.log(window.utag_data)

    });
  }

  openLink(link: string){
    window.open(link, '_blank');
  }
}
