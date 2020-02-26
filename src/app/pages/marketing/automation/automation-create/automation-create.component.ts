import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutomationService } from 'src/app/service/automation.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-automation-create',
  templateUrl: './automation-create.component.html',
  styleUrls: ['./automation-create.component.css']
})
export class AutomationCreateComponent implements OnInit {

  public form: FormGroup;
  public busy = false; 
  isAniversarioSelected: boolean;
  isDiaSemanaSelected: boolean;
  isDiaMesSelected: boolean;
  isEmRiscoSelected: boolean;
  isUltimaFidelizacaoSelected: boolean;
  isdDisableSelected = true;

  ngOnInit() {
    //this.Escoder();


  }
  constructor(
    private router: Router,
    private service: AutomationService,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) {

    this.form = this.fb.group({

      conteudo: ['', Validators.compose([Validators.maxLength(160), Validators.required])],
      tipoAutomacao: ['', [Validators.required]],
      segmentacao: ['', [Validators.nullValidator]],
      segCustomizado: ['', [Validators.nullValidator]],
      diaSemana: ['', [Validators.nullValidator]],
      diaMes: ['', [Validators.nullValidator]],
      diasAntesAniversario: ['', [Validators.nullValidator]],
      tipoCanal: ['', [Validators.nullValidator]]

    });

  }

  submit() {

    this.service
      .createAutomation(this.form.value)
      .subscribe((data: any) => {
        this.busy = false;
        this.toastr.success('Salvo com sucesso');
      },
        (err) => {
          console.log(err);
          this.busy = false;
          this.toastr.error('Não foi Salvo');
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
    }

  }

}
  


