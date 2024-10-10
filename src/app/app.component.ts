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

  // Liste de voitures basée sur les images fournies
  autoList: Auto[] = [
    {
      marque: 'Audi',
      modele: 'A3',
      prix: 30000,
      puissance: 200,
      photo: '../../public/photos/a3.png',  // Assuming images are stored in assets/images
      nombres: 10
    },
    {
      marque: 'Land Rover',
      modele: 'Range Rover Evoque',
      prix: 55000,
      puissance: 250,
      photo: '../../public/photos/evoque.png',
      nombres: 7
    },
    {
      marque: 'Mercedes',
      modele: 'GLA',
      prix: 40000,
      puissance: 220,
      photo: '../../public/photos/gla.png',
      nombres: 5
    },
    {
      marque: 'Alfa Romeo',
      modele: 'Stelvio',
      prix: 48000,
      puissance: 280,
      photo: '../../public/photos/stelvio.png',
      nombres: 4
    },
    {
      marque: 'BMW',
      modele: 'X3',
      prix: 60000,
      puissance: 300,
      photo: '../../public/photos/three.jpg',
      nombres: 6
    },
    {
      marque: 'Hyundai',
      modele: 'Tucson',
      prix: 35000,
      puissance: 180,
      photo: '../../public/photos/tucson.jpg',
      nombres: 8
    },
    {
      marque: 'Jaguar',
      modele: 'F-Pace',
      prix: 45000,
      puissance: 240,
      photo: '../../public/photos/two.jpg',
      nombres: 3
    },
    {
      marque: 'Volvo',
      modele: 'XC60',
      prix: 50000,
      puissance: 250,
      photo: '../../public/photos/xc60.jpg',
      nombres: 9
    }
  ];

  matchedAutos : Auto[] = [];

  onAutosFound(matched: Auto[]){
    this.matchedAutos = matched;
  }
}