import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  taskArray = [{taskName: 'Brush teeth', isCompleted: false, isEditable: false }]
  

  onSubmit(form: NgForm){
    console.log(form);

    this.taskArray.push({
      taskName : form.controls['task'].value,
      isCompleted : false,
      isEditable : false
    })

    form.reset();
  }

  onDelete(index:number){
   console.log(index);
   
   this.taskArray.splice(index, 1);
  }

  onCheck(index:number){
     console.log(this.taskArray)

     this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  onEdit(index:number){
    this.taskArray[index].isEditable = true;
   }

   onSave(index:number, taskInput : string){
    this.taskArray[index].taskName = taskInput;
    this.taskArray[index].isEditable = false;
   }
}
