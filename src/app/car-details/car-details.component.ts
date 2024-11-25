import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auto } from '../auto';
import { CarService } from '../car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit {
  carId!: number;
  car?: Auto;

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit(): void {
    this.carId = +this.route.snapshot.paramMap.get('id')!;
    this.car = this.carService.getCarData().find(car => car.id === this.carId);
  }


}
