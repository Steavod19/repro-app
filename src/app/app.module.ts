import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule, Routes } from '@angular/router';

// app components and pages
import { AppComponent } from './app.component';
import { ReproUiComponent } from './components/repro-ui/repro-ui.component';
import { ReproNavBarComponent } from './components/repro-ui/repro-nav-bar/repro-nav-bar.component';
import { ReproSideNavComponent } from './components/repro-ui/repro-side-nav/repro-side-nav.component';
import { ReproContentComponent } from './components/repro-ui/repro-content/repro-content.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

// New imports to update based on AngularFire2 version 4
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { PageNotFoundComponent } from './components/repro-ui/page-not-found/page-not-found.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAgRMiV-0EUNfT7987nhFc9ALiqq1kKpnw",
    authDomain: "reproui-3f5f0.firebaseapp.com",
    databaseURL: "https://reproui-3f5f0.firebaseio.com",
    projectId: "reproui-3f5f0",
    storageBucket: "",
    messagingSenderId: "676259602369"

};

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'repro-ui', component: ReproUiComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ReproUiComponent,
    ReproNavBarComponent,
    ReproSideNavComponent,
    ReproContentComponent,
    LandingPageComponent,
    PageNotFoundComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
