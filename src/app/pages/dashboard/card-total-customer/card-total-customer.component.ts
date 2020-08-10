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
  public totalCustomer: number;
  public totalRecorrentes: number = 0;
  public NotResultRetained: number = 0;
  public isEnableSelected = false;

  constructor(private service: ReportDataService) { }

  ngOnInit() {

    const idEmpresa = Security.getUser().idEmpresa;
    this
      .service
      .GetTotalCustomer(idEmpresa)
      .subscribe(data => this.totalCustomer = data);
    console.log(this.totalCustomer); 

    this
      .service
      .GetRetained(idEmpresa)                 
      .subscribe(data => this.totalRecorrentes = data);

        const numberResult = this.totalCustomer - this.totalRecorrentes;
        this.NotResultRetained = numberResult;
        console.log(this.NotResultRetained);
      } 
      
    
  }

