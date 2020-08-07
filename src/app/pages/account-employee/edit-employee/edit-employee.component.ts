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
    
    id: [],
    nomeCompleto: ['', [Validators.required]],
    email: ['', [Validators.required]],
    senha: ['', [Validators.required]],
    controleUsuario: ['',[Validators.required]],

  });

}

  async ngOnInit() {

  const idEmpresa = Security.getUser().idEmpresa;

  this.busy = true;
  (await this
    .service.getByIdEmployee(this.activatedRoute.snapshot.params.id, idEmpresa))
    .subscribe(
      (data: any) => {
        console.log(data);
        this.busy = false;
        this.form.controls['id'].setValue(data.id);
        this.form.controls['nomeCompleto'].setValue(data.nomeCompleto);
        this.form.controls['email'].setValue(data.email);
        this.form.controls['senha'].setValue(data.senha);
        this.form.controls['controleUsuario'].setValue(data.controleUsuario);

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
