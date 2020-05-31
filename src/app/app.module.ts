import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './shared/cards/cards.component';
import { NoDataFoundComponent } from './shared/no-data-found/no-data-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NoDataFoundComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
