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
    const contato = Security.getUser();
    console.log(contato);
    this
    .service
    .GetBalanceOfCompany(contato.contato)
    .subscribe(data => {
      this.Balances = data
      console.log(data);
    });
  }

}
