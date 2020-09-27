import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserEmployeeService } from 'src/app/service/user-employee.service';
import { ToastrService } from 'ngx-toastr';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {
  public form: FormGroup;
  // public carregando = false;
  public message: string;
  constructor(
    private router: Router,
    private service: UserEmployeeService,
    private toastr: ToastrService,
    private fb: FormBuilder

  ) {
    this.form = this.fb.group({

      idEmpresa: [null],
      contato: ['', Validators.compose([
        Validators.required
      ])],
      nomeCompleto: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(35),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.required
      ])],
    
      senha: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(12),
        Validators.required
      ])],
      controleUsuario: ['', Validators.compose([
        
        Validators.required
      ])],
   
    });
  }

  ngOnInit() {
   
  }

    submit() {
    // this.carregando = true;
    this.form.value.idEmpresa = Security.getUser().idEmpresa;
      let valueSelect =  parseInt(this.form.value.controleUsuario);
    this.form.value.controleUsuario = valueSelect;
    console.log(this.form.value);
     this.service
      .createUserEmployee(this.form.value)
      .subscribe(
        (data: any) => {
          if(data.sucesso != true){
            this.toastr.info(data.dado[0].message, data.mensage)
          } if (data.sucesso === true){
            this.toastr.success(data.mensage, '');
            this.backPage();
          }
        }, (err) => {
          console.log(err);
          this.toastr.warning(err.mensage, '');
        });
      
  }
  backPage() {
    this.router.navigate(['/list-employee']);  }
}