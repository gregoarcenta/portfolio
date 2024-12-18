import { Component, inject, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@/components/navbar/navbar.component';
import { FooterComponent } from '@/components/footer/footer.component';
import { LanguageService } from '@/services/language.service';
import { ThemeService } from '@/services/theme.service';
import { ScrollTopBtnComponent } from '@/components/home/scroll-top-btn/scroll-top-btn.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    NavbarComponent,
    ScrollTopBtnComponent,
    TranslatePipe,
  ],
  template: `
    <div class="bg-white dark:bg-gray-900 min-h-dvh flex flex-col">
      <app-navbar />
      <main class="container mx-auto flex-1" style="margin-top: 76px;">
        <router-outlet />
      </main>
      @defer {
        <app-footer />
        <!--btn scroll top-->
        <app-scroll-top-btn />
        <!--tooltip btn scroll top-->
        <div
          id="tooltip-top"
          role="tooltip"
          class="absolute top-0 z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          {{ 'home.btn_down' | translate }}
        </div>
      }
    </div>
  `,
})
export class AppComponent implements OnInit {
  private readonly languageService = inject(LanguageService);
  private readonly themeService = inject(ThemeService);

  ngOnInit(): void {
    // Flowbite init
    initFlowbite();

    // Language init
    this.languageService.init();

    // Theme init
    this.themeService.themeInit();
  }
}
