import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewUserDto } from 'src/app/models/new-user.dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-adviser',
  templateUrl: './register-adviser.component.html',
  styleUrls: ['./register-adviser.component.css']
})
export class RegisterAdviserComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  user: any = [];

  name!: string;
  username!: string;
  email!: string;
  password!: string;


  ngOnInit(): void {
  }

  onRegisterAdviser(): void {
    this.user = new NewUserDto(this.name, this.username, this.email, this.password)
    this.authService.registerAdviser(this.user).subscribe(
      data => {
        this.toastrService.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-right',
        });
        this.router.navigate(['/login']);
      },
      err => {
        this.toastrService.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-right',
        });
      }
    );
  }

}
