
import { BrowserModule }  from "@angular/platform-browser";
import { HttpModule }     from "@angular/http";
import { FormsModule, ReactiveFormsModule}    from "@angular/forms";
import { NgModule }       from "@angular/core";

// Application components
import { AppComponent }     from './app.component';


@NgModule({
  declarations:[ AppComponent ],
  imports:[
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule ],
  providers:[],
  bootstrap:[ AppComponent ]
})

export class AppModule{}
