import { Component, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/service/campaign.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-campaign-create',
  templateUrl: './campaign-create.component.html',
  styleUrls: ['./campaign-create.component.css']
})
export class CampaignCreateComponent {
  public form: FormGroup;
  public busy = false;
  public description;

  constructor(
    private router: Router,
    private service: CampaignService,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) {

    this.form = this.fb.group({

      Nome: ['', Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(60),
        Validators.required])],

      DataEnvio: ['', Validators.compose([Validators.required])],
      Conteudo: ['', Validators.compose([Validators.required])],
      Segmentacao: ['', Validators.compose([Validators.required])],
      CampanhaAtiva: ['', Validators.compose([Validators.nullValidator])],
      QtdSelecionado: ['', Validators.compose([Validators.nullValidator])],
    });

  }

  submit() {

    this.service
      .createCampaign(this.form.value)
      .subscribe((data: any) => {
        this.busy = false;
        this.toastr.success('Salvo com sucesso');
      },
        (err) => {
          console.log(err);
          this.busy = false;
          this.toastr.error('Não foi Salvo');
        }
      );
  }

  // backPage() {
  //   this.router.navigate(['/']);
  // }
}

