import { Component } from '@angular/core';
import { Auto } from '../auto';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  searchTerm: string = '';
  cars: Auto[] = [];
  filteredCars: Auto[] = [];

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit(): void {
    // Get the search term from query parameters
    this.route.queryParamMap.subscribe(params => {
      this.searchTerm = params.get('q') || '';
      this.updateResults();
    });
  }

  updateResults(): void {
    const allCars = this.carService.getCarData(); // Get all cars
    this.filteredCars = allCars.filter(car =>
      car.marque.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      car.modele.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    // Fetch photos for each car in the filtered list
    this.filteredCars.forEach(car => {
      car.photo = this.carService.getCarPhoto2(car.id)
    });
  }
}
