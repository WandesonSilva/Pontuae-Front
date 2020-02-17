import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Security } from 'src/app/utils/security.util';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-model-message',
  templateUrl: './model-message.component.html',
  styleUrls: ['./model-message.component.css']
})
export class ModelMessageComponent implements OnInit {

  public ListMessage$: Observable<Message[]> = null;
  public busy = false;
 


  constructor(private service: MessageService ) { }

  ngOnInit() {
    const idEmpresa = Security.getUser().idEmpresa;
    this.ListMessage$ = this.service.getListModelMessage(idEmpresa);
  }

  showConteudoMensage(id: number){
      
  }
}
