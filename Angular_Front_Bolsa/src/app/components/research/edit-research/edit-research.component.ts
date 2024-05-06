import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Researh } from 'src/app/models/researh';
import { ResearchService } from 'src/app/services/research.service';

@Component({
  selector: 'app-edit-research',
  templateUrl: './edit-research.component.html',
  styleUrls: ['./edit-research.component.css']
})
export class EditResearchComponent implements OnInit {

  constructor(
    public researchService: ResearchService,
    private router: Router,
    private toastr: ToastrService,
    private dialogDif: MatDialog
  ) { }

  ngOnInit(): void {
  }

  update(researchForm: NgForm) {
    if (researchForm.value.id) {
      this.researchService.update(researchForm.value.id, researchForm.value).subscribe((response) => {
        this.toastr.success('Datos Actualizados', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
        window.location.reload();
        this.dialogDif.closeAll();
        this.resetForm(researchForm);
        
      },
        err => {
          this.toastr.error(err.error.message, 'Fail', {
            timeOut: 2000, positionClass: 'toast-top-right'
          });
        });
    }
  }

  resetForm(researchForm: NgForm) {
    if (researchForm != null) {
      researchForm.reset();
      this.researchService.selectResearch = new Researh();
    }
  }

  close(researchForm: NgForm) {
    this.resetForm(researchForm);
    this.dialogDif.closeAll();
  }

}
