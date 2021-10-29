import { Component } from '@angular/core';

export interface Post {
  title: any
  text: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search = ''
  searchField='title'
  isActiveBtn:boolean = true

  posts: Post[] = [
    {title: 'Beer', text: 'The best beer ever'},
    {title: 'Scotch', text: 'The best scotch ever'},
    {title: 'JS', text: 'The best language ever'}
  ]

  changeSearchField(s: string){
    this.searchField = s
    this.isActiveBtn = !this.isActiveBtn
  }

  e: number = Math.E

  str = 'hello world'

  date = new Date()

  float:number=0.42

  obj = {
    a:1,
    b:{
      c:2,
      d:{
        e:3,
        f:4
      }
    }
  }
}
