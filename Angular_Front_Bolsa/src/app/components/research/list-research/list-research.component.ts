import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Researh } from 'src/app/models/researh';
import { ResearchService } from 'src/app/services/research.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';
import { AddResearchComponent } from '../add-research/add-research.component';
import { EditResearchComponent } from '../edit-research/edit-research.component';

@Component({
  selector: 'app-list-research',
  templateUrl: './list-research.component.html',
  styleUrls: ['./list-research.component.css']
})
export class ListResearchComponent implements OnInit {

  researchList: any=[];

  emptyList = undefined;

  isAdmin!: boolean;

  isAdviser!: boolean;

  constructor(
    public researchService: ResearchService,
    private router:Router,
    private tokenService: TokenService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {

    this.loadResearchs();
    // this.isAdmin = this.tokenService.isAdmin();
    // this.isAdviser = this.tokenService.isAdviser();
  }

  loadResearchs() {
    return this.researchService.getList().subscribe((data:{})=>{
      this.researchList=data;
      this.emptyList = undefined;
    },
    err => {
      this.emptyList = err.error.message;
    }
    )
  }

  onEdit(research: Researh) {
    this.dialog.open(EditResearchComponent, {
      width: '30%',

    });
    //console.log(research);
    this.researchService.selectResearch=Object.assign({}, research);
  }

  onAddResearch(research: Researh) {
    this.dialog.open(AddResearchComponent, {
      width: '35%',
    });
    this.researchService.selectResearch=Object.assign({}, research);
  }

  deleteResearch(id:number) {
    Swal.fire({
      title: '¿Está Seguro',
      text: "No podrá deshacer este cambio!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Si, borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.researchService.delete(id).subscribe((response)=>{
          this.loadResearchs();
        });
        Swal.fire(
          'HECHO!',
          'Registro Eliminado Satisfactoriamente.',
          'success'
        )
      }
    })
  }

}
