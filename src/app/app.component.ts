import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@/components/navbar/navbar.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar />
    <main class="container mx-auto mt-4">
      <router-outlet />
    </main>
  `,
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
