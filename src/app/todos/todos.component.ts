import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(private dataService: DataService) { }

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

}
