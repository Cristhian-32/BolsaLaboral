import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  selectPosts:Post = new Post();
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  constructor(private httpClient: HttpClient) { }
  postURL = 'http://localhost:8000/api/posts';

  //GET
  GetPost(): Observable<Post> {
    return this.httpClient.get<Post>(this.postURL);
  }

  //POST
  CreatePost(post: Post): Observable<Post> {
    console.log(Post);
    return this.httpClient.post(this.postURL, post, { headers: this.reqHeader });

  }

  //PUT
  updatePost(id: number, post: Post) {
    return this.httpClient.put(this.postURL + '/' + id + '/', post, { headers: this.reqHeader });
  }

  //DELETE
  DeletePost(id: number) {
    return this.httpClient.delete(this.postURL + '/' + id + '/');
  }

  //EXTRAS
  detail(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.postURL + '/' + id + '/')
  }
}
