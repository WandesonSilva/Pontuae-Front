import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AwardService } from 'src/app/service/award.service';
import { Security } from 'src/app/utils/security-util';

@Component({
  selector: 'app-award-create',
  templateUrl: './award-create.component.html',
  styleUrls: ['./award-create.component.css'],

})

export class AwardCreateComponent implements OnInit {
  public form: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private service: AwardService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({

      Nome: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.required
      ])],

      Descricao: ['', [Validators.required]],
      PontosNecessario: ['', [Validators.required]],

    });

  }
  ngOnInit() {

    // tslint:disable-next-line: radix
    const IdUser = parseInt(Security.getUser().id);

    this.busy = true;
    this
      .service
      .getByIdAward(IdUser)
      .subscribe(
        (data: any) => {
          this.busy = false;
          this.form.controls[' Id '].setValue(data.Id);
          this.form.controls[' Nome '].setValue(data.Nome);
          this.form.controls[' Descricao '].setValue(data.Descricao);
          this.form.controls[' PontosNecessario '].setValue(data.PontosNecessario);



        },
        (err) => {
          console.log(err);
          this.busy = false;
        }
      );
  }

  submit() {

      this.service
        .createAward(this.form.value)
        .subscribe((data: any) => {
          this.busy = false;
          this.toastr.success('Salvo com sucesso');
        },

          (err) => {
            console.log(err);
            this.busy = false;
          }
        );
        }
}
