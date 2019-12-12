import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Point } from 'src/app/models/points.models';

@Component({
  selector: 'app-form-point',
  templateUrl: './form-point.component.html',
  styleUrls: ['./form-point.component.css']
})
export class FormPointComponent {
  // tslint:disable-next-line: no-angle-bracket-type-assertion
  @Input() configPoint: Point = <Point> {};
  @Output() outputConfigPoint: EventEmitter <Point> = new EventEmitter();

  submit() {
  this.outputConfigPoint.emit(this.configPoint);
  }

}
