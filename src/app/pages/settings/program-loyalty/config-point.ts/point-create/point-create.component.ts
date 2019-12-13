import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RulePointService } from 'src/app/service/rule-point.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-point-create',
  templateUrl: './point-create.component.html',
  styleUrls: ['./point-create.component.css']

})

export class PointCreateComponent implements OnInit {
  public form: FormGroup;
  public busy = false;
  // public description;

  constructor(


    private router: Router,
    private service: RulePointService,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) {
    this.form = this.fb.group({

      Nome: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.required
      ])],

      Descricao: ['', Validators.compose([Validators.maxLength(15), Validators.required])],
      Valor: ['', [Validators.required]],
      Ponto: ['', [Validators.required]],
      Validacao: ['', [Validators.required]],

    });
  }
  ngOnInit() {

    // tslint:disable-next-line: radix
    const IdUser = parseInt(Security.getUser().id);


    this.busy = true;
    this
      .service
      .getByIdProgramLoyalty(IdUser)
      .subscribe(
        (data: any) => {
          this.busy = false;
          this.form.controls[' Id '].setValue(data.Id);
          this.form.controls[' Nome '].setValue(data.Nome);
          this.form.controls[' Descricao '].setValue(data.Descricao);
          this.form.controls[' Valor '].setValue(data.Valor);
          this.form.controls[' Ponto '].setValue(data.Ponto);
          this.form.controls[' Validacao '].setValue(data.Validacao);
        },
        (err) => {
          console.log(err);
          this.busy = false;
        }
      );
  }

  submit() {

    this.service
        .createRule(this.form.value)
        .subscribe((data: any) => {
          this.busy = false;
          this.toastr.success('Salvo com sucesso');

        },

          (err) => {
            console.log(err);
            this.busy = false;
            this.toastr.success('Salvo com sucesso');
          }
        );

  }


}


