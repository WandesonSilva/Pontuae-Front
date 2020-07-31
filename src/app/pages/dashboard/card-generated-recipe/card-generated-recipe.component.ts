import { Component, OnInit } from '@angular/core';
import { ReportDataService } from '../../../service/report-data.service';
import { Security } from '../../../utils/security.util';

@Component({
  selector: 'app-card-generated-recipe',
  templateUrl: './card-generated-recipe.component.html',
  styleUrls: ['./card-generated-recipe.component.css']
})
export class CardGeneratedRecipeComponent implements OnInit {

  totalVendas: any;  
  constructor(private service: ReportDataService) { }

  ngOnInit() {
    this.TotalRecipe();
    

  }

   TotalRecipe() {

    const id = Security.getUser().idEmpresa;
    // var result = await
     this
      .service
      .GetGeneratedRecipe(id)
      .subscribe(data => this.totalVendas = data);
  }

}
