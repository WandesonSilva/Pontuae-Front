import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Empresa } from 'src/app/models/company.models';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/service/customer.service';
import { ListaEmpresaSaldo } from 'src/app/models/listarEmpresaSaldo';


@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {
  ListaSaldos: ListaEmpresaSaldo[];
  public URL_IMG = 'https://localhost:44311';

  constructor(private service: CustomerService) { }


  ngOnInit() {
   /*  this
    .service
    .ListarProgramasFidelidadeCadastrados()
    .subscribe(datas => this.ListaSaldos = datas); */

  }




}


