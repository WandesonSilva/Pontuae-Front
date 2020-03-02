import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-client-detail-page',
  templateUrl: './client-detail-page.component.html',
  styleUrls: ['./client-detail-page.component.css']
})
export class ClientDetailPageComponent implements OnInit {
public client: any = null;

  constructor(private service: CustomerService) { }

  ngOnInit() {

  }

  showClientDetails(id) {
 this.service.GetDetails(id).subscribe((data: any) => {this.client = data;});

  }
}
