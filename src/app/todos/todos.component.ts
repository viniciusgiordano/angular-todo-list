import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';
import { DataService } from '../services/data.service';
import { Tarefa } from '../services/tarefa.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  tarefas: Tarefa[]
  errosValidacao: boolean

  constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.tarefas=this.dataService.getAllTarefas()
  }

  onFormSubmit(form:NgForm){
    if(form.invalid) {return this.errosValidacao =true}
    
    console.log('Form submited')
    this.dataService.addTarefa(new Tarefa(form.value.texto))

    this.errosValidacao=false
    form.reset()
  }

  editTarefa(tarefa:Tarefa){
    const index = this.tarefas.indexOf(tarefa)

    let dialogRef = this.dialog.open(EditarDialogComponent, {
      width: '600px',
      data: tarefa
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTarefa(index, result)
      }
    })
    // this.dataService.updateTarefa()
  }

  removeTarefa(tarefa: Tarefa) {
    const index = this.tarefas.indexOf(tarefa)
    this.dataService.removeTarefa(index)
  }

}
