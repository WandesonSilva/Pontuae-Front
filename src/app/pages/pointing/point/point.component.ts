import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PointService } from 'src/app/service/point.service';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css'],
  providers: [PointService]
})
export class PointComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: PointService,
    private router: Router,
    private toastr: ToastrService,
  ) {

    this.form = this.fb.group({
      Telefone: ['', Validators.compose([
        Validators.required
      ])],
      ValorInfor: ['', Validators.compose([
        Validators.required
      ])],
      IdUsuario: [''],
    });
   }

  ngOnInit() {
  }

  Submit(){

    this
    .service
    .pointPost(this.form.value)
    .subscribe((data: any) => {
    },
    (err) => {
      console.log(err)
    }
    )
  }

}
