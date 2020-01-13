import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.css']
})
export class CardGroupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ToConfig() {
    this.router.navigate(['/config/list-Program']);
  }
}
