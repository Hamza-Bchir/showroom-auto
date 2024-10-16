import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadbarComponent } from './headbar/headbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Auto } from './auto';
import { AutoListComponent } from "./auto-list/auto-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadbarComponent, SearchBarComponent, AutoListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '$shooooowrouuuum$';

  autoList: Auto[] = [
    {
      marque: 'Audi',
      modele: 'A3',
      prix: 30000,
      puissance: 200,
      photo: 'assets/a3.png',  
      nombres: 10
    },
    {
      marque: 'Land Rover',
      modele: 'Range Rover Evoque',
      prix: 55000,
      puissance: 250,
      photo: 'assets/evoque.png',
      nombres: 7
    },
    {
      marque: 'Mercedes',
      modele: 'GLA',
      prix: 40000,
      puissance: 220,
      photo: 'assets/gla.png',
      nombres: 5
    },
    {
      marque: 'Alfa Romeo',
      modele: 'Stelvio',
      prix: 48000,
      puissance: 280,
      photo: 'assets//stelvio.png',
      nombres: 4
    },
    {
      marque: 'BMW',
      modele: 'X3',
      prix: 60000,
      puissance: 300,
      photo: 'assets/three.jpg',
      nombres: 6
    },
    {
      marque : 'BMW',
      modele : 'X2',
      photo : 'assets/two.jpg',
      puissance : 250,
      prix : 50000,
      nombres : 6
    },
    {
      marque: 'Hyundai',
      modele: 'Tucson',
      prix: 35000,
      puissance: 180,
      photo: 'assets/tucson.jpg',
      nombres: 8
    },
    {
      marque: 'Jaguar',
      modele: 'F-Pace',
      prix: 45000,
      puissance: 240,
      photo: 'assets/two.jpg',
      nombres: 3
    },
    {
      marque: 'Volvo',
      modele: 'XC60',
      prix: 50000,
      puissance: 250,
      photo: 'assets/xc60.jpg',
      nombres: 9
    }
  ];

 selected?: Auto;
  updateAuto(selectedAuto: Auto){
    console.log("selected car received")
    this.selected = selectedAuto;
  }
}