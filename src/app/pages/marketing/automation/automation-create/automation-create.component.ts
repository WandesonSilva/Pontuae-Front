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
    if (selected == "0") {
      this.isAniversarioSelected = true;
      this.isDiaMesSelected = false;
      this.isDiaSemanaSelected = false;
    }

    if (selected == "1"){
      this.isDiaMesSelected = true;
      this.isAniversarioSelected = false;
      this.isDiaSemanaSelected = false;
    }

    if (selected == "2"){
     this.isDiaSemanaSelected = true;
     this.isDiaMesSelected = false;
     this.isAniversarioSelected = false;
    }

    if(selected == "3"){
      this.isDiaSemanaSelected = false;
      this.isDiaMesSelected = false;
      this.isAniversarioSelected = false;
    }

  }
}
  


