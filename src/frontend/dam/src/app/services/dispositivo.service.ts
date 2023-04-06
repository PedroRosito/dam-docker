import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  constructor(private _http: HttpClient) { }

  getListadoDispositivos (): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/devices'))
  }
}
