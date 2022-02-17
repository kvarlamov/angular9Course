import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { IPost } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  //pass param to parent
  @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>()

  //get html element from dom using angular
  @ViewChild('titleInput') inputRef: ElementRef

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

  focusTitle() {
    //nativeElement === Dom Node
    this.inputRef.nativeElement.focus()
  }

}
