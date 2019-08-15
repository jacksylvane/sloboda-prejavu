import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass']
})
export class MessageComponent implements OnInit {
  @Input() message: string;
  showTruth = false;
  constructor() { }

  ngOnInit() {
  }

  toggleTruth(): void {
    this.showTruth = !this.showTruth;
  }
}
