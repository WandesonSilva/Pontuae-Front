import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PointService } from 'src/app/service/point.service';
import { Router, ActivatedRoute } from '@angular/router';
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
export class RescueComponent implements OnInit {
  public form: FormGroup;
  public ListAward$: Observable<listAwardClient[]>;
  //public parametroContato: any;

  constructor(
    private fb: FormBuilder,
    private service: AwardService,
    private toastr: ToastrService,
    private route: ActivatedRoute 

  ) {
    this.form = this.fb.group({
      Contato: ['', Validators.compose([
        Validators.required
      ])],
      IdUsuario: ['', Validators.required],
    });
  }
  ngOnInit() {
    //this.parametroContato = this.route.snapshot.params.contato;
  }


  async seach() {
    const id = Security.getUser().idEmpresa;
    // console.log(event.target.value);
    const list = this.service.getListAwardClient(id, this.form.value.Contato);

    this.ListAward$ = list;
  }

  rescue( id: number, saldo: number) {
    const user = Security.getUser();
    const resgatar = new rescueModels(id[0], user.idEmpresa, user.id, saldo[0]);
    console.log(resgatar);
    this.
      service
      .rescue(resgatar)
      .subscribe((data: any) => {

        if(data.sucesso != true){
          this.toastr.info(data.mensage);
        } if (data.sucesso === true){
          this.toastr.success(data.mensage, '🎁');
        }
        
  
      }, (err) => {
        console.log(err);
        this.toastr.warning(err.mensage, '');
      });
  }
}
