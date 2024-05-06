import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(
    public studentService: StudentService,
    private router: Router,
    private toastr: ToastrService,
    private dialogDif: MatDialog
  ) { }

  ngOnInit(): void {
  }

  update(studentForm: NgForm) {
    if (studentForm.value.id) {
      this.studentService.updateStudent(studentForm.value.id, studentForm.value).subscribe((response) => {
        this.toastr.success('Datos Actualizados', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
        window.location.reload();
        this.dialogDif.closeAll();
        this.resetForm(studentForm);
        
      },
        err => {
          this.toastr.error(err.error.message, 'Fail', {
            timeOut: 2000, positionClass: 'toast-top-right'
          });
        });
    }
  }

  resetForm(studentForm: NgForm) {
    if (studentForm != null) {
      studentForm.reset();
      this.studentService.selectStudent = new Student();
    }
  }

  close(studentForm: NgForm) {
    this.resetForm(studentForm);
    this.dialogDif.closeAll();
  }

}
