import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { MustMatch } from './validate-password/validate-password';
import { ToastrService } from 'ngx-toastr';
import { PasswordRecoveryService } from 'src/app/service/password-recovery.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit{


  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: PasswordRecoveryService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          novaSenha: ['', [Validators.required, Validators.minLength(8)]],
          confirmarSenha: ['', Validators.required]
      }, {
          validator: MustMatch('NovaSenha', 'ConfirmarSenha')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      
      this.service.updatePassword( this.registerForm.value.novaSenha, this.activatedRoute.snapshot.params.id).subscribe((data: any) => {
        this.toastr.success(data.message, 'Salvo com sucesso');
      });


      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}