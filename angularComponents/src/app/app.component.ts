import { Component } from '@angular/core';

export interface IPost {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: IPost[] = [
    {title: 'Want to learn components', text: 'Still learn components', id: 1},
    {title: 'Next block', text: 'Directives and Pipes', id: 2}
  ]
}
