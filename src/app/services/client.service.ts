import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Clients {
  id: string;
  user_id: string;
  chat_id: string;
  first_name: string;
  last_name: string;
  hp: string;
  email: string;
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

  getAll(){
    return this.http.get<[Clients]>(this.url);
  } 

  get(id: string){
    return this.http.get<[Clients]>(this.url + '/' + id);
  }
  
  create(clients : Clients){
    return this.http.post(this.url, clients);
  }
  
  update(clients : Clients, id : string){
    return this.http.put(this.url + '/' + id, clients);    
  }

  remove(id : string) {
    return this.http.delete(this.url + '/' + id);
  }
}
