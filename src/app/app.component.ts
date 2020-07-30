import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  delta = 140;
  theme = 'dark-theme-word'
  words = ['Software Engineer', 'Student']
}
