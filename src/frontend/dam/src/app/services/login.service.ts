
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:8000';
  token: string;

  constructor(private http: HttpClient,private router: Router) {
    this.token = ''
  }
  async login(username: string, password: string) {
    let response = await firstValueFrom(this.http.post<any>(this.uri + '/authenticate', {username: username,password: password}));
    if (response != null){
      this.router.navigate(['home']);
      console.log(response)
      localStorage.setItem('token', response.token);
    }


    }

    logout() {
      localStorage.removeItem('token');
    }

    public get logIn(): boolean {
      return (localStorage.getItem('token') !== null);
    }
}