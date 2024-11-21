import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface ImageData{
  name : string,
  path : string
}
@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.css'
})
export class BrandListComponent {
  private manifestPath = 'assets/manifest.json';
  brand_images : {name: string; path: string}[] = [];

  constructor(private http: HttpClient, private router: Router){}
  getImages(): Observable<ImageData[]>{
    return this.http.get<ImageData[]>(this.manifestPath);
  }

  ngOnInit(): void {
    this.getImages().subscribe(data => {
      this.brand_images = data
    });
  }


  navigateToCars(brand: string){
    this.router.navigate(['/cars', brand]);
  }


}
