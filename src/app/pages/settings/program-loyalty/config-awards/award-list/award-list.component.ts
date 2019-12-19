import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AwardCreateComponent } from '../award-create/award-create.component';
import { Award } from 'src/app/models/award.models';
import { AwardService } from 'src/app/service/award.service';
import { Security } from 'src/app/utils/security.util';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-award-list',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.css'],

})
export class AwardListComponent implements OnInit {
  public ListAward$: Observable<Award[]> = null;
  public busy = false;
  constructor(private service: AwardService, private toastr: ToastrService, ) { }

  ngOnInit() {

    const useId = Security.getUser().id;
    this.ListAward$ = this.service.getListAward(useId);
  }


  Delete(id: string) {
    if (confirm("Deseja realmente Excluir?")) {
      this.busy = true;
      this.service
        .deleteAward(id).subscribe((data: any) => {
          this.busy = false;
          this.toastr.success(data.message, 'Deletado com sucesso');
        });
    }

  }
}
