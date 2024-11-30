import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CarService } from '../car.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
      this.loadCarImages();
    });
  }

  updateCarList(): void {
    const allCars = this.carService.getCarData(); // Fetch all cars from the service
    this.cars = allCars.filter(car => car.marque === this.brand); // Filter cars by brand
    console.log(this.cars)
  }

  loadCarImages(): void {
    this.cars.forEach((car) => {
      car.photo = this.carService.getCarPhoto2(car.id);
    }); // Add the missing closing parenthesis here
  }
}