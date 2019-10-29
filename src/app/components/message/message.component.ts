import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass']
})
export class MessageComponent implements OnInit {
  @Input() message: any;
  @Input() showTruth = false;
  @Output() showingTruth: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleTruth(): void {
    if (!this.showTruth) {
      this.showingTruth.emit();
    }
    this.showTruth = !this.showTruth;
  }
}
