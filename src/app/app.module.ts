import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core' ; 
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPageScrollCoreModule.forRoot( { duration: 500 } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
