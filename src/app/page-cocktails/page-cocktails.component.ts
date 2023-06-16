import { Component } from '@angular/core';
import { CocktailServiceService } from '../cocktail-service.service';

@Component({
  selector: 'app-page-cocktails',
  templateUrl: './page-cocktails.component.html',
  styleUrls: ['./page-cocktails.component.css']
})
export class PageCocktailsComponent {

  myCocktail: any 

  constructor(private cocktaiilService : CocktailServiceService) {

  }

  ngOnInit(): void {
    this.myCocktail.getMovies().subscribe((data: { results: any; }) => {
      this.myCocktail = data.results;
    })
  }
}
