import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Login, LoginService } from 'src/app/services/login.service';
import { Storage } from '@ionic/storage-angular';

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
    private navCtrl : NavController,
    private toastCtrl : ToastController,
    private service: LoginService,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  openRegister(){
    this.router.navigate(['/register']);
  }

  tryLogin(){

      this.service.get(this.username).subscribe(res=>{
        if (this.password == res['password']){ 
          this.storage.set('storage_xxx',res);         
          //this.navCtrl.navigateForward(['home',{
          //  data : JSON.stringify(computer)
          //}]);
          this.router.navigate(['/home']);
        }
      });
    
  }

  
}