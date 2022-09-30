import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const baseURL:string="http://www.omdbapi.com/?apikey=Your_API_KEY_HERE"

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  searchMovies(searchTerm:string): Observable<any>{
    return this.http.get(baseURL,{params:{s:searchTerm}})
  }

  getMovieDetails(imdbID:string):Observable<any>{
    return this.http.get(baseURL,{params:{i:imdbID,plot:"full"}})
  }
} 
