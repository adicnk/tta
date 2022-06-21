import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Register {
  id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'http://localhost/tta/api/register';

  constructor(private http: HttpClient) { }

  get(id: string){
    return this.http.get<[Register]>(this.url + '/' + id);
  }

}
