import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input('myPost')
  post: IPost;

  constructor() { }

  ngOnInit(): void {
  }

}
