import { Component, OnInit } from '@angular/core';
import { ReportDataService } from '../../../service/report-data.service';
import { Security } from 'src/app/utils/security.util';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-card-total-customer',
  templateUrl: './card-total-customer.component.html',
  styleUrls: ['./card-total-customer.component.css']
})
export class CardTotalCustomerComponent implements OnInit {
  Total: any;
  
  TaxaDeRecorrente: any;
  constructor(private service: ReportDataService) { }

  ngOnInit() {
    this.TotalCustomer();
    console.log(this.Total);
    this.RetainedCustomers();

  }

  async TotalCustomer() {
    const usuario = Security.getUser();
    const a = 7;
    var result = await this
      .service
      .GetTotalCustomer(a)
      .subscribe(data => this.Total = data);
  }

  async RetainedCustomers(){
    const usuario =  Security.getUser();
    const a = 7;
    await this
    .service
    .GetRetained(a)
    .subscribe(data => this.TaxaDeRecorrente = data);
  }
 
}
