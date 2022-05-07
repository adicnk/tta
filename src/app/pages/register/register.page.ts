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

  formatDate(value: string) {
    return format(parseISO(value), 'dd/MM/yyyy');
  }
}
