import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AutomationService } from 'src/app/service/automation.service';
import { ToastrService } from 'ngx-toastr';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-automation-edit',
  templateUrl: './automation-edit.component.html',
  styleUrls: ['./automation-edit.component.css']
})
export class AutomationEditComponent implements OnInit {

  public form: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private service: AutomationService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,

  ) {
    this.form = this.fb.group({

      Conteudo: ['', Validators.compose([Validators.maxLength(160), Validators.required])],
      TipoAutomacao: ['', [Validators.required]],
      Segmentacao: ['', [Validators.nullValidator]],
      SegCustomizado: ['', [Validators.nullValidator]],
      DiaSemana: ['', [Validators.nullValidator]],
      DiaMes: ['', [Validators.nullValidator]],
      DiasAntesAniversario: ['', [Validators.nullValidator]],
      TipoCanal: ['', [Validators.nullValidator]]

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
}

