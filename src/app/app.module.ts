import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; 
import { MisCursosComponent } from './mis-cursos/mis-cursos.component'; 
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,         
    MisCursosComponent   
  ],
  imports: [
    BrowserModule,       
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }

