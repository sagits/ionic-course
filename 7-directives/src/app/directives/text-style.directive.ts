import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTextStyle]'
})
export class TextStyleDirective {

  @Input() textColor: string;
  @Input() textAlign: string;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = "#000";
  }

  ngOnInit() {
    if (this.textColor) {
      this.el.nativeElement.style.color = this.textColor;
    }
    if (this.textAlign) {
      this.el.nativeElement.style.textAlign = this.textAlign;
    }
  }

}
