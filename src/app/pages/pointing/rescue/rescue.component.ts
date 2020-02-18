import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PointService } from 'src/app/service/point.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AwardService } from 'src/app/service/award.service';
import { Security } from 'src/app/utils/security.util';
import { Observable } from 'rxjs';
import { listAwardClient } from 'src/app/models/listAwardClient';

@Component({
  selector: 'app-rescue',
  templateUrl: './rescue.component.html',
  styleUrls: ['./rescue.component.css']
})
export class RescueComponent {
  public form: FormGroup;
  public ListAward$: Observable<listAwardClient[]> 
  public contato: string;

  constructor(
    private fb: FormBuilder,
    private service: AwardService,
    private toastr: ToastrService,
  ) {
    this.form = this.fb.group({
      Telefone: ['', Validators.compose([
        Validators.required
      ])],
      IdUsuario: ['', Validators.required],
    });
  }

  seach() {
    const id = Security.getUser().idEmpresa;
    //console.log(event.target.value);
    this.ListAward$ = this.service.getListAwardClient(id, this.form.value.Telefone); 
    
  }


  rescue( id: number, saldo: number) {
    this.
      service
      .rescue(id) 
      .subscribe((data: any) => {
        this.toastr.info(data.dado.message);

      }, (err) => {
        console.log(err);
        this.toastr.warning(err.dado.message);
      });
  }
}
