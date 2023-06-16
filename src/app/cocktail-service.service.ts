import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
 
  constructor(private http: HttpClient) {   }

  getMovies() {
    return this.http.get<any>(this.cocktailUrl);
  }
}
