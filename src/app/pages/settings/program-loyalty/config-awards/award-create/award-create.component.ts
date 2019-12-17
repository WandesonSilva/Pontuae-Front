import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AwardService } from 'src/app/service/award.service';

@Component({
  selector: 'app-award-create',
  templateUrl: './award-create.component.html',
  styleUrls: ['./award-create.component.css'],

})

export class AwardCreateComponent  {
  public form: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private service: AwardService,
    private fb: FormBuilder,
    private toastr: ToastrService,
   
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
  

  submit() {

      this.service
        .createAward(this.form.value)
        .subscribe((data: any) => {
          this.busy = false;
          this.toastr.success(data.message,'Salvo com sucesso');
          this.backPage();
        },

          (err) => {
            console.log(err);
            this.busy = false;
          }
        );
        }
        backPage(){
          this.router.navigate(['/config/listProgram']);
        }
}

