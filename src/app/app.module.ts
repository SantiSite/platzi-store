import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      SharedModule,
      CoreModule,
      BrowserAnimationsModule,
      HttpClientModule,
      AngularFireModule.initializeApp(environment.firebaseConfig, 'santi-site-angular-platzi'),
      AngularFireAuthModule,
      AngularFireStorageModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
