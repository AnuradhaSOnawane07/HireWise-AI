import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(private http: HttpClient) {}

  initializeGoogle(callback: (response: any) => void) {

    google.accounts.id.initialize({

      client_id:
      '572273636881-2livpui5cn3t7f6lh0tk6tudc8149a6o.apps.googleusercontent.com',

      callback: callback

    });

  }

  renderButton(element: HTMLElement) {

    google.accounts.id.renderButton(

      element,

      {
        theme: 'outline',
        size: 'large',
        shape: 'pill',
        width: 340
      }

    );

  }

  loginWithGoogle(token: string) {

    return this.http.post(

      `${environment.apiUrl}/auth/google`,

      {
        token
      }

    );

  }

}