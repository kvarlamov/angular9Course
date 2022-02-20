import { Injectable } from "@angular/core"
import { LogService } from "./log.service"

//allow us to inject other services to this one - for example log.service
@Injectable({
    providedIn:'root' //allow us not to import service manually and it is visible for all components
})

export class AppCounterService {

    constructor(private logService: LogService) {

    }

    counter = 0

    increase() {
        this.counter++
        this.logService.log(this.counter)
    }

    decrease() {
        this.counter--
        this.logService.log(this.counter)
    }
}
