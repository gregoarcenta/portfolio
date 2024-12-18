import { inject, Injectable, signal } from '@angular/core';
import { _, TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';

export enum Lang {
  EN = 'en',
  ES = 'es',
}

interface CurrentLang {
  url: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public languageAvailable = signal([Lang.EN, Lang.ES]);
  public currentLanguage = signal<CurrentLang | null>(null);

  private readonly translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(this.languageAvailable());
  }

  init(): void {
    const lang = (localStorage.getItem('lang_') as Lang) ?? Lang.EN;
    this.setLanguage(lang);
  }

  setLanguage(language: Lang) {
    this.translate.use(language);
    localStorage.setItem('lang_', language);
    this.translate
      .get(_(`header.language.${language}`))
      .pipe(take(1))
      .subscribe((languageName: string) => {
        this.currentLanguage.set({
          url: `assets/icons/${language}.png`,
          name: languageName,
        });
      });
  }
}
