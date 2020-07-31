import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CampaignService } from 'src/app/service/campaign.service';
import { ToastrService } from 'ngx-toastr';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-campaign-edit',
  templateUrl: './campaign-edit.component.html',
  styleUrls: ['./campaign-edit.component.css']
})
export class CampaignEditComponent implements OnInit {

  public form: FormGroup;
  public busy = false;
  public credit: any;
  public totalContact: number;
  public listContacts: string[];


  constructor(
   private router: Router,
   private service: CampaignService,
   private fb: FormBuilder,
   private toastr: ToastrService,
   private activatedRoute: ActivatedRoute,
   

 ) { 

  this.form = this.fb.group({

    Nome: ['', Validators.compose([
      Validators.minLength(8),
      Validators.maxLength(60),
      Validators.required])],

    DataEnvio: ['', Validators.compose([Validators.required])],
    Conteudo: ['', Validators.compose([Validators.required])],
    Segmentacao: ['', Validators.compose([Validators.required])],
    CampanhaAtiva: ['', Validators.compose([Validators.nullValidator])],
    QtdSelecionado: ['', Validators.compose([Validators.nullValidator])],
  });
  
}

 ngOnInit() {

  const idEmpresa = Security.getUser().idEmpresa;

  this.busy = true;
  this
     .service
     .getByIdCampaign(this.activatedRoute.snapshot.params.id, idEmpresa)  
     .subscribe(
       (data: any) => {
         this.busy = false;
         this.form.controls['Id'].setValue(data.Id);
         this.form.controls['Nome'].setValue(data.TipoAutomacao);
         this.form.controls['Conteudo'].setValue(data.Conteudo);
         this.form.controls['Segmentacao'].setValue(data.Segmentacao);
         this.form.controls['DataEnvio'].setValue(data.DiaSemana);         
       },
       (Falhar) => {
         console.log(Falhar);
         this.busy = false;
       },
     );

     this.getCreditSMSCampany();
 }

 submit() {
 this.busy = true;
     this.service
       .updateCampaign(this.form.value)
       .subscribe(
         (data: any) => {
         this.busy = false;
         this.toastr.success(data.message, 'Salvo com sucesso');

       },

         (err) => {
           console.log(err);
           this.busy = false;
           this.toastr.error('Não foi salvo');
         }
       );
       }

        getCreditSMSCampany(){
          this.service.getCreditSMS().subscribe(data => this.credit = data);
        }


       
  // onChangeGetContactsOfSegCustomization(eventValue: string) { 
  //   console.log(eventValue);
  //   const id = Security.getUser().idEmpresa;
  //   this.service.getListContacts(eventValue).subscribe(data => this.listContacts = data)
  //   // this.totalContact == this.listContacts.length;
  //   this.form.value.contatos == this.listContacts;

  // }

  // onChangeGetContactsOfSegmentation(eventValue: string) { //verifica se precisa tipa esse parâmetro
  //   console.log(eventValue);
  //   const id = Security.getUser().idEmpresa;
  //   this.service.getListContactsFromSegmentation(id, eventValue).subscribe(data => this.listContacts = data)
  //   this.totalContact == this.listContacts.length;
  //   this.form.value.contatos == this.listContacts;

  // }

        remove(){
          this.busy = true;
          const id = this.activatedRoute.snapshot.params.id;
          const idEmpresa = Security.getUser().idEmpresa;
          this.service.removerCampaign(id, idEmpresa)
          .subscribe(
            (data: any) => {
            this.busy = false;
            this.toastr.success(data.message, 'Excluido');
   
          },
   
            (err) => {
              console.log(err);
              this.busy = false;
              this.toastr.error('Error');
            }
          );
        }

}
