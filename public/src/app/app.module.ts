import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './services/http.service';
import {FormsModule} from '@angular/forms';

import { FrameComponent } from './components/frame/frame.component';
import { AdDeleteComponent } from './components/ad-delete/ad-delete.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/frame/children/header/header.component';
import { BodyComponent } from './components/frame/children/body/body.component';
import { FooterComponent } from './components/frame/children/footer/footer.component';

@NgModule({
  declarations: [
    FrameComponent,
    AdDeleteComponent,
    LoginComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [FrameComponent]
})
export class AppModule { }
