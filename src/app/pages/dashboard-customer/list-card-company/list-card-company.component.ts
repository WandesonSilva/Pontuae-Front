import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Empresa } from 'src/app/models/company.models';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/service/customer.service';
import { ListaEmpresaSaldo } from 'src/app/models/listarEmpresaSaldo.models';
import { DataService } from '../../../service/company.service';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-list-card-company',
  templateUrl: './list-card-company.component.html',
  styleUrls: ['./list-card-company.component.css']
})
export class ListCardCompanyComponent implements OnInit {
  ListaEmpresas: Empresa [];
  public URL_IMG = 'https://localhost:44311';
  public carregando = false;
  constructor(private service: DataService) { }


  ngOnInit () {
  
    this
    .service
    .listarEmpresas()
    .subscribe(data => {
      this.ListaEmpresas = data;
      console.log(data);
    });
  
  }




}


