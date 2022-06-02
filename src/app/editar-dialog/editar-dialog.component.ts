import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarefa } from '../services/tarefa.model';

@Component({
  selector: 'app-editar-dialog',
  templateUrl: './editar-dialog.component.html',
  styleUrls: ['./editar-dialog.component.scss']
})
export class EditarDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditarDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public tarefa:Tarefa
  ) { }

  ngOnInit(): void {
  }

  fecha(){
    this.dialogRef.close()
  }

  onFormSubmit(form:NgForm){
    this.tarefa.texto = form.value.texto;
    this.dialogRef.close(this.tarefa)
  }

}
