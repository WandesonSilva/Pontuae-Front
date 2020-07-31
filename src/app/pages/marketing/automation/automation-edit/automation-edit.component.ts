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
  isAniversarioSelected: boolean;
  isDiaSemanaSelected: boolean;
  isDiaMesSelected: boolean;
  isEmRiscoSelected: boolean;
  isUltimaFidelizacaoSelected: boolean;
  isdDisableSelected = true;

  constructor(
    private router: Router,
    private service: AutomationService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,

  ) {
    this.form = this.fb.group({
      
      conteudo: ['', Validators.compose([Validators.maxLength(160), Validators.required])],
      tipoAutomacao: ['', [Validators.required]],
      segmentacao: ['', [Validators.nullValidator]],
      segCustomizado: ['', [Validators.nullValidator]],
      tempoPorDiaDaSemana: ['', [Validators.nullValidator]],
      tempoPorDiaDoMes: ['', [Validators.nullValidator]],
      diasAntesAniversario: ['', [Validators.nullValidator]],
      tipoCanal: ['', [Validators.nullValidator]],
      tempoPorDia: ['', [Validators.nullValidator]],
      aposUltimaFidelizacao: ['', [Validators.nullValidator]]
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
          this.busy = false;
          this.form.controls['id'].setValue(data.Id);
          this.form.controls['tipoAutomacao'].setValue(data.TipoAutomacao);
          this.form.controls['conteudo'].setValue(data.Conteudo);
          this.form.controls['segmentacao'].setValue(data.Segmentacao);
          this.form.controls['segCustomizado'].setValue(data.SegCustomizado);
          this.form.controls['diaSemana'].setValue(data.DiaSemana);
          this.form.controls['diaMes'].setValue(data.DiaMes);
          this.form.controls['tipoCanal'].setValue(data.TipoCanal);
          this.form.controls['diasAntesAniversario'].setValue(data.DiasAntesAniversario);
          this.form.controls['tempoPorDia'].setValue(data.TempoPorDia);
          this.form.controls['aposUltimaFidelizacao'].setValue(data.AposUltimaFidelizacao);
        },
        (err) => {
          console.log(err);
          this.busy = false;
        }
      );
  }

  submit() {
    this.busy = true;
    this.service
      .updateAutomation(this.form.value)
      .subscribe(
        (data: any) => {
          this.busy = false;
          this.toastr.success(data.message, 'Salvo com sucesso');
          this.router.navigate(['/']);

        },

        (err) => {
          console.log(err);
          this.busy = false;
          this.toastr.error('Não foi salvo');
        }
      );
  }
   
  alertDeleteAutomation(id: any) {
    const idAutomation = this.form.value.Id;
    Swal.fire({
      text: "Deseja remover esta automação?",
      showCancelButton: true,
      confirmButtonColor: '#17CC8D',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confimar'
    }).then((result) => {
      if (result.value) {
        this.service.deleteAutomation(idAutomation)
        
        .subscribe((data: any) => {
          
          if(data.sucesso != true){
            this.toastr.info(data.mensage)
          } if (data.sucesso === true){
            this.toastr.success(data.mensage, '');
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
  




