import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { Movie } from "./popular/movie";
import { UpMovie } from "./upcoming/up_movie";

@Injectable()
export class MoviesService {
  private url = "https://api.themoviedb.org/3/movie/";
  private apiKey = "765b05b6ad64d76c4f63fc85b4c07c25";
  private language;

  constructor(private http: Http) {
    this.language = "en";
  }

  getMovies(): Observable<Movie[]> {
    let moviesUrl = `${this.url}top_rated?api_key=${this.apiKey}&language=${this.language}`;

    return this.http
      .get(moviesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUpMovies(): Observable<UpMovie[]> {
    let upcomingmoviesUrl = `${this.url}upcoming?api_key=${this.apiKey}&language=${this.language}`;

    return this.http
      .get(upcomingmoviesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || "";
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
