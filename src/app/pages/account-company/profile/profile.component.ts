import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Data } from '@angular/router';
import { DataService } from 'src/app/service/company.service';
import { Security } from 'src/app/utils/security.util';
import { Empresa } from 'src/app/models/company.models';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public form: FormGroup;
  public url = 'https://localhost:44311/';
  public empresa: Empresa;
  public carregando = false;
  public message: string;
  public selectedFile: File = null;
  //public imagem:File = null;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() public onUploadFinished = new EventEmitter();

  constructor(
    private router: Router,
    private service: DataService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    

  ) {
    this.form = this.fb.group({

      IdUsuario: ['', Validators.compose([
        Validators.required,
      ])],
      NomeFantasia: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required,
      ])],

      Descricao: ['', Validators.compose([

        Validators.minLength(6),
        Validators.maxLength(60),
        Validators.required,
      ])],
      NomeResponsavel: ['', Validators.compose([

        Validators.required,

      ])],
      Email: ['', Validators.compose([
        Validators.minLength(4),
        Validators.required
      ])],
      Telefone: ['', Validators.compose([
        Validators.required,

      ])],

      Seguimentos: ['', Validators.compose([
        Validators.maxLength(30),
        Validators.required,

      ])],
      Horario: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.required,

      ])],
      Facebook: ['', Validators.compose([
        Validators.maxLength(60),
        Validators.required,

      ])],
      WebSite: ['', Validators.compose([
        Validators.maxLength(60),
        Validators.required,

      ])],
      Instagram: ['', Validators.compose([
        Validators.maxLength(60),
        Validators.required,

      ])],
      Delivery: ['', Validators.compose([
        Validators.maxLength(60),
        Validators.required,

      ])],
      Bairro: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(23),
        Validators.required,

      ])],
      Rua: ['', Validators.compose([

        Validators.maxLength(55),
        Validators.required,

      ])],
      Numero: ['', Validators.compose([
        Validators.maxLength(9),
        Validators.required,

      ])],
      Cep: ['', Validators.compose([
        Validators.required,

      ])],
      Cidade: ['', Validators.compose([
        Validators.required,

      ])],
      Estado: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.required,

      ])],

      Complemento: ['', Validators.compose([
        Validators.maxLength(30),
        Validators.required,

      ])],
      Logo: ['', Validators.length],
      Documento: [{ value: 'documento', disabled: true }],
    }
    );
  }

  ngOnInit() {
  
    const id = Security.getUser().id;

    this
      .service
      .GetPerfil(id)
      .subscribe((data: any) => {
        this.form.controls.IdUsuario.setValue(id);
        this.form.controls.Email.setValue(data.email);
        this.form.controls.NomeFantasia.setValue(data.nomeFantasia);
        this.form.controls.Descricao.setValue(data.descricao);
        this.form.controls.NomeResponsavel.setValue(data.nomeResponsavel);
        this.form.controls.Telefone.setValue(data.telefone);
        this.form.controls.Documento.setValue(data.documento);
        this.form.controls.Seguimentos.setValue(data.seguimento);
        this.form.controls.Horario.setValue(data.horario);
        this.form.controls.Facebook.setValue(data.facebook);
        this.form.controls.Instagram.setValue(data.instagram);
        this.form.controls.WebSite.setValue(data.website);
        this.form.controls.Delivery.setValue(data.delivery);
        this.form.controls.Bairro.setValue(data.bairro);
        this.form.controls.Rua.setValue(data.rua);
        this.form.controls.Numero.setValue(data.numero);
        this.form.controls.Cep.setValue(data.cep);
        this.form.controls.Cidade.setValue(data.cidade);
        this.form.controls.Estado.setValue(data.estado);
        this.form.controls.Complemento.setValue(data.complemento);

        console.log(data);
        // this.form.controls.NomeResponsavel= data.NomeResponsavel;

      },
        (err) => {
          console.log(err);
        }
      );

    }

  Submit() {
    this.carregando = true;
    this
      .service
      .UpdatePerfil(this.form.value)
      .subscribe((data: any) => {
        console.log(this.form.value);
        this.carregando = false;
        this.toastr.success('Salvo com sucesso');
        this.router.navigate(['/']);
      }, (err) => {
        this.carregando = false;
        console.log(err)
        this.toastr.warning(err.data);
      }
      );

  }

  onUploadImagem(event: any) {
    this.selectedFile = <File>event.target.files[0];
    const formData = new FormData();
    formData.append('Logo', this.selectedFile.name)
    this.service.uploadImagem(formData)
      .subscribe(
        (event) => {
          this.toastr.success('Salvo com sucesso');
                    console.log(this.selectedFile);
        },
        (err) => {
          this.carregando = false;
          this.toastr.warning(err.dado, 'Erro nos dados');

        });

  }
  ComeBack() {
    this.router.navigate(['/']);
  }



}
