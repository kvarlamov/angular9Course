import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, pipe, throwError } from "rxjs";
import { catchError, delay } from "rxjs/operators";

export interface Todo {
    completed: boolean,
    title: string,
    id?: number
  }

@Injectable({providedIn: 'root'})
export class TodosService {
    constructor(private http: HttpClient) {}

    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo);
    }

    fetchTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todo2s?_limit=2')
            .pipe(
                delay(300),
                catchError(error => {
                    console.log('Error:', error.message);
                    return throwError(error)
                }));
    }

    completeTodo(id: number | undefined): Observable<Todo> {
        return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {completed: true})
    }

    removeTodo(id:number | undefined): Observable<void> {
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
    }
}