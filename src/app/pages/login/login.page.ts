import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Clients, ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  clients: Clients[];

  constructor(
    private router:Router,
    private service: ClientService
  ) { }

  ngOnInit() {
    this.service.get('180387391').subscribe(response=>{
      this.clients = response;
    });
  }

  openRegister(){
    this.router.navigate(['/register']);
  }
}
