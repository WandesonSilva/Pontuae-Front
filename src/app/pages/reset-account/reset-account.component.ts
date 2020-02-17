import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Security } from '../../utils/security.util';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-reset-account',
  templateUrl: './reset-account.component.html',
  styleUrls: ['./reset-account.component.css']
})
export class ResetAccountComponent implements OnInit {
  public form: FormGroup;
  public carregando = false;
  public customPatterns = { 0: { pattern: new RegExp('\[a-zA-Z\]') } };
  public claimOfUser;
  public User;

  enable = false;
  constructor(
    private router: Router,
    private service: AuthenticationService,
    private fb: FormBuilder,

    private toastr: ToastrService,
  ) {
    this.form = this.fb.group({
      IdEmpresa: ['', Validators.compose([
        
      ])],
      IdCliente: ['', Validators.compose([
       
      ])],
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
    this.User = Security.getUser();
    this.claimOfUser = this.User.claimValue === 'Admin';
  }

  submit() {
    const user = Security.getUser();
    this.carregando = true;
    this
      .service
      .UpdateUsuario(this.form.value)
      .subscribe(
        (data: any) => {
          this.form.controls.IdCliente.setValue(user.idCliente);
          this.form.controls.IdEmpresa.setValue(user.idEmpresa);
          this.carregando = false;

          this.toastr.success(data.mensage);
        },
        (err) => {
          this.carregando = false;
          console.log(err);
          this.toastr.warning(err.data, 'erro ao logar');
        }
      );
  }



  ToReturn() {
    if (this.claimOfUser) {

      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/home-client']);
    }
  }

}
