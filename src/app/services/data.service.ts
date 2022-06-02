import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  deleteTodo(index: number) {
    throw new Error('Method not implemented.');
  }

  tarefas: Tarefa[] = [  ]

  constructor() { }

  getAllTarefas(){
    return this.tarefas
  }

  addTarefa(tarefa:Tarefa){
    this.tarefas.push(tarefa)
  }

  updateTarefa(index:number, updateTarefa:Tarefa){
    this.tarefas[index] = updateTarefa
  }

  removeTarefa(index:number){
    this.tarefas.splice(index,1)
  }
}
