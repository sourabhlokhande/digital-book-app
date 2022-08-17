import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookBrowserComponent } from './book-browser/book-browser.component';

@NgModule({
  declarations: [
    AppComponent,
    BookBrowserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
