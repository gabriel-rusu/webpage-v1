import { Component, OnInit, HostBinding } from '@angular/core';
import {Experience} from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  title: string = 'Experience';
  speed: number = 250;
  projects: Experience[];
  ready: boolean = false;
  @HostBinding('attr.class') cssClasses: string = 'full-width';

  constructor() { }

  ngOnInit(): void {
  }

}
