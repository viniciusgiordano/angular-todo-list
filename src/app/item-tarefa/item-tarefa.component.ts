import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarefa } from '../services/tarefa.model';


@Component({
  selector: 'app-item-tarefa',
  templateUrl: './item-tarefa.component.html',
  styleUrls: ['./item-tarefa.component.scss']
})
export class ItemTarefaComponent implements OnInit {
  @Input() tarefa: Tarefa
  @Output() editClicked: EventEmitter<void> = new EventEmitter()
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onEditClick(){
    this.editClicked.emit()
  }

  onDeleteClicked() {
    this.deleteClicked.emit()
  }

}
