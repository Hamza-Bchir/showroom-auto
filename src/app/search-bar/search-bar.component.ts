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

@Output() searchEvent = new EventEmitter<string>();

  onSearch(searchTerm: string): void {
    if (searchTerm.trim()) {
      this.searchEvent.emit(searchTerm);
    }
  }
}