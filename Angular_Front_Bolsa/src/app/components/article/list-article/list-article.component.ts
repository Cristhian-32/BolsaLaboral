import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from 'src/app/services/article.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  articleList:any=[];

  emptyList = undefined;

  isAdmin!: boolean;

  constructor(
    public articleService: ArticleService, 
    private router:Router,
    private toastrService: ToastrService,
    private activateRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles() {
    return this.articleService.getList().subscribe((data:{})=>{
      this.articleList=data;
      this.emptyList = undefined;
    },
    err => {
      this.emptyList = err.error.message;
    }
    )
  }


}
