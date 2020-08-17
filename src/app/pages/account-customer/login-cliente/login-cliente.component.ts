import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Route } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Security } from 'src/app/utils/security.util';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {
  public form: FormGroup;
  public carregando = false;
  public customPatterns = { 0: { pattern: new RegExp('\[a-zA-Z\]') } };


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

  ngOnInit() {
    const token = localStorage.getItem('tokenPontuaae');

    if(token) {

      console.log(' altenticado ');
      console.log(Security.getUser());
      
    } else {
      localStorage.clear();
    }



  }

 
  submit() {
    this.carregando = true;
    this
      .service
      .authenticateClient(this.form.value)
      .subscribe(
        (data: any) => {
          this.carregando = false;
          this.setUser(data.user, data.token);
          this.toastr.success(data.menssage);
         

        },
        (err) => {
          this.carregando = false;
          console.log(err);
          this.toastr.warning('E-mail ou senha está incorreto');
        }
      );
  }

  setUser(user, token) {
    Security.set(user, token);
    this.router.navigate(['/home-client/']);
  }

  setCadatrarPerfil(validade) {

    this.router.navigate(['/addPerfil']);
  }
}
