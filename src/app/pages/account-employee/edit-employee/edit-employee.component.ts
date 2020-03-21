import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserEmployeeService } from 'src/app/service/user-employee.service';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  public form: FormGroup;
  public busy = false;
  
  constructor(
  private router: Router,
  private service: UserEmployeeService,
  private fb: FormBuilder,
  private toastr: ToastrService,
  private activatedRoute: ActivatedRoute

) {
  this.form = this.fb.group({
    
    Id: ['', [Validators.required]],
    NomeCompleto: ['', [Validators.required]],
    Email: ['', [Validators.required]],
    Senha: ['', [Validators.required]],
    TipoFuncionario: ['', [Validators.required]],

  });

}

ngOnInit() {

  const idEmpresa = Security.getUser().idEmpresa;

  this.busy = true;
  this
    .service.getByIdEmployee
    (this.activatedRoute.snapshot.params.id, idEmpresa)
    .subscribe(
      (data: any) => {
        this.busy = false;
        this.form.controls['id'].setValue(data.Id);
        this.form.controls['nomeCompleto'].setValue(data.NomeCompleto);
        this.form.controls['email'].setValue(data.Email);
        this.form.controls['senha'].setValue(data.Senha);
        this.form.controls['tipoFuncionario'].setValue(data.TipoFuncionario);

      },
      (err) => {
        console.log(err);
        this.busy = false;
      }
    );
}

submit() {
  this.busy = true;
  this.service
    .updateUserEmployee(this.form.value)
    .subscribe(
      (data: any) => {
        this.busy = false;
        this.toastr.success(data.message, 'Salvo com sucesso');
        // this.router.navigate(['/']);

      },

      (err) => {
        console.log(err);
        this.busy = false;
        this.toastr.error('Não foi salvo');
      }
    );
}
}
