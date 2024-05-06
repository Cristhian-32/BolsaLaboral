import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-menup',
  templateUrl: './menup.component.html',
  styleUrls: ['./menup.component.css']
})
export class MenupComponent implements OnInit {

  isLogged!: boolean;
  isAdmin!: boolean;
  isAdviser!: boolean;
  nameUser!: string;
  emailUser!:string;

  constructor(private tokenService: TokenService,
    private router: Router) {

   }
  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
    //this.isAdviser = this.tokenService.isAdviser();
    this.nameUser = this.tokenService.getNameUser();
    this.emailUser = this.tokenService.getEmailUser();
  }

}
