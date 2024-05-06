import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(
    public postService: PostService,
    private router: Router,
    private toastr: ToastrService,
    private dialogDif: MatDialog
  ) { }

  ngOnInit(): void {
  }

  update(postForm: NgForm) {
    if (postForm.value.id) {
      this.postService.updatePost(postForm.value.id, postForm.value).subscribe((response) => {
        this.toastr.success('Datos Actualizados', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
        this.dialogDif.closeAll();
        this.resetForm(postForm)
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

}
