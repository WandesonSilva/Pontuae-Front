import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PointService } from 'src/app/service/point.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AwardService } from 'src/app/service/award.service';
import { Security } from 'src/app/utils/security.util';
import { Observable } from 'rxjs';
import { listAwardClient } from 'src/app/models/listAwardClient.models';
import { rescueModels } from 'src/app/models/rescue.models';

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

  async seach() {
    const id = Security.getUser().idEmpresa;
    //console.log(event.target.value);
     const a = await this.service.getListAwardClient(id, this.form.value.Telefone);

     console.log(a);
     this.ListAward$ = a;
  }


  rescue( id: number, saldo: number) {
    const user = Security.getUser();
    const resgatar = new rescueModels(id[0], user.idEmpresa, user.idUsuario, saldo[0]);
    console.log(resgatar);
    this.
      service
      .rescue(resgatar) 
      .subscribe((data: any) => {
        
        this.toastr.success(data.dado.message);

      }, (err) => {
        console.log(err);
        this.toastr.warning(err.dado.message);
      });
  }
}
