import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-convocatoria',
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.css']
})
export class convocatoriaComponent implements OnInit {

  public nameUser: string ="";

  constructor(
    private tokenService : TokenService
  ) { }

  ngOnInit(): void {
    //this.nameUser = this.tokenService.getNameUser();
  }

}
