import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Project } from '../../models/project.model'

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input()
  project: Project;

  @HostBinding('attr.class') cssClasses = 'xp-padding';


  constructor() { }

  ngOnInit(): void {
  }

  getNameOf(project: Project) {
    let words = project.name.split('-');
    return words.join(' ');
  }
}
