import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardService } from '../../../service/award.service';
import { Award } from '../../../models/award.models';
import { Observable } from 'rxjs';
import { Security } from '../../../utils/security.util';


  //Lembra de remove este component
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

  // ListAward(){
  //   const id = Security.getUser().idEmpresa;   
  //   this
  //   .service
  //   .getListAward(id)
  //   .subscribe(data => this.Awards = data);
  // }

}
