import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
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

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }
}
