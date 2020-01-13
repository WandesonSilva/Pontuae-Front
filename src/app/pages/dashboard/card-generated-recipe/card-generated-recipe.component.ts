import { Component, OnInit } from '@angular/core';
import { ReportDataService } from '../../../service/report-data.service';
import { Security } from '../../../utils/security.util';

@Component({
  selector: 'app-card-generated-recipe',
  templateUrl: './card-generated-recipe.component.html',
  styleUrls: ['./card-generated-recipe.component.css']
})
export class CardGeneratedRecipeComponent implements OnInit {

  constructor(private service: ReportDataService) { }
valorRetido: any;
  ngOnInit() {
  }

  RetainedCustomers(){
    const usuario =  Security.getUser();
    this
    .service
    .GetRetained(usuario)
    .subscribe(data => this.valorRetido = data);
  }
 

}
