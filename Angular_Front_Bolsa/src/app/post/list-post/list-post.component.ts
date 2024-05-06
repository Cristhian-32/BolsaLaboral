import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { AddPostComponent } from '../add-post/add-post.component';
import Swal from 'sweetalert2';
import { EditPostComponent } from '../edit-post/edit-post.component';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

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

  openAddPostDialog(): void {
    const dialogRef = this.dialog.open(AddPostComponent, {
      width: '45%', // Establece el ancho del cuadro de diálogo según tus preferencias
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El cuadro de diálogo se cerró');
    });
  }

  openEditPostDialog(post: Post): void {
    this.dialog.open(EditPostComponent, {
      width: '45%',

    });
    //console.log(student);
    this.postService.selectPosts=Object.assign({}, post);
  }

  deletePost(id:number) {
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
        this.postService.DeletePost(id).subscribe((response)=>{
          this.loadPost();
        });
        Swal.fire(
          'HECHO!',
          'Registro Eliminado Satisfactoriamente.',
          'success'
        )
      }
    })
  }

  onEdit(post: Post){

  }

}
