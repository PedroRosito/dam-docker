import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _homeService: HomeService) {}

  consultarService () {
    this._homeService.consulta()
      .then((respuesta) => {
        console.log(respuesta)
      })
      .catch((error) => {
        console.log(error)
      })
  }

}
