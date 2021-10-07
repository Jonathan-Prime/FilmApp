import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html'
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  regresarA: '';
  busqueda: '';

  constructor( public ps: PeliculasService, public route: ActivatedRoute) {
    this.route.params.subscribe( parametros => {
      console.log(parametros);
      this.regresarA = parametros.pag;
      if ( parametros.busqueda ) {
        this.busqueda = parametros.busqueda;
      }

      this.ps.getPelicula( parametros.id ).subscribe( pelicula => this.pelicula = pelicula);
    });
  }

  ngOnInit(): void {
  }

}
