import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DefaultModal} from "./default-modal/default-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    DefaultModal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
