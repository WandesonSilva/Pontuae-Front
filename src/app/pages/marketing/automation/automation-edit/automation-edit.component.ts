import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AutomationService } from 'src/app/service/automation.service';
import { ToastrService } from 'ngx-toastr';
import { Security } from 'src/app/utils/security.util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-automation-edit',
  templateUrl: './automation-edit.component.html',
  styleUrls: ['./automation-edit.component.css']
})
export class AutomationEditComponent implements OnInit {

 
  public form: FormGroup;
  public busy = false; 
  public isAniversarioSelected: boolean;
  public isDiaSemanaSelected: boolean;
  public isDiaMesSelected: boolean;
  public isEmRiscoSelected: boolean;
  public isUltimaFidelizacaoSelected: boolean;
  public isdDisableSelected = true;
  public number = 0;

  constructor(
    private router: Router,
    private service: AutomationService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,

  ) {
    this.form = this.fb.group({
      id:[null],
      tipoAutomacao:['', Validators.compose([ Validators.required ])],
      segmentacao: ['', Validators.compose([ null ])],
      segCustomizado:['', Validators.compose([  null ])],
      tempoPorDiaDoMes: [ null],
      tempoPorDia: [ null],
      tempoPorDiaDaSemana: ['', null],
      conteudo: ['', Validators.compose([Validators.maxLength(160), Validators.required])],
      diasAntesAniversario: [ null],
    });


  }

  ngOnInit() {

    const idEmpresa = Security.getUser().idEmpresa;

    this.busy = true;
    this
      .service
      .getByIdAutomation(this.activatedRoute.snapshot.params.id, idEmpresa)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.busy = false;
        
          this.form.controls.tipoAutomacao.setValue(data.tipoAutomacao);
          this.form.controls.conteudo.setValue(data.conteudo);
          this.form.controls.segmentacao.setValue(data.segmentacao);
          this.form.controls.segCustomizado.setValue(data.segCustomizado);
          this.form.controls.tempoPorDia.setValue(data.tempoPorDia);
          this.form.controls.tempoPorDiaDaSemana.setValue(data.tempoPorDiaDaSemana);
          this.form.controls.tempoPorDiaDoMes.setValue(data.tempoPorDiaDoMes);
          this.form.controls.diasAntesAniversario.setValue(data.diasAntesAniversario);        
        },
        (err) => {
          console.log(err);
          this.busy = false;
        }
      );
  }

 

  submit() {
    const valor_id =  this.activatedRoute.snapshot.params.id;
    this.form.value.id =  parseInt(valor_id);
    
    if(this.form.value.tempoPorDia == null  ){
      this.form.value.tempoPorDia = 0;
    }
    

    if(this.form.value.diasAntesAniversario  == null){
      this.form.value.diasAntesAniversario = 0;
    }
  
    if(this.form.value.tempoPorDiaDoMes  == null){
      this.form.value.tempoPorDiaDoMes = 0 ;
    }
    console.log(this.form.value);
    this.service
      .updateAutomation(this.form.value)      
      .subscribe((data: any) => {
       
        this.busy = false;
        console.log(data)
        if(data.sucesso != true){
          this.toastr.info(data.mensage)
        } if (data.sucesso === true){
          this.toastr.success(data.mensage, '');
                   
          this.router.navigate(['/marketing/list-automation']);
       
        }
      },
        (err) => {
          console.log(err);
          this.busy = false;
          this.toastr.error(err.mensage);
        }
      );
  }
   
  alertDesableAutomation() {
    const idEmpresa = Security.getUser().idEmpresa;
    const id =  this.activatedRoute.snapshot.params.id;

    Swal.fire({
      text: "Deseja desativa esta automação?",
      showCancelButton: true,
      confirmButtonColor: '#17CC8D',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confimar'
    }).then((result) => {
      if (result.value) {
        this.service.desableAutomation(id, idEmpresa)
        
        .subscribe((data: any) => {
          
          if(data.sucesso != true){
            this.toastr.info(data.mensage)
          } if (data.sucesso === true){
            this.toastr.success(data.mensage, '');
            this.router.navigate(['/marketing/list-automation']);
          }

        }, 
        (err) => {
          console.log(err);
          this.toastr.warning(err.mensage);
        });
      
      }
    });
  }
  
  selectInput(event) {
    let selected = event.target.value;
    if (selected == "Aniversariante") {
      this.isAniversarioSelected = true;
      this.isdDisableSelected = true;
      this.isDiaMesSelected = false;
      this.isDiaSemanaSelected = false;
      this.isEmRiscoSelected = false;
      this. isUltimaFidelizacaoSelected = false;
    }

    if (selected == "Dia do Mes"){
      this.isDiaMesSelected = true;
      this.isdDisableSelected = true;
      this.isAniversarioSelected = false;
      this.isDiaSemanaSelected = false;
      this.isEmRiscoSelected = false;
      this.isUltimaFidelizacaoSelected = false;
    }

    if (selected == "Dia da semana"){
     this.isDiaSemanaSelected = true;
     this.isdDisableSelected = true;
     this.isDiaMesSelected = false;
     this.isAniversarioSelected = false;
     this.isEmRiscoSelected = false;
     this.isUltimaFidelizacaoSelected = false;
    }

    if(selected == "Em Risco"){
      this.isEmRiscoSelected = true;
      this.isdDisableSelected = true;
      this.isDiaSemanaSelected = false;
      this.isDiaMesSelected = false;
      this.isAniversarioSelected = false;
      this.isUltimaFidelizacaoSelected = false;
    }

    if(selected == "Ultima fidelizacao"){
      this.isUltimaFidelizacaoSelected = true;
      this.isdDisableSelected = true;
      this.isDiaSemanaSelected = false;
      this.isDiaMesSelected = false;
      this.isAniversarioSelected = false;
    }

    if(selected == "Quinze dias"){
      this.isDiaSemanaSelected = false;
      this.isDiaMesSelected = false;
      this.isAniversarioSelected = false;
      this.isdDisableSelected = false;
      this.isUltimaFidelizacaoSelected = false;
    }

    if(selected == "Trinta dias"){
      this.isDiaSemanaSelected = false;
      this.isDiaMesSelected = false;
      this.isAniversarioSelected = false;
      this.isdDisableSelected = false;
      this.isUltimaFidelizacaoSelected = false;
    }
  }

}
  




