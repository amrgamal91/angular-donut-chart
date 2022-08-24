import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DonutComponent } from './donut.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DonutComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
