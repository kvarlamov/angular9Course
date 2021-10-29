import { AfterContentChecked,EventEmitter, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { IPost } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, //with OnPush reacted only on @Input
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('myPost') post: IPost;
  @ContentChild('info', {static:true}) infoRef: ElementRef //true if use it in ngOnInit
  @Output() onRemove = new EventEmitter<number>()

  constructor() { 
    console.log('constructor')
  }

  removePost(){
    this.onRemove.emit(this.post.id)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes)
  }
  ngOnInit(): void {
    console.log("ngOnInit")
    // console.log(this.infoRef.nativeElement)
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    //Called when view (html) initialized
    console.log("ngAfterViewInit")
  } 
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }
}
