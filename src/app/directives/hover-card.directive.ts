import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverCard]',
  standalone: true
})
export class HoverCardDirective {
  

  constructor(private el:ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    // Changement de la bordure et modification du bouton 'Détails'
    this.renderer.addClass(this.el.nativeElement,'hovered');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    // Restauration des styles d'origine
    this.renderer.removeClass(this.el.nativeElement, 'hovered');
  }
}
