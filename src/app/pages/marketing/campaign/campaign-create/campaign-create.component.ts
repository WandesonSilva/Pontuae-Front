import { CampaignService } from 'src/app/service/campaign.service';
import { FormGroup, FormBuilder, Validators, Form, FormArray } from '@angular/forms';
import { Router, convertToParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Security } from 'src/app/utils/security.util';
import { AwardService } from 'src/app/service/award.service';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.models';
import { Campaign } from 'src/app/models/campaign.models';
import { ParseSpan } from '@angular/compiler';
import {DateAdapter,   NativeDateAdapter,   MAT_DATE_FORMATS, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/pages/shared/format-datepicker';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-campaign-create',
  templateUrl: './campaign-create.component.html',
  styleUrls: ['./campaign-create.component.css'],
  providers: [ MatDatepickerModule, MatNativeDateModule
   
  ]
})
export class CampaignCreateComponent implements OnInit {
  public form: FormGroup;
  public busy = false;
  public description;
  public qtdSelecionados: any[];
  public credit: number;
  public showInputAgenda: boolean;



  constructor(
    private router: Router,
    private service: CampaignService,
    private fb: FormBuilder,
    private builder: FormBuilder,
    private toastr: ToastrService,
  ) {

    this.form = this.fb.group({

      nome: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(60),
        Validators.required])],
      
      dataEnvio: [],
      horaEnvio: [],
      conteudo: ['', Validators.compose([Validators.maxLength(700)])],
      segCustomizado: ['', Validators.compose([Validators.nullValidator])],
    
    });

  }
  ngOnInit() {
   this.service.getCreditSMS().subscribe(data => this.credit = data);
   this.showInputAgenda = true 

  }

  onChangeGetContactsOfSegCustomization(eventValue: string) {
    this.form.value.segCustomizado = eventValue;
    const id = Security.getUser().idEmpresa;
    this.service.a(id, eventValue).subscribe(r => {
    this.qtdSelecionados = r;
    });
  }
  //1 campo desativado, e nullos
  //2 campo ativa 
  checkBoxAgend() {  
    // var result =this.form.value.agendamentoAtivo != true ? this.showInputAgenda = true : this.showInputAgenda = false;
  //  this.form.value.dataEnvio = '';
  //  this.form.value.horaEnvio = '';
  }

  submit() {
     const t = this.form.value.horaEnvio;
     var h = new Object(t);  
    this.form.value.horaEnvio = h;
    
    this.service
      .createCampaign(this.form.value)
      .subscribe((data: any) => {
        this.busy = false;
        this.toastr.success(data.mensage, '');
        
        this.backPage();
      },
        (err) => {
          console.log(err);
          this.busy = false;
          this.toastr.error(err.mensage, '');
        }
      );
  }


  backPage() {
    this.router.navigate(['/']);
  }


  // setarContact() {  AVERIGUAR ESTE METODO

  //   // this.form.get('te').setValue(['testes'])
  //   this.form.value.te.setValue([this.testes]);
  // }

//   InseriContato(): void {
 
//     this.form.value.contatos =this.testes;
//     console.log(this.form.value.contatos);
// }

  // onChangeGetContactsOfSegmentation(eventValue: string) { //verifica se precisa tipa esse parâmetro
  //   console.log(eventValue);
  //   const id = Security.getUser().idEmpresa;
  //   // this.service.getListContactsFromSegmentation(id, eventValue).subscribe(data => this.listContacts = data)
  //   this.service.getListContactsFromSegmentation(id, eventValue)
  //   this.totalContact == this.listContacts.length;
  //   this.form.value.contatos == this.listContacts;

  // 



    




}