import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Auto } from './auto';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carData: any[] = [];
  apiUrl: string = environment.apiUrl;


  setCarData(data: any[]): void {
    this.carData = data;
  }

  getCarData(): any[] {
    return this.carData;
  }
  
  searchCars(query: string): Auto[] {
    console.log("Heyy")
    console.log(this.carData)
    const lowerCaseQuery = query.toLowerCase();
    return this.carData.filter(
      (car) =>
        car.marque.toLowerCase().includes(lowerCaseQuery) ||
        car.modele.toLowerCase().includes(lowerCaseQuery)
    );
  }
  
  

  getCarPhoto(carId: Number): Observable<string> {
    console.log(this.apiUrl)
    const photoUrl = `${this.apiUrl}${carId}/image`;
    return this.http.get(photoUrl, { responseType: 'text' });
  }

  getCarPhoto2(carId: Number): String{
    const photoUrl = `${this.apiUrl}${carId}/image`;
    return photoUrl
  }

  constructor(private http: HttpClient) {}
}
