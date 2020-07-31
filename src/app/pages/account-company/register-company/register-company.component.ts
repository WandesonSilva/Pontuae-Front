import { Component, OnInit, ChangeDetectorRef, EventEmitter, Injectable, Output, Input, NgZone } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Security } from 'src/app/utils/security.util';
import { DataService } from 'src/app/service/company.service';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';


@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css'],

})
export class RegisterCompanyComponent implements OnInit {

  @Input()
  responses: Array<any>;
  private hasBaseDropZoneOver = false;
  private uploader: FileUploader;
  private title: string;
  public form: FormGroup;
  public carregando = false;
  public message: string;
  public selectedFile: File = null;

  @Output() public onUploadFinished = new EventEmitter();


  constructor(
    private fb: FormBuilder,
    private service: AuthenticationService,
    private EmpService: DataService,
    private router: Router,
    private toastr: ToastrService,
    private cd: ChangeDetectorRef,


  ) {

    this.form = this.fb.group({
      Senha: ['', Validators.compose([
        Validators.minLength(4 ),
        Validators.maxLength(20),
        Validators.required,
      ])],

      NomeFantasia: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required,
      ])],

      Descricao: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(60),

      ])],
      NomeResponsavel: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(35),
        Validators.required,

      ])],
      Email: ['', Validators.compose([
        Validators.minLength(4),
        Validators.required
      ])],
      Telefone: ['', Validators.compose([
        Validators.required,

      ])],
      Documento: ['', Validators.compose([
        Validators.required,

      ])],
      Seguimento: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(35),
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
      //Logo: ['', Validators.length],

    });

  }

  ngOnInit() {

  }

  updateTitle(value: string) {
    this.title = value;
  }


  GetToken() {
    Security.getToken();
  }

  submit() {
    this.carregando = true;
    this
      .service
      .CriarPerfilEmpresa(this.form.value)
      .subscribe(
        (data: any) => {
            if(data.sucesso != true){
        this.toastr.info(data.mensage)
        this.carregando = false;
      } if (data.sucesso === true){
        this.toastr.success('Obá, cadastro recebido! 💜');
        this.router.navigate(['/login']);
      }
      

    }, (err) => {
      console.log(err);
      this.toastr.warning(err.mensage, '');
    });
  }

  onUploadImagem(event: any) {
    this.selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append('Logo', this.selectedFile);
    this.EmpService.uploadImagem(formData)
      .subscribe(
        // tslint:disable-next-line: no-shadowed-variable
        (event) => {
          this.toastr.success(event.successo, 'Salvo com sucesso');
          formData.append('Logo', event.data.name);

          this.form.value.Logo = event.data.name;
          console.log(this.form.value.Logo);
        },
        (err) => {
          this.carregando = false;
          this.toastr.warning(err.dado, 'Erro nos dados');

        });



  }

}
