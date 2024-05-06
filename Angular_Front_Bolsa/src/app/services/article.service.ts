import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  selectArticle: Article = new Article();
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private httpClient:HttpClient) { }

  articleURL = 'http://localhost:8000/api/articles';

//POST
  sendArticle(body: FormData): Observable<any> {
    console.log(body);
    return this.httpClient.post(this.articleURL, body)
  }

  //GET
  getList(): Observable<Article> {
    return this.httpClient.get<Article>(this.articleURL);
  }

  //POST
  create(article:Article): Observable<Article> {
    console.log(article);
    return this.httpClient.post(this.articleURL, article, {headers: this.reqHeader});
    
  }

  //PUT
  update(id:number, article: Article) {
    return this.httpClient.put(this.articleURL+'/'+id+'/', article, {headers: this.reqHeader});
  }

  //DELETE
  delete(id: number) {
    return this.httpClient.delete(this.articleURL+'/'+id+'/');
  }

  //EXTRAS
  download(id:number): Observable<Article> {
    return this.httpClient.get<Article>(this.articleURL+'/'+id+'/')
  }
}
