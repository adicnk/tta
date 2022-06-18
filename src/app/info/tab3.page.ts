import { Component, OnInit } from '@angular/core';

import { Clients, ClientService } from '../services/client.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit {

  clients: Clients[];

  constructor(private service: ClientService) {}

  ngOnInit(){
    this.service.get('180387391').subscribe(response=>{
      this.clients = response;
    });
  }

}
