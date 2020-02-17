import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AwardService } from 'src/app/service/award.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Security } from 'src/app/utils/security.util';

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
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
  ) { }
  ngOnInit() {

    // tslint:disable-next-line: radix
    //const idCliente = Security.getUser().idEmpresa;
    this.busy = true;
    // this
    //   .service
    //   .getByIdAward(idCliente, this.form.value.ID)
    //   .subscribe(
    //     (data: any) => {
    //       this.busy = false;
    //       this.form.controls[' Id '].setValue(data.Id);
    //       this.form.controls[' Nome '].setValue(data.Nome);
    //       this.form.controls[' Descricao '].setValue(data.Descricao);
    //       this.form.controls[' PontosNecessario '].setValue(data.PontosNecessario);
    //     },
    //     (err) => {
    //       console.log(err);
    //       this.busy = false;
    //     }
    //   );
  }

  submit() {

    this.busy = true;
    this
      .service
      .updateAward(this.form.value)
      .subscribe((data: any) => {
        this.busy = false;
        this.toastr.success(data.message, 'Salvo com sucesso');
        this.backPage();
      }, (err) => {
        this.busy = false;
        console.log(err);
        this.toastr.warning(err.data);
      }
      );
  }
  backPage(){
    this.router.navigate(['/config/listProgram']);
  }
}

