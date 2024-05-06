import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Template } from '../models/template';


@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  selecTemplate: Template = new Template();
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private httpClient:HttpClient) { }

  templateURL = 'http://localhost:8000/api/template';

  //POST
  sendTemplate(body: FormData): Observable<any> {
    console.log(body);
    return this.httpClient.post(this.templateURL, body)
  }

    //GET
    getList(): Observable<Template> {
      return this.httpClient.get<Template>(this.templateURL);
    }
  
  //POST
  create(template:Template): Observable<Template> {
    console.log(template);
    return this.httpClient.post(this.templateURL,this.templateURL,{headers: this.reqHeader});
    
  }

  //PUT
  update(id:number, template: Template) {
    return this.httpClient.put(this.templateURL+'/'+id+'/', this.templateURL, {headers: this.reqHeader});
  }

  //DELETE
  delete(id: number) {
    return this.httpClient.delete(this.templateURL+'/'+id+'/');
  }

  //EXTRAS
  download(id:number): Observable<Template> {
    return this.httpClient.get<Template>(this.templateURL+'/'+id+'/')
  }
}
