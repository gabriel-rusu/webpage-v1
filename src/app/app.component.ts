import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  delta = 200;
  theme = 'dark-theme-word'
  words = ['Software Engineer', 'Student']
}
