import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nameUser!: string;
  isLogged!: boolean;

  isAdmin!: boolean;
  isAdviser!: boolean;
  isUser!: boolean;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    this.nameUser = this.tokenService.getNameUser();
    this.isAdmin = this.tokenService.isAdmin();
    this.isAdviser = this.tokenService.isAdviser();
    this.isUser = this.tokenService.isUser();
  }

}
