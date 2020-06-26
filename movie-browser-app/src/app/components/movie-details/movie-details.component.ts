import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie:any;

  constructor(private movieservice:MoviesService,private actroute:ActivatedRoute) { }

  ngOnInit(){
    this.actroute.params.subscribe(params=>{
      let id=params['imdbID'];
      this.movieservice.getMovieDetails(id).subscribe(resp=>this.movie=resp)
    })
  }

  goBack(){
    window.history.back()
  }

}
