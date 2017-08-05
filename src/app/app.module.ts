import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { ReproUiComponent } from './components/repro-ui/repro-ui.component';
import { ReproNavBarComponent } from './components/repro-ui/repro-nav-bar/repro-nav-bar.component';
import { ReproSideNavComponent } from './components/repro-ui/repro-side-nav/repro-side-nav.component';
import { ReproContentComponent } from './components/repro-ui/repro-content/repro-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ReproUiComponent,
    ReproNavBarComponent,
    ReproSideNavComponent,
    ReproContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
