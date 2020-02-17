import { Component, OnInit } from '@angular/core';
import { Award } from 'src/app/models/award.models';
import { AwardService } from 'src/app/service/award.service';
import { Security } from 'src/app/utils/security.util';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-award-list',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.css'],

})
export class AwardListComponent implements OnInit {
  public List: Award[];
  public busy = false;
  constructor(
    private service: AwardService, 
    private toastr: ToastrService,
    private router: Router) { }
  
  ngOnInit() {
    
    this.ListAward(); 
    
  }


  ListAward(){
    const id = Security.getUser().idEmpresa;
    this.service.getListAward(id).subscribe(data => this.List = data);
  }


  
  Delete(idPonto: number) {
    const id = Security.getUser().idEmpresa;
    if (confirm("Deseja realmente Excluir?")) {
      this.busy = true;
      this.service
        .deleteAward(id, idPonto )
        .subscribe((data: any) => {
          this.busy = false;
          this.ListAward(); 
          this.toastr.success(data.message, 'Deletado com sucesso');
          
        },
        (err) => {
          console.log(err);
        });
  }

  }
}
