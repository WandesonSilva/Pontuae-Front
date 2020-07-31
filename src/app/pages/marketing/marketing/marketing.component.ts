import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  backPage(){
    this.router.navigate(['/home']);
  }

}
