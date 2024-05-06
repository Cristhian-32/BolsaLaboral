import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Convocatoria } from 'src/app/models/convocatoria';
import { ConvocatoriaService } from 'src/app/services/convocatoria.service';
import { EditConvocatoriaComponent } from '../edit-convocatoria/edit-convocatoria.component';
@Component({
  selector: 'app-list-convocatoria',
  templateUrl: './list-convocatoria.component.html',
  styleUrls: ['./list-convocatoria.component.css']
})
export class ListConvocatoriaComponent implements OnInit {
  convocatoriaList:any=[];
  emptyList = undefined;

  constructor(public convocatoriaService:ConvocatoriaService,private router:Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadConvocatoria();
  }

  loadConvocatoria(){
    return this.convocatoriaService.GetConvocatoria().subscribe((data:{})=>{
      this.convocatoriaList=data;
      this.emptyList = undefined;
    },
    err => {
      this.emptyList = err.error.message;
    }
    );
  }

  deleteConvocatoria(id:number){
    this.convocatoriaService.DeleteConvocatoria(id).subscribe((response)=>{
      this.loadConvocatoria();
    });
  }

  onEdit(convocatoria:Convocatoria){
    this.dialog.open(EditConvocatoriaComponent, {
      width: '30%',

    });
    this.convocatoriaService.selectConvocatorias=Object.assign({},convocatoria);

  }

}
