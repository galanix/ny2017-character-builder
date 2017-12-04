import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImageBuilderComponent } from './image-builder/image-builder.component';

declare let $ :any;

@NgModule({
  declarations: [
    AppComponent,
    ImageBuilderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
