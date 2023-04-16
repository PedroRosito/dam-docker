import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  uri = 'http://localhost:8000'

  // config = {
  //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  // }

  constructor(private _http: HttpClient) { }

  consulta () {
    return firstValueFrom(this._http.get(`${this.uri}/prueba`))
  }
}
