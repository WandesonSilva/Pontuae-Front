// AVERIGUAR SE ESTE COMPONENTE ESTÁ EM USO





import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Security } from 'src/app/utils/security.util';
import { RulePointService } from 'src/app/service/rule-point.service';
import { RuleProgram } from 'src/app/models/ruleProgram.models';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-program-loyalty',
  templateUrl: './list-program-loyalty.component.html',
  styleUrls: ['./list-program-loyalty.component.css']
})

export class ListProgramLoyaltyComponent implements OnInit {
  public List$: Observable<RuleProgram[]>;
  public busy = false;
  
  constructor(private service: RulePointService, private activatedRoute: ActivatedRoute, private toastr: ToastrService,) { }





  
  ngOnInit() {
    const Id = Security.getUser().idEmpresa;
      this.List$ = this.service.getListProgramLoyalty(Id);
  }  
   
  Delete(id: any) {
    if (confirm("Deseja realmente Excluir?")) {  
      this.busy = true;    
      this.service
        .deleteLoyalty(id).subscribe((data: any) => {
          this.busy = false;
          this.toastr.success(data.message, 'Deletado com sucesso');
        });
    }
  }

  existList() {
    console.log(this.List$ == null);
    return this.List$ == null;
  }
}
