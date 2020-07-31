import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../service/customer.service';
import { Observable } from 'rxjs';
import { ScoreComapanyModels } from '../../../models/ScoreCompany.models';
import { Security } from '../../../utils/security.util';

@Component({
  selector: 'app-list-company-in-balance',
  templateUrl: './list-company-in-balance.component.html',
  styleUrls: ['./list-company-in-balance.component.css']
})
export class ListCompanyInBalanceComponent implements OnInit {
Balances: ScoreComapanyModels[];
  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.BalanceCustomer();
  }

  BalanceCustomer() {
    const id = Security.getUser().id;
    this
    .service
    .GetBalanceOfCompany('1')
    .subscribe(data => this.Balances = data);
  }

}
