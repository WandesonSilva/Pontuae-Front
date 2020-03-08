import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Security } from 'src/app/utils/security.util';
import { AutomationService } from 'src/app/service/automation.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-automation-client-return-detail',
  templateUrl: './automation-client-return-detail.component.html',
  styleUrls: ['./automation-client-return-detail.component.css']
})
export class AutomationClientReturnDetailComponent implements OnInit, OnChanges {
  public automation : any = null;
  public ListReturnCustomerAutomation$: Observable<any> = null;

  constructor(private data: AutomationService, private activatedRoute: ActivatedRoute, private toastr: ToastrService, ) { }
  
  ngOnInit() {
    const idEmpresa = Security.getUser().idEmpresa;
    const ID = this.activatedRoute.snapshot.params.id;
    this.ListReturnCustomerAutomation$ = this.data.getListReturnCustomerAutomation(ID, idEmpresa);
  }

  ngOnChanges() {
    this.showDadosReturnCustomerDetails();
  }

  showDadosReturnCustomerDetails() {
    const idEmpresa = Security.getUser().idEmpresa;
    const ID =  this.activatedRoute.snapshot.params.id;
        this.data.getByIdAutomation(ID, idEmpresa).subscribe((data: any) => {
          this.automation = data;
        }); 
 
  }

}


