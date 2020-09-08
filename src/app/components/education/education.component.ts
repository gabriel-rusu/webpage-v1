import {Component, Input, OnInit} from '@angular/core';
import {Education} from '../../models/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() education: Education;

  constructor() { }

  ngOnInit(): void {
  }

  getPeriodOfTime() {
    return "";
  }

  computeTitle() {
    return "";
  }
}
