import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convocatoria } from '../models/convocatoria';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriaService {
  selectConvocatorias:Convocatoria = new Convocatoria();
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  constructor(private httpClient:HttpClient) { }
  convocatoriaURL = 'http://localhost:8000/api/announcements';


  //GET
  GetConvocatoria(): Observable<Convocatoria> {
    return this.httpClient.get<Convocatoria>(this.convocatoriaURL);
  }

  //POST
  CreateConvocatoria(convocatoria:Convocatoria): Observable<Convocatoria> {
    console.log(convocatoria);
    return this.httpClient.post(this.convocatoriaURL, convocatoria, {headers: this.reqHeader});

  }

  //PUT
  updateConvocatoria(id:number, convocatoria: Convocatoria) {
    return this.httpClient.put(this.convocatoriaURL+'/'+id+'/', convocatoria, {headers: this.reqHeader});
  }

  //DELETE
  DeleteConvocatoria(id: number) {
    return this.httpClient.delete(this.convocatoriaURL+'/'+id+'/');
  }

  //EXTRAS
  detail(id:number): Observable<Convocatoria> {
    return this.httpClient.get<Convocatoria>(this.convocatoriaURL+'/'+id+'/')
  }


}
