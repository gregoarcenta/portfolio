import {
  AfterViewInit,
  Component,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@/components/navbar/navbar.component';
import { TranslateService } from '@ngx-translate/core';
import { FooterComponent } from '@/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar />
    <main class="flex-1 container mx-auto flex items-center">
      <!--      [ngStyle]="{ 'min-height': contentHeight() }"-->
      <router-outlet />
    </main>
    <app-footer />
  `,
  host: {
    class: 'block min-h-dvh flex flex-col bg-gray-900',
    '(window:resize)': 'setContentHeight()',
  },
})
export class AppComponent implements AfterViewInit {
  navbar = viewChild(NavbarComponent, { read: ElementRef });
  footer = viewChild(FooterComponent, { read: ElementRef });
  public contentHeight = signal<string>('500px');

  constructor(private readonly translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    const browserLang = this.translate.getBrowserLang();
    if (browserLang === 'es') {
      this.translate.use('es');
    } else {
      this.translate.use('en');
    }
  }

  ngAfterViewInit(): void {
    this.setContentHeight();
  }

  setContentHeight(): void {
    const windowHeight = window.innerHeight;
    const navbarHeight = this.navbar()?.nativeElement.offsetHeight;
    const footerHeight = this.footer()?.nativeElement.offsetHeight;

    // console.log(windowHeight);
    // console.log(navbarHeight, footerHeight);

    const height = windowHeight - navbarHeight - footerHeight;

    // console.log(height);

    this.contentHeight.set(`${height}px`);
  }
}
