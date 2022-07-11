import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthsService } from '../../service/auth/auths.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  user: any;

  constructor(
    private readonly authService: AuthsService,
    protected router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.user).subscribe(
      (res: any)=>{
        this.authService.authenticate(
          res.token,
          this.user.login
        )
      },
      error =>{

      });
  }

}
