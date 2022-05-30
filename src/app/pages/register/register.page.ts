import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  name : string = "";
  gender : string = "";
  dateValue : string = "";
  dob: string = "";
  username : string = "";
  password : string = "";
  confirm_password : string = "";

  disabledButton;

  constructor(
    private router : Router,
    private toastCtrl : ToastController,
    private loadingCtrl : LoadingController,
    private alertCtrl : AlertController
  ) { }

  ngOnInit() {
  }

  tryRegister(){
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
