import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/company.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService, Toast } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pre-register',
  templateUrl: './pre-register.component.html',
  styleUrls: ['./pre-register.component.css']
})
export class PreRegisterComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private service: DataService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      nomeCliente: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(40),
        Validators.required
      ])],
      telefone: ['', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.required
      ])],

    });
  }

  ngOnInit() {
  }

  submit() {
    this
      .service
      .preRegister(this.form.value)
      .subscribe(
        (data: any) => {
          this.toastr.success(data, 'Cadastrado com sucesso');
        }, (err) => {
          this.toastr.success(err, 'Erro ao cadastrar');
        }
      );
  }

}
