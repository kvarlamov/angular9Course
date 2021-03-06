import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, pipe, throwError } from "rxjs";
import { catchError, delay, map, tap } from "rxjs/operators";

export interface Todo {
    completed: boolean,
    title: string,
    id?: number
  }

@Injectable({providedIn: 'root'})
export class TodosService {
    constructor(private http: HttpClient) {}

    addTodo(todo: Todo): Observable<Todo> {
        // const headers = new HttpHeaders({
        //     'MyCustomHeader': Math.random().toString()
        // })
        return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
            headers: new HttpHeaders({
                'MyCustomHeader': Math.random().toString()
            })
        });
    }

    fetchTodos(): Observable<Todo[]> {
        let params = new HttpParams();
        params = params.append('_limit','4');
        params = params.append('custom','value');

        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2', {
            // params: new HttpParams().set('_limit','3')
            params,
            observe: 'response'
        })
            .pipe(
                map(response => {
                   console.log(response);
                   return <Todo[]>response.body;
                }),
                delay(300),
                catchError(error => {
                    console.log('Error:', error.message);
                    return throwError(error)
                }));
    }

    completeTodo(id: number | undefined): Observable<Todo> {
        return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {completed: true})
    }

    removeTodo(id:number | undefined): Observable<any> {
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            observe: 'events',
            responseType: 'json'
        }).pipe(
            //detailed access to all events in request
            tap(event => {
                console.log(event);
                if (event.type === HttpEventType.Sent) {
                    console.log('Sent', event);
                }
                if (event.type === HttpEventType.Response) {
                    console.log('Response', event);
                }
            })
        );
    }
}