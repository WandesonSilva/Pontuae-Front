import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AwardService } from 'src/app/service/award.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-award-edit',
  templateUrl: './award-edit.component.html',
  styleUrls: ['./award-edit.component.css']
})
export class AwardEditComponent implements OnInit {
  public form: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private service: AwardService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }
  submit() {

    this.busy = true;
    this
      .service
      .updateAward(this.form.value)
      .subscribe((data: any) => {
        this.busy = false;
        this.toastr.success(data.message, 'Salvo com sucesso');

        // this.router.navigate(['/']);
      }, (err) => {
        this.busy = false;
        console.log(err);
        this.toastr.warning(err.data);
      }
      );
  }
}

