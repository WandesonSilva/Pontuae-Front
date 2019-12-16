import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Security } from 'src/app/utils/security.util';
import { RulePointService } from 'src/app/service/rule-point.service';
import { RuleProgram } from 'src/app/models/ruleProgram';
import { PointCreateComponent } from '../point-create/point-create.component';
import { PointEditComponent } from '../point-edit/point-edit.component';
import { PointDeleteComponent } from '../point-delete/point-delete.component';


@Component({
  selector: 'app-list-program-loyalty',
  templateUrl: './list-program-loyalty.component.html',
  styleUrls: ['./list-program-loyalty.component.css']
})

export class ListProgramLoyaltyComponent implements OnInit {
  public List$: Observable<RuleProgram[]> = null;
  
  constructor(private service: RulePointService) { }


  
  ngOnInit() {
    const Id = parseInt(Security.getUser().id);
      this.List$ = this.service.getListProgramLoyalty(Id);
  }

  // addNew() {
  //   this.bsModalRef = this.bsModalService.show(PointCreateComponent);
  //   this.bsModalRef.content.event.subscribe(result => {
  //     if (result == 'OK') {
  //       this.ngOnInit();
  //     }
  //   });
  // }

  // edit(postId: number) {
  //   this.service.changePostId(postId);

  //   this.bsModalRef = this.bsModalService.show(PointEditComponent);
  //   this.bsModalRef.content.event.subscribe(result => {
  //     if (result == 'OK') {
  //       setTimeout(() => {
  //         this.ngOnInit();
  //       }, 5000);
  //     }
  //   });
  // }

  // delete(postId: number, title: string) {
  //   this.bsModalRef = this.bsModalService.show(PointDeleteComponent);
  //   this.bsModalRef.content.postId = postId;
  //   this.bsModalRef.content.event.subscribe(result => {
  //     console.log("deleted", result);
  //     if (result == 'OK') {
  //       setTimeout(() => {
  //         this.ngOnInit();
  //       }, 5000);
  //     }
  //   });
  // }



    
}
