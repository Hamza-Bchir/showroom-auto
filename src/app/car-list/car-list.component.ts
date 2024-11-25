import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit {
  brand: string = '';
  cars: any[] = [];

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.paramMap.subscribe((params) => {
      this.brand = params.get('brand') || '';
      this.updateCarList(); // Update the car list whenever the brand changes
    });
  }

  updateCarList(): void {
    const allCars = this.carService.getCarData(); // Fetch all cars from the service
    this.cars = allCars.filter(car => car.marque === this.brand); // Filter cars by brand
    console.log(this.cars)
  }
}