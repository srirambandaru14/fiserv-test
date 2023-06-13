import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DogsService } from './services/dogs.service';

import { DogsListComponent } from './components/dogs-list/dogs-list.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DogsListComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [DogsService]
})
export class AppModule { }