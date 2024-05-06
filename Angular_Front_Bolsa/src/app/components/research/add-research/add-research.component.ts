import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Researh } from 'src/app/models/researh';
import { ResearchService } from 'src/app/services/research.service';

@Component({
  selector: 'app-add-research',
  templateUrl: './add-research.component.html',
  styleUrls: ['./add-research.component.css']
})
export class AddResearchComponent implements OnInit {

  constructor(
    public researchService: ResearchService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  date: Date = new Date;
  private fileTmp: any;

  ngOnInit(): void {
  }

  onCreate(researchForm: NgForm) {
    
    if (researchForm.value.id == null) {

      this.researchService.sendArticle(researchForm.value).subscribe((response) => {
        this.researchService.sendArticle(researchForm.value).subscribe(res => console.log(res))
        this.toastr.success('Registro Completado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
        this.sendFile();
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

  backReset(researchForm: NgForm) {
    this.resetForm(researchForm);
    this.router.navigate(['/']);
  }

  getFile($event: any): void {
    console.log($event);
    const [ file ] = $event.target.files;
    console.log(file);
    this.fileTmp = {
      fileRaw:file,
      fileName:file.name
    }
  }

  sendFile(): void{
    let formData = new FormData();
    formData.set('path', this.fileTmp);
  }

}
