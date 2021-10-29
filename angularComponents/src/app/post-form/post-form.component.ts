import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IPost } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>()

  title: string = ''
  text = ''

  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: IPost = {
        title: this.title,
        text: this.text
      }

      this.onAdd.emit(post)

      console.log('New Post: ', post)

      this.title = this.text = ''
    }
  }

}
