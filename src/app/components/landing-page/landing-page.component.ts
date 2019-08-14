import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Message } from '../../models/message';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {
  messages: Message[] = [];
  currentTheme = 'light';
  constructor(messageService: MessagesService) {
    messageService.getJSON().subscribe(data => {
      this.messages = data;
    });
  }

  ngOnInit() {
  }
  toggleTheme(): void {
    if (this.currentTheme === 'light') {
      this.changeToDarkTheme();
      this.currentTheme = 'dark';
    } else {
      this.changeToLightTheme();
      this.currentTheme = 'light';
    }
  }

  changeToDarkTheme(): void {
    document.documentElement.style.setProperty('--primary', '#262626');
    document.documentElement.style.setProperty('--secondary', '#faf7f7');
    document.documentElement.style.setProperty('--light', '#faf7f7');
  }

  changeToLightTheme(): void {
    document.documentElement.style.setProperty('--primary', '#faf7f7');
    document.documentElement.style.setProperty('--secondary', '#262626');
    document.documentElement.style.setProperty('--light', '#4D4D4D');
  }

}
