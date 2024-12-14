import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@/components/navbar/navbar.component';
import { TranslateService } from '@ngx-translate/core';
import { FooterComponent } from '@/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar />
    <main class="flex-1 container mx-auto">
      <router-outlet />
    </main>
    <app-footer />
  `,
  host: {
    class: 'block h-full flex flex-col bg-gray-900',
  },
})
export class AppComponent {
  constructor(private readonly translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    const browserLang = this.translate.getBrowserLang();
    if (browserLang === 'es') {
      this.translate.use('es');
    } else {
      this.translate.use('en');
    }
  }
}
