import { Component } from '@angular/core';
import { Console, error } from 'console';
import { interval, Subscription, Observable, Subject } from 'rxjs'; //this import let us create new streams
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sub:Subscription
  sub2:Subscription

  //with Subject we could subscribe on stream
  streamSubject$:Subject<number> = new Subject<number>()
  counter = 0

  constructor() {
    const stream$ = new Observable(observer => {
      setTimeout(() => {
        observer.next(1)
      }, 500)

      setTimeout(() => {
        observer.error('something went wrong')
      }, 2000)

      setTimeout(() => {
        observer.complete()
      }, 2500)

      setTimeout(() => {
        observer.next(2)
      }, 3000)
    })

    this.sub2 = this.streamSubject$.subscribe(value => {
      console.log(value)
    })

    this.sub = stream$.subscribe(
      (value) => {
        console.log(`Next: ${value}`)},
      (error) => {
        console.log('error: ',  error)
      },
      () => console.log('completed') // arises only without error
        )


    const intervalStream$ = interval(1000)
    this.sub = intervalStream$
      .pipe(
        filter(v => v % 2 === 0),
        map(v => 'Mapped value:' + v)
      )
      .subscribe((value) => {
        console.log(value)
      })
  }

  next() {
    this.counter++
    this.streamSubject$.next(this.counter)

  }

  stop() {
    //unsubscribe to prevent memory leak
    this.sub.unsubscribe()
  }
}
