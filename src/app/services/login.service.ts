import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface Login {
  id: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost/tta/api/login';

  constructor(private http: HttpClient) { }

  get(email: string){
    return this.http.get<[Login]>(this.url + '/' + email);
  }
}
