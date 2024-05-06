import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  constructor(
    private articleService: ArticleService
  ) { }

  private fileTmp: any;

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
    this.articleService.sendArticle(body).subscribe(res => console.log(res)
    )
  }

}
