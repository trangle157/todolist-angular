import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoBoard } from './todo-board/todo-board.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoBoard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] //target to start the app
})

export class AppModule { }
