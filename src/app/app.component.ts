import { Component, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@/components/navbar/navbar.component';
import { FooterComponent } from '@/components/footer/footer.component';
import { LanguageService } from '@/services/language.service';
import { ThemeService } from '@/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  template: `
    <div class="bg-white dark:bg-gray-900 min-h-dvh flex flex-col">
      <app-navbar />
      <main class="container mx-auto flex-1" style="margin-top: 76px;">
        <router-outlet />
      </main>
      @defer {
        <app-footer />
      }
    </div>
  `,
})
export class AppComponent {
  private readonly languageService = inject(LanguageService);
  private readonly themeService = inject(ThemeService);

  constructor() {
    // Flowbite init
    initFlowbite();

    // Language init
    this.languageService.init();

    // Theme init
    this.themeService.themeInit();
  }
}
