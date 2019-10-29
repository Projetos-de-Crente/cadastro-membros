import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[statusInativo]'
})
export class StatusDirective implements OnInit {

  @Input() statusInativo: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.statusInativo) {
      // this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = '#FFC107';
    }
  }

}
