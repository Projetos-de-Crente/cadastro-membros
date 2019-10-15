import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[statusAtivo]'
})
export class StatusDirective implements OnInit {

  @Input() statusAtivo: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.statusAtivo) {
      this.el.nativeElement.styleDecoration = 'line-through';
    }
  }

}
