import { Component, OnInit } from '@angular/core';
import { Security } from 'src/app/utils/security.util';
import { CampaignService } from 'src/app/service/campaign.service';
import { Observable } from 'rxjs';
import { Campaign } from 'src/app/models/campaign';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  public ListCampaign$: Observable<Campaign[]> = null;
  public busy = false;
  constructor(private service: CampaignService ) { }

  ngOnInit() {
    const idEmpresa = parseInt(Security.getUser().idEmpresa);
    this.ListCampaign$ = this.service.getListCampaign(idEmpresa);
    
  }

  existList() {
    return this.ListCampaign$ && this.ListCampaign$ != null;
  }

}
