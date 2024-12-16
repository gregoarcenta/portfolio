import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  viewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .routerLinkActive {
      @apply bg-yellow-400 text-gray-900 font-bold md:dark:hover:text-gray-900 dark:hover:bg-yellow-400;
    }
  `,
})
export class NavbarComponent implements AfterViewInit {
  public themeToggleDarkIcon = viewChild<ElementRef>('darkicon');
  public themeToggleLightIcon = viewChild<ElementRef>('lighticon');

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
}
