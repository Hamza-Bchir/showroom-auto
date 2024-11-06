import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Auto } from '../auto';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Input() autos : Auto[] = [];
  @Output() selectAutoEvent = new EventEmitter<Auto>();
  matchedAutos : Auto[] = [];
  searchAutoList(marque : String){
    this.matchedAutos = []
    this.autos.forEach(auto => {
      if(auto.marque.toLowerCase().includes(marque.toLowerCase())){
        this.matchedAutos.push(auto)
      }
    })
  }
  
  selectedAuto(auto : Auto){
    this.selectAutoEvent.emit(auto);
  }

}