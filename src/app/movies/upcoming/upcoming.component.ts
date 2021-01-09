import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { MoviesService } from "../movies.service";
import { UpMovie } from "./up_movie";

@Component({
  selector: "app-upcoming",
  templateUrl: "./upcoming.component.html",
  styleUrls: ["./upcoming.component.css"],
})
export class UpcomingComponent implements OnInit {
  upmovies: Observable<UpMovie[]>;
  language: string;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.getUpMovies();
  }

  getUpMovies() {
    this.upmovies = this.moviesService.getUpMovies();
  }
}
