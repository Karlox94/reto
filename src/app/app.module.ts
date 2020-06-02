import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CasbButtonModule } from 'casb-button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CasbButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
