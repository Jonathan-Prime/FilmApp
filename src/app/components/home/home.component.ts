import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  cartelera: any;
  populares: any;
  popularesNinos: any;

  constructor( public ps: PeliculasService) {
    // tslint:disable-next-line: deprecation
    this.ps.getCarletera()
    .subscribe(data => this.cartelera = data);

    this.ps.getPopulares()
    .subscribe(data => this.populares = data);

    this.ps.getPopularesNinos()
    .subscribe(data => this.popularesNinos = data);
  }

}


