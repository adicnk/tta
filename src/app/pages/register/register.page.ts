import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {  

  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  
  name : string = "";
  gender : string = "";
  dateValue="";
  username : string = "";
  password : string = "";

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  confirm() {
    this.datetime.confirm();
  }

  reset(){
    this.datetime.reset();
  }

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }
}
