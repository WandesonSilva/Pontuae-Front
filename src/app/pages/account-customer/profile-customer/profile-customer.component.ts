import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../../service/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Security } from '../../../utils/security.util';

@Component({
  selector: 'app-profile-customer',
  templateUrl: './profile-customer.component.html',
  styleUrls: ['./profile-customer.component.css']
})
export class ProfileCustomerComponent implements OnInit {
  public form: FormGroup;
  public carregando = false;
  public message: string;
  constructor(
    private router: Router,
    private service: CustomerService,
    private toastr: ToastrService,
    private fb: FormBuilder

  ) {
    this.form = this.fb.group({
      IdUsuario: [''],
      Nome: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required,
      ])],
      Email: ['', Validators.compose([
        Validators.minLength(3),
        Validators.required,
      ])],
      DataNascimento: ['', Validators.compose([
        
        Validators.required,
      ])],
      Contato: ['', Validators.compose([
        Validators.required,
      ])],
    });
  }

  ngOnInit() {
    this.GetCustomer();
  }

  GetCustomer() {
    const id = Security.getUser().id;
    this
      .service
      .getProfileCustomer(id)
      .subscribe((data: any) => {
        this.form.controls.IdUsuario.setValue(id);
        this.form.controls.Nome.setValue(data.nome);
        this.form.controls.Email.setValue(data.email);
        this.form.controls.Contato.setValue(data.telefone);
        console.log(data);
      },
        (err) => {
          console.log(err);
        });
  }


  Submit() {
    this.carregando = true;
    this.form.value.IdUsuario = Security.getUser().id;
    this
      .service
      .UpdateProfileCustomer(this.form.value)
      .subscribe((data: any) => {
        this.carregando = false;
        this.toastr.success('Salvo com sucesso');
        
      }, (err) => {
        this.carregando = false;
        console.log(err);
        this.toastr.warning(err.data);
      }
      );


  }
}