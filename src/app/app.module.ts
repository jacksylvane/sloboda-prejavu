import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainTextComponent } from './components/main-text/main-text.component';
import { MessageComponent } from './components/message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { ScrollArrowComponent } from './components/scroll-arrow/scroll-arrow.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    MainTextComponent,
    MessageComponent,
    ScrollArrowComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2PageScrollModule,
    AngularFireModule.initializeApp(environment.firebase, 'sloboda-prejavu')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
