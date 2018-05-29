import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[blueColors]'
})
export class BlueColorsDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color="blue";
   }

}
