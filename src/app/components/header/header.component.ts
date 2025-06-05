import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  query = '';

  constructor(private router: Router) {}

  onSearch() {
    const term = this.query.trim();
    if (term) {
      this.router.navigate(['/search'], {queryParams: {q: term}});
    }
  }
}
