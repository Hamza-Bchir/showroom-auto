import { Component, OnInit } from '@angular/core';
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

export class SearchResultsComponent implements OnInit {
  results: Auto[] = [];
  searchTerm: string = '';

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['q'];
      if (this.searchTerm) {
        console.log("hey1")
        this.results = this.carService.searchCars(this.searchTerm);
        this.loadCarImages();
      }
    });
  }

  loadCarImages(): void {
    this.results.forEach((car) => {
        car.photo = this.carService.getCarPhoto2(car.id);
    });
  }
}