import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { Clients, ClientService } from '../services/client.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit {

  clients: Clients[];
  id: any;

  constructor(
    private service: ClientService,
    private storage: Storage
  ) {
    this.storage.get('sClient').then((res)=>{
      this.id = res['id'];
      this.service.get(this.id).subscribe(response=>{
        this.clients = response;
      });
    });
  }

  ngOnInit(){
  }

}
