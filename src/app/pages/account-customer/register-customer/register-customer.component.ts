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


  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: CustomerService,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient,
  ) { 
        this.form = this.fb.group({

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
      DataNascimento: ['', Validators.compose([
        Validators.required
      ])],
      Sexo: ['', Validators.compose([
        Validators.required
      ])],
      Cpf: ['', Validators.compose([
        Validators.required
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
    this
      .service
      .cadastrarCliente(this.form.value)
      .subscribe((data: any) => {

      }, (err) => {
        console.log(err);
      }
      );
  }
}
