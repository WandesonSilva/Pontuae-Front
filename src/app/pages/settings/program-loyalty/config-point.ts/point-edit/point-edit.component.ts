import { Component, OnInit, EventEmitter } from '@angular/core';
import { Security } from 'src/app/utils/security.util';
import { RulePointService } from 'src/app/service/rule-point.service';
import { Point } from 'src/app/models/points.models';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-point-edit',
  templateUrl: './point-edit.component.html',
  styleUrls: ['./point-edit.component.css']
})
export class PointEditComponent implements OnInit {

  public form: FormGroup;
  public carregando = false;
  //  event: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private service: RulePointService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,

  ) {

    this.form = this.fb.group({

      idEmpresa: ['', null],
  
      nome: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required
      ])],
    

      // // Descricao: ['', Validators.compose([Validators.maxLength(15), Validators.required])],
      reais: ['', Validators.compose([
        Validators.required
      ])],

      pontosFidelidade:  ['', Validators.compose([
        Validators.required
      ])],

       validadePontos: ['', Validators.compose([
        Validators.required
      ])],
     

    });

  }
  ngOnInit() {
      this.carregando = true;
      this.GetRule();
  
  }

submit(){
  if(this.form.value.reais === 0){
    this.post();
  }
  else{
    this.put();
  }


  }
  

post() {
  const id = Security.getUser().idEmpresa;
    this.form.value.idEmpresa = id;

    this.service
      .createRule(this.form.value)
      .subscribe(
        (data: any) => {
          //  console.log(data);
          this.toastr.success(data.message, 'Salvo com sucesso');
          this.router.navigate(['/']);

        },

        (err) => {
          console.log(err);
          this.toastr.warning('Falha');
        }
      );
  }

   put() {
    this.carregando = true;
    this.service
    .updateProgramLoyalty(this.form.value)
    .subscribe(
             (data: any) => {
    this.carregando = false;
    this.toastr.success(data.message, 'Salvo com sucesso');
    this.router.navigate(['/']);

      },

    (err) => {
           console.log(err);
         this.carregando = false;
        this.toastr.success('Salvo com sucesso');
       }
     );
  }
 

 GetRule() {

   const idEmpresa = Security.getUser().idEmpresa;

   this
    .service
     .getByIdProgramLoyalty(idEmpresa)
     .subscribe(
       (data: any) => {
         this.carregando = false;
         this.form.controls.nome.setValue(data.nome);
         this.form.controls.reais.setValue(data.reais);
         this.form.controls.pontosFidelidade.setValue(data.pontosFidelidade);
         this.form.controls.validadePontos.setValue(data.validadePontos);
       },
       (err) => {
         console.log(err);
         this.carregando = false;
       }
     );
}



  

 backPage() {
 this.router.navigate(['/home']);
 }
}

