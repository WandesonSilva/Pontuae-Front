import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ForgotPasswordService } from 'src/app/service/forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public form: FormGroup;

  constructor(
  
    private service: ForgotPasswordService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    

  ) {
    this.form = this.fb.group({

      Email: ['', Validators.compose([
        Validators.minLength(4),
        Validators.required
      ])],
    }
    );
  }

  ngOnInit() {
  }

  Submit() {
       this
      .service
      .post(this.form.value)
      .subscribe((data: any) => {     

        },
        (err) => {
          this.toastr.success('Acesse sua Conta do Gmail ');
        }
      );

  }


}
