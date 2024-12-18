import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { Lang, LanguageService } from '@/services/language.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage, TranslatePipe],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .routerLinkActive {
      @apply bg-primary-500 text-gray-900 font-bold dark:hover:text-gray-900 dark:hover:bg-yellow-400;
    }
  `,
})
export class NavbarComponent implements AfterViewInit {
  public themeToggleDarkIcon = viewChild<ElementRef>('darkicon');
  public themeToggleLightIcon = viewChild<ElementRef>('lighticon');
  public navRoutes = viewChild<ElementRef>('navRoutes');
  public hamburguerButton = viewChild<ElementRef>('hamburguerButton');

  private readonly languageService = inject(LanguageService);
  private readonly router = inject(Router);

  public currentLanguage = computed(() =>
    this.languageService.currentLanguage(),
  );

  public languageAvailable = computed(() =>
    this.languageService.languageAvailable(),
  );

  ngAfterViewInit(): void {
    // Change the icons inside the button based on previous settings
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.themeToggleLightIcon()?.nativeElement.classList.remove('hidden');
    } else {
      this.themeToggleDarkIcon()?.nativeElement.classList.remove('hidden');
    }
  }

  changeMode(): void {
    // toggle icons inside button
    this.themeToggleDarkIcon()?.nativeElement.classList.toggle('hidden');
    this.themeToggleLightIcon()?.nativeElement.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  async navigateToUrl(url: string) {
    await this.router.navigate([url]);
    if (!this.navRoutes()?.nativeElement.classList.contains('hidden')) {
      this.hamburguerButton()?.nativeElement.click();
    }
  }

  changeLanguage(lang: Lang): void {
    this.languageService.setLanguage(lang);
    setTimeout(() => document.body.click());
  }
}
