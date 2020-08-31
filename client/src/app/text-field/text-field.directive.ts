import { Directive, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTextField]'
})
export class TextFieldDirective {

  constructor(
    public viewContainerRef: ViewContainerRef,
    public templateRef: TemplateRef<any>,
  ) { }

}
