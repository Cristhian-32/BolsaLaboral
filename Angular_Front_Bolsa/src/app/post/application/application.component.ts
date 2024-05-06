import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  postList: any = [];
  emptyList = undefined;

  constructor(public postService: PostService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadPost();
  }

  loadPost() {
    return this.postService.GetPost().subscribe((response: any) => {
      this.postList = response.data;
      this.emptyList = undefined;
      console.log(this.postList);
    },
      err => {
        this.emptyList = err.error.message;
      }
    )
  }

}
