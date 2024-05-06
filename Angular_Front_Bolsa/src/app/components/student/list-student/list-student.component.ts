import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { TokenService } from 'src/app/services/token.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { EditStudentComponent } from '../edit-student/edit-student.component';
import { Researh } from 'src/app/models/researh';
import { AddResearchComponent } from '../../research/add-research/add-research.component';
import { ResearchService } from 'src/app/services/research.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  studentList: any=[];

  emptyList = undefined;

  isAdmin!: boolean;

  constructor(
    public studentService: StudentService,
    private router:Router,
    private tokenService: TokenService,
    private dialog: MatDialog,
    private researchService: ResearchService
    ) { }

  ngOnInit(): void {

    this.loadStudents();
    //this.isAdmin = this.tokenService.isAdmin();
  }

  loadStudents() {
    return this.studentService.GetStudents().subscribe((data:{})=>{
      this.studentList=data;
      this.emptyList = undefined;
    },
    err => {
      this.emptyList = err.error.message;
    }
    )
  }

  onEdit(student: Student) {
    this.dialog.open(EditStudentComponent, {
      width: '30%',

    });
    //console.log(student);
    this.studentService.selectStudent=Object.assign({}, student);
  }

  onAddResearch(research: Researh) {
    this.dialog.open(AddResearchComponent, {
      width: '35%',
    });
    this.researchService.selectResearch=Object.assign({}, research);
  }


  deleteStudent(id:number) {
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
        this.studentService.DeleteStudent(id).subscribe((response)=>{
          this.loadStudents();
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
