import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Login, LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: Login[];

  constructor(
    private router:Router,
    private service: LoginService
  ) { }

  ngOnInit() {
    this.service.get('jefendi@gmail.com').subscribe(response=>{
      console.log(response);
    });
  }

  openRegister(){
    this.router.navigate(['/register']);
  }

  tryLogin(){
    this.router.navigate(['/home']);
  }
}