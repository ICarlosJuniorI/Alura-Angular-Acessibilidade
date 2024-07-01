import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appKmItem]',
})
export class KeyboardManagedItemDirective {
  @Output() public focused = new EventEmitter<void>();

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  public focus(): void {
    this.elementRef.nativeElement.focus();
    this.focused.emit();
  }

  // Verifica se o elemento é o que está sendo focado no documento
  public isFocused(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }
}
