import { Component, OnInit, EventEmitter } from '@angular/core';
import { Security } from 'src/app/utils/security.util';
import { RulePointService } from 'src/app/service/rule-point.service';
import { Point } from 'src/app/models/points.models';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-point-edit',
  templateUrl: './point-edit.component.html',
  styleUrls: ['./point-edit.component.css']
})
export class PointEditComponent implements OnInit {

  public form: FormGroup;
  public busy = false;
  //  event: EventEmitter<any> = new EventEmitter();


  constructor(
    private router: Router,
    private service: RulePointService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,

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
    this.busy = true;
    this.GetProfile();
  }

  submit() {
    this.busy = true;
    this.service
      .updateProgramLoyalty(this.form.value)
      .subscribe(
        (data: any) => {
          this.busy = false;
          this.toastr.success(data.message, 'Salvo com sucesso');
          this.router.navigate(['/']);

        },

        (err) => {
          console.log(err);
          this.busy = false;
          this.toastr.success('Salvo com sucesso');
        }
      );
  }

  GetProfile() {

    const idUser = Security.getUser().id;

    this
      .service
      .getByIdProgramLoyalty(idUser)
      .subscribe(
        (data: any) => {
          this.busy = false;
          this.form.controls.Id.setValue(data.Id);
          this.form.controls.Nome.setValue(data.Nome);
          this.form.controls.Descricao.setValue(data.Descricao);
          this.form.controls.Valor.setValue(data.Valor);
          this.form.controls.Ponto.setValue(data.Ponto);
          this.form.controls.Validacao.setValue(data.Validacao);
        },
        (err) => {
          console.log(err);
          this.busy = false;
        }
      );
  }

  backPage() {
    this.router.navigate(['/listProgram']);
  }
}

