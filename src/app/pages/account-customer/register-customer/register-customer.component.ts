import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/service/customer.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css'],
 })
export class RegisterCustomerComponent implements OnInit {
  public carregando = false;

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: CustomerService,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient,
  ) { 
        this.form = this.fb.group({
        
      ClaimType: ['', null],
      ClaimValue: ['', null],
      IdUsuario: ['', null],
      Email: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(55),
        Validators.required
      ])],
      Senha: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(30),
        Validators.required
      ])],
      Nome: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(60),
        Validators.required
      ])],
      DataNascimento: [''],
      Cidade: ['',, Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11),
      ])],
      Cpf: ['', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11),
      ])],
      Telefone: ['', Validators.compose([
        Validators.required
      ])],

    }
    )
  }

  ngOnInit() {
  }

  submit() {
    this.carregando = true;
    this
      .service
      .cadastrarCliente(this.form.value)
      .subscribe(
        (data: any) => {
        console.log(this.form.value);
      }, (err) => {
        console.log(err);
        this.carregando = false;
        console.log(err);
        this.toastr.warning(err.dado.message, 'Erro no dados');
      }
      );
  }

  ToLogin(){
    this.router.navigate(['/loginCliente']);
  }
}
