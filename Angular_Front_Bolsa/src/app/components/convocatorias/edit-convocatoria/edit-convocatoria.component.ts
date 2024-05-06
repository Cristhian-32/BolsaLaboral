import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Convocatoria } from 'src/app/models/convocatoria';
import { ConvocatoriaService } from 'src/app/services/convocatoria.service';

@Component({
  selector: 'app-edit-convocatoria',
  templateUrl: './edit-convocatoria.component.html',
  styleUrls: ['./edit-convocatoria.component.css']
})
export class EditConvocatoriaComponent implements OnInit {

  constructor(
    public convocatoriaService: ConvocatoriaService,
    private toastr: ToastrService,
    private dialogDif: MatDialog
  ) { }

  ngOnInit(): void {
  }

  update(convocatoriaForm: NgForm) {
    if (convocatoriaForm.value.id) {
      this.convocatoriaService.updateConvocatoria(convocatoriaForm.value.id, convocatoriaForm.value).subscribe((response) => {
        this.toastr.success('Datos Actualizados', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
        this.dialogDif.closeAll();
        this.resetForm(convocatoriaForm);
      },
        err => {
          this.toastr.error(err.error.message, 'Fail', {
            timeOut: 2000, positionClass: 'toast-top-right'
          });
        });
    }
  }

  resetForm(convocatoriaForm: NgForm) {
    if (convocatoriaForm != null) {
      convocatoriaForm.reset();
      this.convocatoriaService.selectConvocatorias = new Convocatoria();
    }
  }

  close(convocatoriaForm: NgForm) {
    this.resetForm(convocatoriaForm);
    this.dialogDif.closeAll();
  }

}
