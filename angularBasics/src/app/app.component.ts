import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title';
  number = 42
  arr = [1,2,3]

  obj = {name: "test", age: 33, address: {city: 'SPB', street: 'street'}}

  inputType = 'checkbox'
  inputValue = ''

  constructor() {
    setTimeout(() => {
      this.inputType = 'radio'
    }, 3000)
  }

  onInput(event: KeyboardEvent) {
    console.log(event)
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onClick(): void {
    console.log('clicked')
  }
}
