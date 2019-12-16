import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PointService } from 'src/app/service/point.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rescue',
  templateUrl: './rescue.component.html',
  styleUrls: ['./rescue.component.css']
})
export class RescueComponent implements OnInit {
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
      CodPremio: ['', Validators.compose([
        Validators.required
      ])],
      IdUsuario: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  Submit() {

    this.
      service
      .pointPost(this.form.value)
      .subscribe((data: any) => {

      }, (err) => {
        console.log(err);
      });
  }
}
