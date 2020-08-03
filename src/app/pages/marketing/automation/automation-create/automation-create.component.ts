import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutomationService } from 'src/app/service/automation.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-automation-create',
  templateUrl: './automation-create.component.html',
  styleUrls: ['./automation-create.component.css']
})
export class AutomationCreateComponent implements OnInit {

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
    public  fb: FormBuilder,
    private toastr: ToastrService,
  ) {
    
    this.form = this.fb.group({
      tipoAutomacao:['', Validators.compose([ Validators.required ])],
      segmentacao: ['', Validators.compose([ null ])],
      segCustomizado:['', Validators.compose([  null ])],
      tempoPorDiaDoMes: [ null],
      tempoPorDia: [ null],
      tempoPorDiaDaSemana: ['', Validators.compose([ ])],
      conteudo: ['', Validators.compose([Validators.maxLength(160), Validators.required])],
      diasAntesAniversario: [ null],
   

    });

  }
  

  ngOnInit() {
  }
  // onReset(): void { this.resetForm(); }

  // resetForm(value: any = undefined): void {
  //   this.form.reset(value);
  
  // }
  

  
  submit() {

   
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
      .createAutomation(this.form.value)      
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
  


