import { Component, Input, OnInit, Output } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  buscar: '';

  constructor( public ps: PeliculasService, public route: ActivatedRoute) {
    this.route.params.subscribe( parametros => {
      console.log(parametros);
      if (parametros.texto) {
        this.buscar = parametros.texto;
        this.buscarPelicula();
      }
    });
  }

  ngOnInit(): void {
  }
  buscarPelicula() {
    if ( this.buscar.length === 0) {
      return;
    }

    this.ps.buscarPelicula( this.buscar ).subscribe( );
  }

}
