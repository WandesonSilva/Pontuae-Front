import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { Security } from 'src/app/utils/security.util';
import { CustomerService } from 'src/app/service/customer.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-client-page',
  templateUrl: './list-client-page.component.html',
  styleUrls: ['./list-client-page.component.css']
})
export class ListClientPageComponent implements OnInit {
  public ListClient$: Observable<any>;

  constructor(private service: CustomerService) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const IdEmpresa = Security.getUser().idEmpresa;
    this.ListClient$ = this.service.GetListCustomer(IdEmpresa);

  }

  // existList(): boolean {
  //   return this.ListClient$ && this.ListClient$ != null;
  // }
}
