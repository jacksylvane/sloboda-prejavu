import { Component, OnInit } from '@angular/core';

const NEGATIVE_WORDS = ['NENÁVISŤ', 'ZLO', 'KLAMSTVO'];
@Component({
  selector: 'app-main-text',
  templateUrl: './main-text.component.html',
  styleUrls: ['./main-text.component.sass']
})
export class MainTextComponent implements OnInit {
  currentNegativeWord: string;
  shownWordIndex = 0;
  constructor() { }

  ngOnInit() {
    // this.currentNegativeWord = 'NENÁVISŤ';
    this.changeNegativeWords();
  }

  changeNegativeWords(): void {
    this.currentNegativeWord = NEGATIVE_WORDS[this.shownWordIndex];
    setTimeout(() => {
      if (this.shownWordIndex + 1 === NEGATIVE_WORDS.length) {
        this.shownWordIndex = 0;
      } else {
        this.shownWordIndex += 1;
      }
      this.changeNegativeWords();
    }, 3000);
  }

}
