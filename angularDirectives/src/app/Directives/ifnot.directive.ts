import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

//this is structure directive which is change structure of html
@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {

  @Input('appIfnot') set ifNot(condition: boolean) {
    if (!condition) {
      //show elements
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      //hide elements
      this.viewContainer.clear()
    }
  }
  
  //templateRef - contains elements in ng-template, viewCotainer - refer to ng-template
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {

   }

}
