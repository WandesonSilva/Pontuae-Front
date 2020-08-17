import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-carregar',
  templateUrl: './carregar.component.html',
  styleUrls: ['./carregar.component.css']
})
export class CarregarComponent implements OnChanges {
 
   valueSize : string;
  // @Input() set size(size:string){
  //   this.valueSize = size;
  // };
  // constructor() { }

  ngOnChanges() {
    console.log(this.valueSize);
  }

}
