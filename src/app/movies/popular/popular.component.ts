import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { MoviesService } from "../movies.service";
import { Movie } from "./movie";

@Component({
  selector: "app-popular",
  templateUrl: "./popular.component.html",
  styleUrls: ["./popular.component.css"],
})
export class PopularComponent implements OnInit {
  movies: Observable<Movie[]>;
  language: string;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movies = this.moviesService.getMovies();
  }
}
