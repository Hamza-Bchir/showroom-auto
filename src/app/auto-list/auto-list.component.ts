import { Component, Input } from '@angular/core';
import { Auto } from '../auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auto-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auto-list.component.html',
  styleUrl: './auto-list.component.css'
})
export class AutoListComponent {

  @Input() autoDetails? : Auto;
}
