import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService, Toast } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Security } from 'src/app/utils/security.util';
import { PointService } from 'src/app/service/point.service';

@Component({
  selector: 'app-pre-register',
  templateUrl: './pre-register.component.html',
  styleUrls: ['./pre-register.component.css']
})
export class PreRegisterComponent implements OnInit {
//   public form: FormGroup;
//   constructor(
//     private service: DataService,
//     private fb: FormBuilder,
//     private router: Router,
//     private toastr: ToastrService,
//     private http: HttpClient
//   ) {
//     this.form = this.fb.group({
//       nomeCliente: ['', Validators.compose([
//         Validators.minLength(5),
//         Validators.maxLength(40),
//         Validators.required
//       ])],
//       telefone: ['', Validators.compose([
//         Validators.minLength(11),
//         Validators.maxLength(11),
//         Validators.required
//       ])],

//     });
//   }

//   ngOnInit() {
//   }

//   submit() {
//     this
//       .service
//       .preRegister(this.form.value)
//       .subscribe(
//         (data: any) => {
//           this.toastr.success(data, 'Cadastrado com sucesso');
//         }, (err) => {
//           this.toastr.success(err, 'Erro ao cadastrar');
//         }
//       );
//   }

// }

public form: FormGroup;

constructor(
  private fb: FormBuilder,
  private service: PointService,
  private router: Router,
  private toastr: ToastrService,
) {

  this.form = this.fb.group({
    IdEmpresa: ['', Validators.compose([
    ])],
    IdUsuario: ['',Validators.compose([
    ])],
    Telefone: ['', Validators.compose([
      Validators.required
    ])],
    ValorInfor: ['', Validators.compose([
      Validators.required
    ])],

  });
 }

ngOnInit() {
}

Submit(){

  const a = Security.getUser();
     
  this.form.value.IdEmpresa = a.idEmpresa;
  this.form.value.IdUsuario = a.idUsuario;
      console.log(a);
  this
  .service
  .pointPost(this.form.value)
  .subscribe((data: any) => {
    
    this.toastr.success('Pontuação Realizada com sucesso');
    console.log(data);
  },
  (err) => {
    console.log(err)
    this.toastr.warning('Erro na Operação');
    })
}

}
