import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
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
