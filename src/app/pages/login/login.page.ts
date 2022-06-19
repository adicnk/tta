import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { promise } from 'protractor';
import { Login, LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: Login[];
  username: string;
  password: any;
  

  constructor(
    private router:Router,
    private toastCtrl : ToastController,
    private service: LoginService
  ) { }

  ngOnInit() {
  }

  openRegister(){
    this.router.navigate(['/register']);
  }

  tryLogin(){

      this.service.get(this.username).subscribe(res=>{
        if (this.password == res['password']){          
          this.router.navigate(['/home']);
        }
      });
    
  }

  
}