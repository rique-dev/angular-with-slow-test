import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Lib1Component } from '@angular-slow/lib1';
import { Lib2Component } from '@angular-slow/lib2';
import { Lib3Component } from '@angular-slow/lib3';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    Lib1Component,
    Lib2Component,
    Lib3Component,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
