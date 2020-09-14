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
      NomeCompleto: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.required,
      ])],
      Email: ['', Validators.compose([
        Validators.minLength(3),
        Validators.required,
      ])],
      DataNascimento: ['', Validators.compose([
        
        Validators.required,
      ])],
 
      Sexo: ['', Validators.compose([
        Validators.required,
      ])],
      
      Cidade: ['', Validators.compose([
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
        var myDate = new Date(data.dataNascimento);

        this.form.controls.IdUsuario.setValue(id);
        this.form.controls.NomeCompleto.setValue(data.nomeCompleto);
        this.form.controls.Email.setValue(data.email);
        this.form.controls.Contato.setValue(data.contato);
         this.form.controls.Cidade.setValue(data.cidade);
        this.form.controls.Sexo.setValue(data.sexo);
        this.form.controls.DataNascimento.setValue(myDate.toISOString().substr(0, 10).split('-').reverse().join('/'));
         console.log(this.form.value);
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
        this.toastr.success('Obá, cadastro feito com sucesso! 💜');
        
      }, (err) => {
        this.carregando = false;
        console.log(err);
        this.toastr.warning(err.data);
      }
      );


  }
}