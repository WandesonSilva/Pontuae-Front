import { Component, OnInit } from '@angular/core';
import { UserEmployeeService } from 'src/app/service/user-employee.service';
import { ToastrService } from 'ngx-toastr';
import { Security } from 'src/app/utils/security.util';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  public ListUserEmployee$: Observable<Employee[]> = null;

  constructor(

    private service: UserEmployeeService,
    private toastr: ToastrService,

  ) { }

  ngOnInit() {
    const idEmpresa = Security.getUser().idEmpresa;
    this.ListUserEmployee$ = this.service.getListUserEmployee(idEmpresa);
  }

  alertDelete(id: any) {
    if(id != Security.getUser().idUsuario ){
    const idEmpresa = Security.getUser().idEmpresa;
    Swal.fire({
      text: "Deseja remover este usuário?",
      showCancelButton: true,
      confirmButtonColor: '#17CC8D',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confimar'
    }).then((result) => {
      if (result.value) {
        this.service.deleteEmployee(id, idEmpresa)
        .subscribe((data: any) => { this.toastr.success('Usuario Excluido com sucesso');
        }, (err) => { this.toastr.warning('Erro na Operação'); });
      }
    });
  }
   else{
    this.toastr.warning('Não pode remover a si mesmo');

  }
}
}

