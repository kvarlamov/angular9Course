import { AfterContentChecked,EventEmitter, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { IPost } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  //change detection strategy - with OnPush reacted only on altering of @Input - use this if we know that we depends only on input params
  changeDetection: ChangeDetectionStrategy.OnPush,
  //make styles global (without any attributes)
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  //get named param from parent component
  @Input('myPost') post: IPost;
  //Get HTML DOM from <ng-content>
  @ContentChild('info', {static:true}) infoRef: ElementRef //true if use it in ngOnInit
  //pass param to parent
  @Output() onRemove = new EventEmitter<number>()

  //calls before hooks
  constructor() {
    console.log('constructor')
  }

  removePost(){
    this.onRemove.emit(this.post.id)
  }

  //LIFECYCLE HOOKS
  //https://angular.io/guide/lifecycle-hooks#lifecycle-event-sequence

  //before onInit - when param changes, contain previous value
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes)
  }
  //component initialization
  ngOnInit(): void {
    console.log("ngOnInit")
    // console.log(this.infoRef.nativeElement)
  }
  //
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  //
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  //all content ready for using
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  //initialization of elements in component (html)
  ngAfterViewInit(): void {
    //Called when view (html) initialized
    console.log("ngAfterViewInit")
  }
  //
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  //calls when component or directive deestroyed - here should unsubscribe from observable eth...
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }
}
