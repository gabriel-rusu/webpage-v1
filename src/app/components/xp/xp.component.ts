import {Component, Input, OnInit} from '@angular/core';
import {Experience} from '../../models/experience.model';

@Component({
  selector: 'prof-xp',
  templateUrl: './xp.component.html',
  styleUrls: ['./xp.component.css']
})
export class XpComponent implements OnInit {
  @Input()
  xp: Experience;
  constructor() { }

  ngOnInit(): void {
  }

}
