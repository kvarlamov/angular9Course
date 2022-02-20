import { Component, OnInit } from '@angular/core';
import { AppCounterService } from '../services/app-counter.service';
import { LocalCounterService } from '../services/local-counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [LocalCounterService] //local component that is visible only for this component
})
export class CounterComponent {

  constructor(public appCounterService: AppCounterService, public localCounterService:LocalCounterService) {

  }


}
