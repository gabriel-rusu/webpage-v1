import {Component, HostBinding, OnInit} from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  title: string = "Projects"
  speed: number = 250;
  projects: Project[];
  ready: boolean = false;
  @HostBinding('attr.class') cssClasses: string = 'full-width';

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = this.filter(data);
      this.ready = true;
    });
  }

  showContent(ready: boolean) : void {
    this.ready = ready;
  }

  filter(data: Project[]): Project[] {
    let filtered =  data.filter(project => project.description && project.description.length > 20);
    return filtered.sort((a,b) => a.name.length - b.name.length );
  }

}
