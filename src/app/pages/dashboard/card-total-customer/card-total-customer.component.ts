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
  public total: any;  
  public totalRecorrentes: any ;
  public resultRetained : any ;
  public isEnableSelected = false;
  
  constructor(private service: ReportDataService) { }

  ngOnInit() {
    this.TotalCustomer();
    this.RetainedCustomers();
     // this.CalcRetained();

   


  }

   TotalCustomer() {

    const idEmpresa = Security.getUser().idEmpresa;
        this
      .service
      .GetTotalCustomer(idEmpresa)
      .subscribe(data => this.total = data);
      console.log(this.total);
  }

  

   RetainedCustomers(){
    const idEmpresa =  Security.getUser().idEmpresa;
  
     this
    .service
    .GetRetained(idEmpresa)
    .subscribe(data => this.totalRecorrentes = data);
    
  }
  CalcRetained() : void{

      this.resultRetained = this.total - this.totalRecorrentes;
    }
 
}
