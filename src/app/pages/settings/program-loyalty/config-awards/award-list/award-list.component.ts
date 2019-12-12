import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AwardCreateComponent } from '../award-create/award-create.component';
import { Award } from 'src/app/models/award.models';
import { AwardService } from 'src/app/service/award.service';
import { Security } from 'src/app/utils/security-util';

@Component({
  selector: 'app-award-list',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.css'],

})
export class AwardListComponent implements OnInit {
  public Award$: Observable<Award[]> = null;
   constructor(private service: AwardService) { }

   ngOnInit() {

    const Id = parseInt(Security.getUser().id);
    this.Award$ = this.service.getListAward(Id);
  }
}
