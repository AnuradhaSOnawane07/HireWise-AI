import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(data: any) {

    return this.http.post(
      `${this.api}/auth/login`,
      data
    );

  }

  register(data:any){

  return this.http.post(

    `${this.api}/auth/register`,

    data

  );

}

googleLogin(token: string) {

  return this.http.post(

    `${this.api}/auth/google`,

    {
      token: token
    }

  );

}

}