import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../../service/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
      IdUsuario: ['', Validators.compose([
        Validators.required,
      ])],
      Nome: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required,
      ])],
      Email: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required,
      ])],
      Telefone: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required,
      ])],
    });
  }

  ngOnInit() {
  }


  Submit() {
    // this.carregando = true;
    //this
    //  .service
    //  .UpdatePerfil(this.form.value)
    //  .subscribe((data: any) => {
    //    this.carregando = false;
    //    this.toastr.success('Salvo com sucesso');
    //    this.router.navigate(['/']);
    //  }, (err) => {
    //   this.carregando = false;
    //   console.log(err);
    //    this.toastr.warning(err.data);
    //  }
    //  );


  }
}