import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { ItemTarefaComponent } from './item-tarefa/item-tarefa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarDialogComponent } from './editar-dialog/editar-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ItemTarefaComponent,
    EditarDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
