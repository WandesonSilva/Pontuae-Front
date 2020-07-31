import { Component, OnInit } from '@angular/core';
import { Award } from 'src/app/models/award.models';
import { AwardService } from 'src/app/service/award.service';
import { Security } from 'src/app/utils/security.util';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ObjectAward } from 'src/app/models/ObjectAward.models';


@Component({
  selector: 'app-award-list',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.css'],

})
export class AwardListComponent implements OnInit {
  public List: Award[];
  public busy = false;
  public object: ObjectAward;
  constructor(
    private service: AwardService, 
    private toastr: ToastrService,

    private router: Router) { }
  
  ngOnInit() {
    this.busy = true;
    this.ListAward(); 
    
  }


  ListAward(){      
    const id = Security.getUser().idEmpresa;
    this.service.getListAward(id).subscribe(data => this.List = data);
  }

      //  Testa este metodo
  Delete(idPonto: number) {
    const idEmpresa = Security.getUser().idEmpresa;
    Swal.fire({
      text: "Deseja realmente Excluir?",
      showCancelButton: true,
      confirmButtonColor: '#17CC8D',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confimar'
    }).then((result) => {
      if (result.value) {
        const Id_Empresa = Security.getUser().idEmpresa;

      var dados =  new ObjectAward(idPonto, Id_Empresa);
        this.service.deleteAward(dados )
        .subscribe((data: any) => {  this.toastr.success(data.message, 'Deletado com sucesso');
        }, (err) => { this.toastr.warning('Erro na Operação'); });
      }
    });
  }




  
  DelDete(idAward: number) {
    
    if (confirm("Deseja realmente Excluir?")) {
      this.busy = true;
      const Id_Empresa = Security.getUser().idEmpresa;

      var dados =  new ObjectAward(idAward, Id_Empresa);

      this.service.deleteAward( dados)
        .subscribe((data: any) => {
          this.busy = false;
         this.ListAward(); 
         if(data.sucesso != true){
          this.toastr.info(data.mensage)
        } if (data.sucesso === true){
          this.toastr.success(data.mensage, '');
        }
          
        },
        (err) => {
          console.log(err);
          this.toastr.warning(err.mensage, '');
        });
   }
  }
}
