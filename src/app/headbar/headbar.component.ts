import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-headbar',
  standalone: true,
  imports: [],
  templateUrl: './headbar.component.html',
  styleUrl: './headbar.component.css'
})
export class HeadbarComponent {
  title = 'showroom-auto';

}
