import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Point } from 'src/app/models/points.models';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-form-point',
  templateUrl: './form-point.component.html',
  styleUrls: ['./form-point.component.css']
})
export class FormPointComponent implements OnInit {

  public form: FormGroup;
  public busy = false;
  @Input() configPoint: Point = <Point>{};
  @Output() outputConfigPoint = new EventEmitter();

  constructor(
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

  // tslint:disable-next-line: no-angle-bracket-type-assertion
  submit() {
    this.configPoint = this.form.value;
    this.outputConfigPoint.emit(this.configPoint);
  }

  ngOnInit() {
    this.form.controls[' Id '].setValue(this.configPoint.Id);
    this.form.controls[' Nome '].setValue(this.configPoint.nome);
    this.form.controls[' Descricao '].setValue(this.configPoint.descricao);
    this.form.controls[' Valor '].setValue(this.configPoint.valor);
    this.form.controls[' Ponto '].setValue(this.configPoint.ponto);
    this.form.controls[' Validacao '].setValue(this.configPoint.validacao);
  }
}
