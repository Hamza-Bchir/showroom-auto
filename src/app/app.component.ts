import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeadbarComponent } from './headbar/headbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Auto } from './auto';
import { AutoListComponent } from "./auto-list/auto-list.component";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs';
import { BrandListComponent } from "./brand-list/brand-list.component";
import { CarListComponent } from "./car-list/car-list.component";
import { RouterModule } from '@angular/router';
import { CarService } from './car.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadbarComponent, SearchBarComponent, AutoListComponent, BrandListComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '$shooooowrouuuum$';
  autoList: Auto[] = [];
  apiUrl = environment.apiUrl
  http = inject(HttpClient)



  constructor(private carService: CarService, private router: Router) {
    this.http.get<any[]>(this.apiUrl)
    .pipe(
      map(data => data.map(item => ({
        id : item.id,
        marque : item.maker,
        modele : item.model,
        prix : item.price,
        puissance : item.power,
        photo : ''
      })))
    )
    .subscribe((transformedData: Auto[]) => {
      this.autoList = transformedData;
      console.log(this.autoList)
    })


    this.carService.setCarData(this.autoList);


  }
  onSearch(searchTerm: string): void {
    // Navigate to the results page with the search term as a query parameter
    this.router.navigate(['/search-results'], { queryParams: { q: searchTerm } });
  }
  

 selected?: Auto;
  updateAuto(selectedAuto: Auto){
    console.log("selected car received")
    selectedAuto.photo = `${this.apiUrl}${selectedAuto.id}/image/`;
    //console.log(selectedAuto)
    this.selected = selectedAuto;
  }


}