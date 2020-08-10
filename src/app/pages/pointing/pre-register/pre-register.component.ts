import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService, Toast } from 'ngx-toastr';
import { Security } from 'src/app/utils/security.util';
import { PointService } from 'src/app/service/point.service';
import { Observable } from 'rxjs';
import { listAwardClient } from 'src/app/models/listAwardClient.models';
import { rescueModels } from 'src/app/models/rescue.models';
import { AwardService } from 'src/app/service/award.service';

@Component({
  selector: 'app-pre-register',
  templateUrl: './pre-register.component.html',
  styleUrls: ['./pre-register.component.css']
})
export class PreRegisterComponent implements OnInit {

  public form: FormGroup;
  public ListAward$: Observable<listAwardClient[]>;

  constructor(
    private fb: FormBuilder,
    private service: PointService,
    private serviceAward: AwardService,
    private router: Router,
    private toastr: ToastrService,

  ) {

    this.form = this.fb.group({

      Id: [],
      IdEmpresa: [],
      Contato: ['', Validators.compose([
        Validators.required
      ])],
      ValorInfor: ['', Validators.compose([
        Validators.required
      ])],
      IdPreCadastro: [],


    });
  }


  ngOnInit() {

  }


  async submit() {


    const idEmpresa_ = Security.getUser().idEmpresa;
    const id = Security.getUser().id;
    this.form.controls.IdEmpresa.setValue(idEmpresa_);
    this.form.controls.Id.setValue(id);
    this.form.controls.IdPreCadastro.setValue(1);

    console.log(this.form.value);

    (await this
      .service
      .pointPost(this.form.value))
      .subscribe((data: any) => {

        if (data.sucesso != true) {
          this.toastr.info(data.mensage);
        } if (data.sucesso === true) {
          this.toastr.success(data.mensage);
        }
      },
        (err) => {
          console.log(err)
          this.toastr.warning('Erro na operação');
        })
  }



  backPage() {
    this.router.navigate(['/Config/ListAward']);
  }

  async seach() {
    const id = Security.getUser().idEmpresa;
    // console.log(event.target.value);

    if (this.form.value.Contato != '') {
      const list = this.serviceAward.getListAwardClient(id, this.form.value.Contato);
      this.ListAward$ = list;

    }
    else {
      this.toastr.info('Informe o Celular do cliente para Consultar Prêmios');
    }
  }


  rescue(id: number, pontoNecessario: number) {
    const user = Security.getUser();
    const resgatar = new rescueModels(user.id, id[0], user.idEmpresa, pontoNecessario[0]);
    console.log(resgatar);
    this.
      serviceAward
      .rescue(resgatar)
      .subscribe((data: any) => {
        this.seach();
        if (data.sucesso != true) {
          this.toastr.info(data.mensage);
        } if (data.sucesso === true) {
          this.toastr.success(data.mensage, '');
        }


      }, (err) => {
        console.log(err);
        this.toastr.warning(err.mensage, '');
      });
  }

}


