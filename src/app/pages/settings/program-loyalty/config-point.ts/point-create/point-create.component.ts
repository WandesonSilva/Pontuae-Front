import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RulePointService } from 'src/app/service/rule-point.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Security } from '../../../../../utils/security.util';
import { RuleProgram } from '../../../../../models/ruleProgram';


@Component({
  selector: 'app-point-create',
  templateUrl: './point-create.component.html',
  styleUrls: ['./point-create.component.css']

})

export class PointCreateComponent implements OnInit {

  public form: FormGroup;
  public busy = false;
  public description;

  constructor(
    private router: Router,
    private service: RulePointService,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) {

    this.form = this.fb.group({
      Id: ['', [Validators.required]],
      Valor: ['', [Validators.required]],
      Ponto: ['', [Validators.required]],
      Validade: ['', [Validators.required]],

    });


  }
  ngOnInit() {
    this.GetRule();
  }

  GetRule() {
    const id = Security.getUser().id;
    this
      .service
      .getByIdProgramLoyalty(id)
      .subscribe((data: any) => {

        this.form.controls.Id.setValue(id);
        this.form.controls.Valor.setValue(data.valor);
        this.form.controls.Ponto.setValue(data.ponto);
        this.form.controls.Validade.setValue(data.validade);
        console.log(data);
      }, err => {
        console.log(err);
      });
  }

  submit() {

    this.service
      .updateProgramLoyalty(this.form.value)
      .subscribe((data: any) => {
        this.busy = false;
        this.toastr.success('Salvo com sucesso');
        this.backPage();
      },
        (err) => {
          console.log(err);
          this.busy = false;
          this.toastr.success('Salvo com sucesso');
        }
      );
  }

  backPage() {
    this.router.navigate(['/config/listProgram']);
  }

}



