import { Component, OnInit } from '@angular/core';
import { Security } from 'src/app/utils/security.util';
import { RulePointService } from 'src/app/service/rule-point.service';
import { Point } from 'src/app/models/points.models';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-point-edit',
  templateUrl: './point-edit.component.html',
  styleUrls: ['./point-edit.component.css']
})
export class PointEditComponent  {

  // public configPoint: Point = <Point>{};
  // public form: FormGroup;
  // public busy = false;


  // constructor(
  //   private router: Router,
  //   private service: RulePointService,
  //   private toastr: ToastrService,

  // ) { }

  // ngOnInit() {

  //   // tslint:disable-next-line: radix
  //   const IdUser = parseInt(Security.getUser().id);
  //   this.busy = true;
  //   this
  //     .service
  //     .getByIdProgramLoyalty(IdUser)
  //     .subscribe((data: any) => {
  //       this.configPoint = data;
  //     },
  //       (err) => {
  //         console.log(err);
  //         this.busy = false;
  //       }
  //     );

  // }

  // submit() {
  //   this.busy = true;
  //   this
  //   .service
  //   .updateProgramLoyalty(this.form.value)
  //     .subscribe(
  //       (data: any) => {
  //         this.busy = false;
  //         this.toastr.success(data.message, 'Atualização Completa!');
  //       },
  //       (err) => {
  //         console.log(err);
  //         this.busy = false;
  //       }
  //     );
  // }

}
