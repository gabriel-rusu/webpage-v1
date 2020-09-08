import {Component, Input, OnInit} from '@angular/core';
import {Education} from '../../models/education.model';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() education: Education;

  constructor() {
  }

  ngOnInit(): void {
  }

  getPeriodOfTime(): string {
    return this.process(this.education.startDate) + ' - ' + this.process(this.education.endDate);
  }

  private process(date: Date): string {
    if (date === null || date.toString() === 'null') {
      return 'Present';
    } else {
      return date.toString();
    }
  }

  computeTitle(): string {
    if (this.education.endDate === null || this.education.endDate.toString() === 'null') {
      return 'Pursuing a ' + this.education.bachelorType + ' degree, ' + this.education.studyField;
    } else {
      return this.education.bachelorType.charAt(0).toUpperCase() +
        this.education.bachelorType.slice(1) + ' degree, ' + this.education.studyField;
    }
  }
}
