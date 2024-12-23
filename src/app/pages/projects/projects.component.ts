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
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Lang } from '@/services/language.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IProject } from '@/interfaces/project';
import { projects_en, projects_es } from '@/data/projects';
import { LoaderComponent } from '@/components/loader/loader.component';
import { ProjectCardComponent } from '@/components/projects/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe, LoaderComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectsComponent implements AfterViewInit {
  private projectElements = viewChildren(ProjectCardComponent, {
    read: ElementRef,
  });

  public projects = signal<IProject[]>([]);
  public visibleProjects = signal<number>(3);
  public onLoadProjects = signal<boolean>(false);

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
      const lastVisibleElement = this.projectElements()[newProjectIndex - 3];
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
