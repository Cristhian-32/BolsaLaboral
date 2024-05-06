import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Researh } from '../models/researh';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  selectResearch: Researh = new Researh();
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private httpClient:HttpClient) { }
  researchURL = 'http://localhost:8000/api/investigations';


  //GET
  getList(): Observable<Researh> {
    return this.httpClient.get<Researh>(this.researchURL);
  }

  //POST
  create(research: Researh): Observable<Researh> {
    console.log(research);
    return this.httpClient.post(this.researchURL, research, {headers: this.reqHeader});
    
  }

  //PUT
  update(id:number, research: Researh) {
    return this.httpClient.put(this.researchURL+'/'+id+'/', research, {headers: this.reqHeader});
  }

  //DELETE
  delete(id: number) {
    return this.httpClient.delete(this.researchURL+'/'+id+'/');
  }

  //EXTRAS
  detail(id:number): Observable<Researh> {
    return this.httpClient.get<Researh>(this.researchURL+'/'+id+'/')
  }

  //POST
  sendArticle(body: FormData): Observable<any> {
    console.log(body);
    return this.httpClient.post(this.researchURL, body)
  }
}
