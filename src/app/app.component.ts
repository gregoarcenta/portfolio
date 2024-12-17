import { Component, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@/components/navbar/navbar.component';
import { FooterComponent } from '@/components/footer/footer.component';
import { LanguageService } from '@/services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  template: `
    <div class="bg-white dark:bg-gray-900">
      <app-navbar />
      <main class="container mx-auto" style="margin-top: 76px">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
})
export class AppComponent {
  // private readonly translate = inject(TranslateService);
  private readonly languageService = inject(LanguageService);

  constructor() {
    // Flowbite init
    initFlowbite();

    // Language init
    this.languageService.init();

    // Theme init
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
