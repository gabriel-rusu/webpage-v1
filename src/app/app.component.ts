import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  delta = 170;
  theme = 'dark-theme-word'
  words = ["Software Engineer", "System Engineering student", "Undergraduate Teaching Assistant", "Open Source Enthusiast"]
}
