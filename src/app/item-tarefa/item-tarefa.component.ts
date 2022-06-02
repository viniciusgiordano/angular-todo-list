import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from '../services/tarefa.model';


@Component({
  selector: 'app-item-tarefa',
  templateUrl: './item-tarefa.component.html',
  styleUrls: ['./item-tarefa.component.scss']
})
export class ItemTarefaComponent implements OnInit {
  @Input() tarefa: Tarefa

  constructor() { }

  ngOnInit(): void {
  }

}
