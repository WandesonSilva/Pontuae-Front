import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Security } from 'src/app/utils/security.util';
import { RulePointService } from 'src/app/service/rule-point.service';
import { RuleProgram } from 'src/app/models/ruleProgram';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-program-loyalty',
  templateUrl: './list-program-loyalty.component.html',
  styleUrls: ['./list-program-loyalty.component.css']
})

export class ListProgramLoyaltyComponent implements OnInit {
  public List$: Observable<RuleProgram[]> = null;
  
  constructor(private service: RulePointService, private activatedRoute: ActivatedRoute) { }


  
  ngOnInit() {
    const idUser = Security.getUser().id;
      this.List$ = this.service.getListProgramLoyalty(this.activatedRoute.snapshot.params.id, idUser);
  }   
}
