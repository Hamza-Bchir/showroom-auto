import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Auto } from '../auto';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Input() autos : Auto[] = [];
  @Output() autosFound = new EventEmitter<Auto[]>();
  searchAutoList(marque : String){
    let matchedAutos : Auto[] = [];
    this.autos.forEach(auto => {
      if(auto.marque.toLowerCase() == marque.toLowerCase()){
        matchedAutos.push(auto)
      }
    })

    console.log(matchedAutos)
    this.autosFound.emit(matchedAutos);
  }

}
