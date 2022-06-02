import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  tarefas: Tarefa[] = [
    new Tarefa('essa é uma tarefa teste'),
    new Tarefa('essa é um outro texte',true)
  ]

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
