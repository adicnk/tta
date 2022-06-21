import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

import { Storage } from '@ionic/storage-angular';
import { Register, RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  name : string ;
  gender : string;
  dob: string;
  username : string;
  password : string;
  confirm_password : string;
  email: string;

  disabledButton;

  constructor(
    private router : Router,
    private toastCtrl : ToastController,
    private loadingCtrl : LoadingController,
    private alertCtrl : AlertController,
    private service: RegisterService,
    private storage: Storage
    ) { 
     
    }
    
    ngOnInit() {
    }
    
    tryRegister(){
    
        this.service.get(this.username).subscribe(res=>{
          if (!res) {
            this.router.navigate(['']);
          } else {
            this.presentToast('Username has been created');
          }
        });

        if (this.name=""){
          this.presentToast('Name is required');
        } else if (this.gender="") {
          this.presentToast('Gender is required');
        } else if (this.dob=""){
          this.presentToast('Birthday is required');
        } else if (this.username=""){
          this.presentToast('username is required');
        } else if (this.password=""){
          this.presentToast('password is required')
        } else {
          this.presentToast('confirm password is required')
        }
    
  }

  async presentToast(a){
    let toast = await this.toastCtrl.create({
      message: a,
      duration: 1500,
      position : 'top'
    });
    return await toast.present()
  }

  ionViewDidEnter(){
    this.disabledButton=false;
  }

  formatDate(value: string) {
    return format(parseISO(value), 'dd/MM/yyyy');
  }
}
