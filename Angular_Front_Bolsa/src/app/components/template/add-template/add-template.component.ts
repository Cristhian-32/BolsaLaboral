import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css']
})
export class AddTemplateComponent implements OnInit {

  private fileTmp:any;

  constructor(private TemplateService: TemplateService){ //TODO estoy inyect

  }
  ngOnInit(): void {

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
    const body = new FormData();
    body.append('archivo', this.fileTmp.fileRaw, this.fileTmp.fileName);

    this.TemplateService.sendTemplate(body).subscribe(res => console.log(res))
  }

}
