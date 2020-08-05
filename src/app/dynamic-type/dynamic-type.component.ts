import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dynamic-type',
  templateUrl: './dynamic-type.component.html',
  styleUrls: ['./dynamic-type.component.css']
})
export class DynamicTypeComponent implements OnInit {
  @Input()
  words: string[];

  @Input()
  speed: number;

  @Input()
  pause: number;
  word: string;
  wordIndex: number;
  currentChar: number;
  interval: number;
  backwards: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.wordIndex = 0;
    this.currentChar = 0;
    this.word = "|";
    this.type();
  }

  type(): any {
    let currentWordLength = this.words[this.wordIndex].length;
    if (this.currentChar < 0 && this.backwards) {
      this.speed *= 2;
      this.currentChar = 0;
      this.word = "|";
      this.backwards = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
    } else if (this.currentChar <= currentWordLength) {
      this.word = this.words[this.wordIndex].substr(0, this.currentChar) + "|";
      if (!this.backwards) {
        this.currentChar++;
      } else this.currentChar--;
    } else if (this.currentChar > currentWordLength) {
      this.backwards = true;
      this.speed /= 2;
      this.currentChar--;
    }
    var self = this;
    setTimeout(function () {
      self.type();
    }, this.currentChar > currentWordLength ? this.pause : this.speed);

  }

}
