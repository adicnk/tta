import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Clients {
  id: string;
  user_id: string;
  chat_id: string;
  first_name: string;
  last_name: string;
  username: string;
  status: string;
  counter: string;
  counter_chart: string;
  active_until: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = 'http://localhost/tta/api/clients';

  constructor(private http: HttpClient) { 
    
  }

  gettAll(){

  }

  get(id: string){

  }

  create(clients : Clients){

  }

  update(clients : Clients, id : string){

  }

  delete(id : string) {
    
  }
}
