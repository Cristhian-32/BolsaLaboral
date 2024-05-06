import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postList: any = [];
  emptyList = undefined;

  constructor(
    public postService: PostService,
    private router: Router,
    private toastr: ToastrService,
    private dialogDif: MatDialog
  ) { }

  ngOnInit(): void {
  }

  listPost(){
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

  onCreate(postForm: NgForm) {
    if (postForm.value.id == null) {
      this.postService.CreatePost(postForm.value).subscribe((response) => {
        this.toastr.success('Nuevo  Agregado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
        this.dialogDif.closeAll();
        this.resetForm(postForm);
        this.router.navigate(["/posts"]);
        window.location.reload();
      },
        err => {
          this.toastr.error(err.error.message, 'Fail', {
            timeOut: 2000, positionClass: 'toast-top-right'
          });
        });
    }
  }

  resetForm(postForm: NgForm) {
    if (postForm != null) {
      postForm.reset();
      this.postService.selectPosts = new Post();
    }
  }

  close(postForm: NgForm) {
    this.resetForm(postForm);
    this.dialogDif.closeAll();
  }
  backReset(postForm: NgForm) {
    this.resetForm(postForm);
    this.router.navigate(['/']);
  }

}
