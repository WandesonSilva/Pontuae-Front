import { Component, OnInit } from '@angular/core';
import { ReportDataService } from 'src/app/service/report-data.service';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-card-ticket-medium',
  templateUrl: './card-ticket-medium.component.html',
  styleUrls: ['./card-ticket-medium.component.css']
})
export class CardTicketMediumComponent implements OnInit {

  public totalTicket: any;  
  constructor(private service: ReportDataService) { }

  ngOnInit() {
    this.TotalTicket();

  }

   TotalTicket() {

    const idEmpresa = Security.getUser().idEmpresa;
     this
      .service
      .GetTicketMedium(idEmpresa)
      .subscribe(data => this.totalTicket = data);
  }

}
