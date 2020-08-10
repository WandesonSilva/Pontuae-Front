import { User } from '../../../models/user.model';
import { Security } from '../../../utils/security.util';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public carregando = false;
  public customPatterns = { 0: { pattern: new RegExp('\[a-zA-Z\]') } };

  @Output() buttonClick = new EventEmitter();
  enable = false;
  constructor(
    private router: Router,
    private service: AuthenticationService,
    private fb: FormBuilder,

    private toastr: ToastrService,
  ) {
    this.form = this.fb.group({
      Email: ['', Validators.compose([
        Validators.required
      ])],
      Senha: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }


 

  displayBanner() {
    // tslint:disable-next-line: triple-equals
    this.enable = this.enable == false ? true : false;
    this.buttonClick.emit(this.enable);
  }


  ngOnInit() {
    const token = localStorage.getItem('tokenPontuaae');

    if (token) {
      console.log('altenticado');
    } else {
      localStorage.clear();
    }

   
  }



  submit() {
    this.carregando = true;
    this
      .service
      .authenticate(this.form.value)
      .subscribe(
        (data: any) => {
          this.carregando = false;
          this.setUser(data.user, data.token);
          this.toastr.success(data.mensage,'Seja bem vindo');
          
          this.router.navigate(['/']);
        },
        (err) => {
          this.carregando = false;
          console.log(err);
          this.toastr.warning(err.mensage, 'erro ao logar');
        }
      );
  }

  setUser(users, token) {
    Security.set(users, token);
   
  
  if( Security.getUser().claimValue == 'Administrador'){
    this.router.navigate(['']);
  }
  if( Security.getUser().claimValue == 'Funcionario'){
    this.router.navigate(['/home-employee/insert-point']);
  }
    

  }

  setCadatrarPerfil(validade) {

    this.router.navigate(['/addPerfil']);
  }
}
