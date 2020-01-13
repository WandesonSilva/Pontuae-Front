import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardService } from '../../../service/award.service';
import { Award } from '../../../models/award.models';
import { Observable } from 'rxjs';
import { Security } from '../../../utils/security.util';

@Component({
  selector: 'app-pointing',
  templateUrl: './pointing.component.html',
  styleUrls: ['./pointing.component.css']
})
export class PointingComponent implements OnInit {
Awards: Award[];
  constructor(private service: AwardService) { }

  ngOnInit() {
  }

  ListAward(){
    const user = Security.getUser();
    this
    .service
    .getListAward(user.id)
    .subscribe(data => this.Awards = data);
  }

}
