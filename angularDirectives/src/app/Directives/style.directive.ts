import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appStyle]'
})

export class StyleDirective {
    constructor(private el: ElementRef, private render: Renderer2) {
        this.render.setStyle(this.el.nativeElement, 'color', 'blue')
    }

    @HostListener('click', ['$event.target']) onClick(event: Event) {
        console.log(event)
    }

    @HostListener('mouseenter') onEnter() {
        this.render.setStyle(this.el.nativeElement, 'color', 'yellow')
    }

    @HostListener('mouseleave') onLeave() {
        this.render.setStyle(this.el.nativeElement, 'color', null)
    }
}