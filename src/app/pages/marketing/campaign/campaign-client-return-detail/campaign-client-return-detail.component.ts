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

  public ListReturnCustomerCampaign$: Observable<any> = null;
  public campaign : any = null;


  constructor(private data: CampaignService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    const idEmpresa = Security.getUser().idEmpresa;
    const ID = this.activatedRoute.snapshot.params.id;
    this.ListReturnCustomerCampaign$ = this.data.getListReturnCustomerCampaign( ID, idEmpresa);
  }

  ngOnChanges() {
    this.showDadosReturnCustomerDetails();
  }


  showDadosReturnCustomerDetails() {
    const idEmpresa = Security.getUser().idEmpresa;
    const ID =  this.activatedRoute.snapshot.params.id;
        this.data.getByIdCampaign(ID, idEmpresa).subscribe((data: any) => {
          this.campaign = data;
        }); 
 
  }


}