import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { Security } from 'src/app/utils/security.util';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-list-client-page',
  templateUrl: './list-client-page.component.html',
  styleUrls: ['./list-client-page.component.css']
})
export class ListClientPageComponent implements OnInit {
  ListClient$ : Observable<Customer> = null;
  constructor(private service: CustomerService) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const Id = parseInt(Security.getUser().id);
    // this.ListClient$ = this.service.GetListCustomer(Id);
  }
}
