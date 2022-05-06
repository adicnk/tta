import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

name : string = "";
gender : string = "";
username : string = "";
password : string = "";

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

}
