import { Component, Input } from '@angular/core';
import { Auto } from '../auto';

@Component({
  selector: 'app-auto-list',
  standalone: true,
  imports: [],
  templateUrl: './auto-list.component.html',
  styleUrl: './auto-list.component.css'
})
export class AutoListComponent {

  @Input() matchedAutos : Auto[] = [];

}
