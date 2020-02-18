import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AwardService } from 'src/app/service/award.service';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-award-create',
  templateUrl: './award-create.component.html',
  styleUrls: ['./award-create.component.css'],

})

export class AwardCreateComponent implements OnInit {
  ngOnInit() {
    console.log(this.form.value);
  }
  public form: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private service: AwardService,
    private fb: FormBuilder,
    private toastr: ToastrService,

  ) {
    this.form = this.fb.group({

      IdEmpresa: ['', null],

      Nome: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required
      ])],

      Descricao: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(150),
        Validators.required
      ])],
      QtdPontos: ['', Validators.compose([
        Validators.required
      ])],
    });

  }


  submit() {
    const id = Security.getUser().idEmpresa;
    this.form.value.IdEmpresa = id;

    console.log(this.form.value);


    this.service
      .createAward(this.form.value)
      .subscribe((data: any) => {
        console.log(data);
        this.busy = false;
        this.backPage();
        this.toastr.success(data.message, 'Salvo com sucesso');
       
      }, (err) => {
        console.log(err);
        this.busy = false;
      }
      );
  }
  backPage() {
    this.router.navigate(['/Config/ListAward']);  }
}

