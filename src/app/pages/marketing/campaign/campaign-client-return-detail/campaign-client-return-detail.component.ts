import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignService } from 'src/app/service/campaign.service';
import { Security } from 'src/app/utils/security.util';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-campaign-client-return-detail',
  templateUrl: './campaign-client-return-detail.component.html',
  styleUrls: ['./campaign-client-return-detail.component.css']
})
export class CampaignClientReturnDetailComponent implements OnInit {

  constructor(private service: CampaignService, private activatedRoute: ActivatedRoute ) { }

  public ListReturnCustomerCampaign$: Observable<any> = null;
  ngOnInit() {
    const idEmpresa = Security.getUser().idEmpresa;
    const ID = this.activatedRoute.snapshot.params.id;
    this.ListReturnCustomerCampaign$ = this.service.getListReturnCustomerCampaign( ID, idEmpresa);
  }

  ngOnChanges() {
    this.showDadosReturnCustomerDetails();
  }

  showDadosReturnCustomerDetails() {
    const idEmpresa = Security.getUser().idEmpresa;
    this.service.getByIdCampaign(this.activatedRoute.snapshot.params.id, idEmpresa)
  }

}