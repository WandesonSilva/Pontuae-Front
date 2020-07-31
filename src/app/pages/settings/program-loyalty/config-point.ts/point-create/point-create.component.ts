import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RulePointService } from 'src/app/service/rule-point.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Security } from '../../../../../utils/security.util';
import { RuleProgram } from '../../../../../models/ruleProgram.models';


@Component({
  selector: 'app-point-create',
  templateUrl: './point-create.component.html',
  styleUrls: ['./point-create.component.css']

})

export class PointCreateComponent implements OnInit {

  public form: FormGroup;
  public carregando = false;
  public description;

  constructor(
    private router: Router,
    private service: RulePointService,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) {

    this.form = this.fb.group({
      IdEmpresa: ['', Validators.compose([
        Validators.required
      ])],
   
      Reais: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(20),
        Validators.required
      ])],
      PontosFidelidade: ['',  Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(20),
        Validators.required
      ])],
      ValidadePontos: ['', Validators.compose([
       
        Validators.required
      ])],

    });


  }
  ngOnInit() {
    
    this.GetRule();
  }

  GetRule() {
    this.carregando = true;
    const IdEmpresa = Security.getUser().idEmpresa;
    this
      .service
      .getByIdProgramLoyalty(IdEmpresa)
      .subscribe((data: any) => {
        this.carregando = false;
        this.form.controls.IdEmpresa.setValue(IdEmpresa);
        this.form.controls.Reais.setValue(data.reais);
        this.form.controls.PontosFidelidade.setValue(data.pontosFidelidade);
        this.form.controls.ValidadePontos.setValue(data.validadePontos);
        console.log(data);
      }, err => {
        console.log(err);
        this.carregando = false;
      });
  }          
              
  submit() {
    this.carregando = true;
    this.service 
      .updateProgramLoyalty(this.form.value) 
      .subscribe((data: any) => {   
        this.carregando = false; 
        if(data.sucesso != true){
          this.toastr.info(data.mensage)
        } if (data.sucesso === true){
          this.toastr.success(data.mensage, '');
        }
        this.backPage();  
      },  
        (err) => {
          console.log(err);
          this.carregando = false;
          this.toastr.success(err.mensage,'');  
        }
      );
  }

  backPage() {
    this.router.navigate(['/config/listProgram']);
  }

}



