import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appStyle]'
})

export class StyleDirective {
    constructor(private el: ElementRef, private render: Renderer2) {
        this.render.setStyle(this.el.nativeElement, 'color', 'blue')
    }
}