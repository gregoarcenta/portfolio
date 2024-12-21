import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { initTooltips } from 'flowbite';
import { IProject, technologyClasses } from '@/interfaces/project';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TruncatePipe } from '@/pipes/truncate.pipe';
import { projects_en, projects_es } from '@/data/projects';
import { Lang } from '@/services/language.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-projects',
  imports: [NgOptimizedImage, TranslatePipe, TruncatePipe],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .app-shadow {
      -webkit-box-shadow: 13px 10px 9px -7px rgba(0, 0, 0, 0.06);
      -moz-box-shadow: 13px 10px 9px -7px rgba(0, 0, 0, 0.06);
      box-shadow: 13px 10px 9px -7px rgba(0, 0, 0, 0.06);
    }
  `,
})
export default class ProjectsComponent implements AfterViewInit {
  public projects = signal<IProject[]>([]);

  protected readonly technologyClasses = technologyClasses;

  private readonly translateService = inject(TranslateService);

  constructor() {
    const currentLang = this.translateService.currentLang as Lang;

    this.setProjects(currentLang);

    this.translateService.onLangChange
      .pipe(takeUntilDestroyed())
      .subscribe(({ lang }) => {
        this.setProjects(lang as Lang);
      });
  }

  ngAfterViewInit(): void {
    setTimeout(() => initTooltips(), 500);
  }

  setProjects(lang: Lang) {
    if (lang == 'en') {
      this.projects.set(projects_en);
    } else {
      this.projects.set(projects_es);
    }
  }
}
