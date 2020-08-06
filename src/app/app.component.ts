import { Component, OnInit } from '@angular/core';
import { ProjectService } from './services/project/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  delta = 170;
  theme = 'dark-theme-word'
  words = ["Software Engineer", "System Engineering student", "Undergraduate Teaching Assistant", "Open Source Enthusiast"]
  repos: [] = [];
  word = 'Projects'

  constructor(private projectService: ProjectService) {

  }

  ngOnInit() {
    this.projectService.getProjects().subscribe(repos => this.repos = repos as []);
  }
}
