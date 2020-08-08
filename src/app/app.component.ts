import { Component, OnInit } from '@angular/core';
import { ProjectService } from './services/project/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private projectService: ProjectService) {

  }

  ngOnInit() {
    this.projectService.getProjects().subscribe(repos => this.repos = repos as []);
  }
}
