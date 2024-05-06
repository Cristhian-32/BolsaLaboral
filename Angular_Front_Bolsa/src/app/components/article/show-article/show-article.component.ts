import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {


  constructor(
    public articleService: ArticleService, 
    private router:Router,
    private toastrService: ToastrService,
    private activateRoute: ActivatedRoute
  ) { }

  article: any=[];

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params?.["id"];
    this.articleService.download(id).subscribe(data => {
      this.article = data;
      console.log(data);
      
    },
    err => {
      this.toastrService.error(err.error.message, 'Fail', {
        timeOut: 3000, positionClass: 'toast-top-right',
      });
      this.router.navigate(['/']);
    }
    )
  }
}
