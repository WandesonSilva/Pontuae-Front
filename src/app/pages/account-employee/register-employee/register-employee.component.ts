import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserEmployeeService } from 'src/app/service/user-employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {
  public form: FormGroup;
  public carregando = false;
  public message: string;
  constructor(
    private router: Router,
    private service: UserEmployeeService,
    private toastr: ToastrService,
    private fb: FormBuilder

  ) {
    this.form = this.fb.group({
      NomeCompleto: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(35),
        Validators.required,
      ])],
      Email: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.required,
      ])],
      
      Senha: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.required,
      ])],
      TipoFuncionario: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  
  }

  submit() {
    this.carregando = true;
    this.service
      .createUserEmployee(this.form.value)
      .subscribe(
        (data: any) => {
          console.log(this.form.value);
          this.toastr.info(data.dado.message);

        },
        (err: any) => {
          this.toastr.warning(err.dado.message);
          console.log(this.form.value);
        }
      );
  }
}