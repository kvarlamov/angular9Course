import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {delay} from 'rxjs/operators'
import { Todo, TodosService } from './todos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  

  todos: Todo[] = []
  todoTitle = ''
  loading = false

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    }

    this.todosService.addTodo(newTodo)
      .subscribe(todo => {
        console.log(todo);
        this.todos.push(todo);
        this.todoTitle = ''
      })
  }

  fetchTodos() {
    this.loading = true;
    this.todosService.fetchTodos()
      .pipe(delay(1500))
      .subscribe(todos => {
        this.todos = todos
        this.loading = false
      })
  }

  completeTodo(id:number | undefined) {
    this.todosService.completeTodo(id)
      .subscribe(todo => {
        (this.todos.find(t => t.id === id) as Todo).completed = true;
      })
  }

  removeTodo(id:number | undefined) {
    this.todosService.removeTodo(id)
      .subscribe(res => {
        console.log(res)
        this.todos = this.todos.filter(t => t.id != id)
      })
  }
}
