import { Component, OnInit } from '@angular/core';
import { UserEmployeeService } from 'src/app/service/user-employee.service';
import { ToastrService } from 'ngx-toastr';
import { Security } from 'src/app/utils/security.util';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { ObjectEmployee } from 'src/app/models/ObjectEmployee';

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

  // Deletddde(id: number) {
  //   console.log(id);
  //   const user = Security.getUser();
  
  //   if(id != user.id ){
  //   const idEmpresa = user.idEmpresa;
  //   Swal.fire({
  //     text: "Deseja remover este usuário?",
  //     showCancelButton: true,
  //     confirmButtonColor: '#17CC8D',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Confimar'
  //   }).then((result) => { if (result.value) {

    // const iduser = Security.getUser().id;
    // var dados = new ObjectEmployee(id, idEmpresa);

  //       this.service.deleteEmployee(dados)
  //       .subscribe((data: any) => { this.toastr.success(data.mensage);
  //       }, 
  //       (err) => { this.toastr.warning(err.mensage); });
  //     }
  //   });
  // }
  //  else{
  //   this.toastr.warning('Não pode remover a si mesmo');

  // }


 
  async Delete(id: any) {
    const idEmpresa = Security.getUser().idEmpresa;
    Swal.fire({
      text: "Deseja realmente Excluir?",
      showCancelButton: true,
      confirmButtonColor: '#17CC8D',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confimar'
    }).then(async (result) => {
      if (result.value) {
        const Id_Empresa = Security.getUser().idEmpresa;

      // var dados =  new ObjectEmployee(id, Id_Empresa);

      (await this.service.deleteEmployee(id, Id_Empresa  ))
        .subscribe((data: any) => {  this.toastr.success(data.mensage,);
        }, (err) => { this.toastr.warning('Erro na Operação'); });
      }
    });
  }



  
  // async Delete(id: number) {
    
 

  //   if (confirm("Deseja realmente Excluir?")) {
  //     // this.busy = true;
  
  //     console.log(id);
  //     const idEmpresa = Security.getUser().idEmpresa;
  //     const iduser = Security.getUser().id;
  //     var dados = new ObjectEmployee(id, idEmpresa);

   
  //     (await this.service.deleteEmployee(dados))
  //       .subscribe((data: any) => {

  //        if(data.sucesso != true){
  //         this.toastr.info(data.mensage)
  //       } if (data.sucesso === true){
  //         this.toastr.success(data.mensage, '');
  //       }
          
  //       },
  //       (err) => {
  //         console.log(err);
  //         this.toastr.warning(err.mensage, '');
  //       });
  //  }


}
