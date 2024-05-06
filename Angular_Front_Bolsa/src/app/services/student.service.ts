import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  selectStudent: Student = new Student();
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private httpClient:HttpClient) { }
  studentURL = 'http://localhost:6060/api/students';


  //GET
  GetStudents(): Observable<Student> {
    return this.httpClient.get<Student>(this.studentURL);
  }

  //POST
  CreateStudent(student:Student): Observable<Student> {
    console.log(student);
    return this.httpClient.post(this.studentURL, student, {headers: this.reqHeader});

  }

  //PUT
  updateStudent(id:number, student: Student) {
    return this.httpClient.put(this.studentURL+'/'+id+'/', student, {headers: this.reqHeader});
  }

  //DELETE
  DeleteStudent(id: number) {
    return this.httpClient.delete(this.studentURL+'/'+id+'/');
  }

  //EXTRAS
  detail(id:number): Observable<Student> {
    return this.httpClient.get<Student>(this.studentURL+'/'+id+'/')
  }

}
