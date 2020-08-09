import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project.model'

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input()
  project: Project;

  constructor() { }

  ngOnInit(): void {
  }

  getNameOf(project: Project) {
    let words = project.name.split('-');
    return words.join(' ');
  }
}
