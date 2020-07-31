import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  ) { 


    this.form = this.fb.group({

      Id: ['', null],

      Nome: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required
      ])],

      Descricao: ['', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(150),
        Validators.required
      ])],
      QtdPontos: ['', Validators.compose([
        Validators.required
      ])],
    });

  }

  ngOnInit() {
  
    const id_empresa = Security.getUser().idEmpresa;
    const idAward = this.activatedRoute.snapshot.params.id;
    this.busy = true;
    this
       .service
       .getByIdAward(idAward, id_empresa)
       .subscribe(
         (data: any) => {
           this.busy = false;
           this.form.controls.Id.setValue(data.id);
           this.form.controls.Nome.setValue(data.nome);
           this.form.controls.Descricao.setValue(data.descricao);
           this.form.controls.PontosNecessario.setValue(data.pontosNecessario);

         },
         (err) => {
           console.log(err);
           this.busy = false;
         }
       );
  }

  submit() {

    this.busy = true;
    this
      .service
      .updateAward(this.form.value)
      .subscribe((data: any) => {
        this.busy = false;
        if(data.sucesso != true){
          this.toastr.info(data.mensage)
        } if (data.sucesso === true){
          this.toastr.success(data.mensage, '');
        }
        this.backPage();
      }, (err) => {
        this.busy = false;
        console.log(err);
        this.toastr.warning(err.mensage);
      }
      );
  }
  backPage(){
    this.router.navigate(['/config/listProgram']);
  }
}

