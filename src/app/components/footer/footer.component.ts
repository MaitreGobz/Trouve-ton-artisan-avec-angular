import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  showButton = false;

  @HostListener('window: scroll', [])
  onWindowScroll() {
    this.showButton = window.pageYOffset > 300;
  }
  scrollToTop(): void {
    window.scrollTo({ top:0, behavior: 'smooth'});
  }
}
