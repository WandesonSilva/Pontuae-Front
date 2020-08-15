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
  public totalRecorrentes: number;

  constructor(private service: ReportDataService) { }

  ngOnInit() {

    this.recorrentes();
    const idEmpresa = Security.getUser().idEmpresa;
    this
      .service
      .GetTotalCustomer(idEmpresa)
      .subscribe(dd => this.totalCustomer = dd);
  
  
      } 
      recorrentes(){
        const idEmpresa = Security.getUser().idEmpresa;
        this
        .service
        .GetRetained(idEmpresa)                 
        .subscribe(s => this.totalRecorrentes = s);
      }
      
    
  }

