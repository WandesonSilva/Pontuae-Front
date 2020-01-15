import { Component, OnInit } from '@angular/core';
import { Automation } from 'src/app/models/automation';
import { Observable } from 'rxjs';
import { AutomationService } from 'src/app/service/automation.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-automation-list',
  templateUrl: './automation-list.component.html',
  styleUrls: ['./automation-list.component.css']
})
export class AutomationListComponent implements OnInit {
  public ListAutomation$: Observable<Automation[]> = null;
  public busy = false;
  constructor(private service: AutomationService, private activatedRoute: ActivatedRoute, private toastr: ToastrService,) { }

  ngOnInit() {
    const idEmpresa = parseInt(Security.getUser().idEmpresa);
    this.ListAutomation$ = this.service.getListAutomation(idEmpresa);
  }

  existList() {
    return this.ListAutomation$ && this.ListAutomation$ != null;
  }

}
