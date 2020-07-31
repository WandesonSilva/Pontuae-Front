import { Component, OnInit } from '@angular/core';
import { Security } from 'src/app/utils/security.util';
import { CampaignService } from 'src/app/service/campaign.service';
import { Observable } from 'rxjs';
import { Campaign } from 'src/app/models/campaign.models';
import { ListCampaign } from 'src/app/models/listCampaign.models';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  public ListCampaign$: Observable<ListCampaign[]> = null;
  public busy = false;
  constructor(private service: CampaignService ) { }

  ngOnInit() {
    const idEmpresa = Security.getUser().idEmpresa;
    this.ListCampaign$ = this.service.getListCampaign(idEmpresa);
    console.log(this.ListCampaign$);
  }

  existList() {
    return this.ListCampaign$ && this.ListCampaign$ != null;
  }

}
