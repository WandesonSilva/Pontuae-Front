import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RulePointService } from 'src/app/service/rule-point.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Security } from 'src/app/utils/security.util';
import { Point } from 'src/app/models/points.models';

@Component({
  selector: 'app-point-create',
  templateUrl: './point-create.component.html',
  styleUrls: ['./point-create.component.css']

})

export class PointCreateComponent   {

  public form: FormGroup;
  public busy = false;
  // public description;

  constructor(
    private router: Router,
    private service: RulePointService,
    private toastr: ToastrService,
  ) {

  }
 
  onsubmit(p: Point) {

    this.service
        .createRule(p)
        .subscribe((data: any) => {
          this.busy = false;
          this.toastr.success('Salvo com sucesso');

        },

          (err) => {
            console.log(err);
            this.busy = false;
            this.toastr.success('Salvo com sucesso');
          }
        );

  }


}

