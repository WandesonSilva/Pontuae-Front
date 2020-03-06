import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-detail-page',
  templateUrl: './client-detail-page.component.html',
  styleUrls: ['./client-detail-page.component.css']
})
export class ClientDetailPageComponent implements OnInit, OnChanges {
public client: any = null;

  constructor(private service: CustomerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.showClientDetails();
  }

  // ngOnChanges() {
  //   this.showClientDetails();
  // }
  
  showClientDetails() {
    const ID = this.activatedRoute.snapshot.params.id;
    this.service.GetDetails(ID).subscribe((data: any) => {this.client = data;});

  }
}
