import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {APP_LAZY_ROUTING} from './routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule,APP_LAZY_ROUTING,RouterModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, BookComponent, AddBookComponent, EditBookComponent ],
  exports:[RouterModule],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
