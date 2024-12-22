import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
  viewChildren,
} from '@angular/core';
import { initTooltips } from 'flowbite';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TruncatePipe } from '@/pipes/truncate.pipe';
import { Lang } from '@/services/language.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IProject, technologyClasses } from '@/interfaces/project';
import { projects_en, projects_es } from '@/data/projects';

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
  private projectElements = viewChildren<ElementRef>('project');

  public projects = signal<IProject[]>([]);
  public visibleProjects = signal<number>(3);
  public onLoadProjects = signal<boolean>(false);

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

  loadMoreProjects() {
    this.onLoadProjects.set(true);
    setTimeout(() => {
      this.visibleProjects.update((lastValue) => lastValue + 3);
      this.scrollTLastElement();
      this.onLoadProjects.set(false);
    }, 1000);
  }

  scrollTLastElement() {
    setTimeout(() => {
      const newProjectIndex = this.visibleProjects();
      const lastVisibleElement = this.projectElements()[newProjectIndex - 1];

      if (lastVisibleElement) {
        lastVisibleElement.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
      this.onLoadProjects.set(false);
    }, 100);
  }
}
