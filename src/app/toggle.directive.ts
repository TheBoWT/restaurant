import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  constructor() { }

  @HostListener('click') onclick(){
    console.log('clicked');

  }
}
