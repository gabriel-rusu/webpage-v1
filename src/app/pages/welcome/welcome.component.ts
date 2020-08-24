import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  delta = 120;
  theme = 'dark-theme-word'
  words = ["Software Engineer", "System Engineering student", "Undergraduate Teaching Assistant", "Open Source Enthusiast"]


  constructor() { }

  ngOnInit(): void {
  }

}
