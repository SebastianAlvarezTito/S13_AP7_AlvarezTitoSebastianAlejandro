import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',  // ← CORREGIDO (era './app.html')
  styleUrls: ['./app.component.css']    // ← CORREGIDO (era './app.css')
})
export class AppComponent {
  title = 'mundial-app';
}