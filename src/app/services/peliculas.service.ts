import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PeliculasService {

  private apikey = 'b65f5bb75bd866513c4370b313cbaf35';
  private urlMoviedb = `https://api.themoviedb.org/3`;

  peliculas: any[] = [];

  constructor(  private  http: HttpClient, private jsonp: HttpClientJsonpModule ) { }

  getCarletera() {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate( hasta.getDate() + 7);

    const desdeStr = `${ desde.getFullYear() } -${ desde.getMonth() + 1 } -${desde.getDate()}`;
    const hastaStr = `${ hasta.getFullYear() } -${ hasta.getMonth() + 1 } -${hasta.getDate()}`;

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }
    &api_key=${ this.apikey }&language=es&callback=callback=test`;

    return this.http.get( url ).pipe(map( res => res));
  }

  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=callback=test`;
    return this.http.get( url ).pipe(map( res => res));
  }

  buscarPelicula( texto ) {
    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=callback=test`;
    return this.http.get( url ).pipe(map( res => {
      /* this.peliculas = res; */
      console.log(this.peliculas);
      return res;
    } ));
  }
  getPopularesNinos( ) {
    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=callback=test`;
    return this.http.get( url ).pipe(map( res => res ));
  }

  getPelicula( id: string ) {
    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMoviedb }/movie/${ id }?&api_key=${ this.apikey }&language=es&callback=callback=test`;
    return this.http.get( url ).pipe(map( res => res ));
  }

}
