import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lang } from '@/services/language.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { projects_en, projects_es } from '@/data/projects';
import { IProject, technologyClasses } from '@/interfaces/project';
import { ProjectNotFoundComponent } from '@/components/projects/project-not-found/project-not-found.component';
import { LoaderComponent } from '@/components/loader/loader.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgOptimizedImage } from '@angular/common';
import { initCarousels } from 'flowbite';
import { BannerService } from '@/services/banner.service';

@Component({
  selector: 'app-project',
  imports: [
    ProjectNotFoundComponent,
    LoaderComponent,
    NgOptimizedImage,
    TranslatePipe,
  ],
  templateUrl: './project.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectComponent implements AfterViewInit {
  private readonly route = inject(ActivatedRoute);
  private readonly translateService = inject(TranslateService);
  private readonly bannerService = inject(BannerService);

  public project = signal<IProject | null>({} as IProject);
  protected readonly technologyClasses = technologyClasses;
  public slug: string;

  constructor() {
    const currentLang = this.translateService.currentLang as Lang;
    this.slug = this.route.snapshot.params['slug'];

    const project = this.findProject(this.slug, currentLang) ?? null;

    this.project.set(project);

    this.translateService.onLangChange
      .pipe(takeUntilDestroyed())
      .subscribe(({ lang }) => {
        const project = this.findProject(this.slug, lang as Lang)!;
        this.project.set(project);
      });
  }

  ngAfterViewInit(): void {
    setTimeout(() => initCarousels(), 100);
    setTimeout(() => this.bannerService.showBanner(), 2000);
  }

  findProject(slug: string, lang: Lang): IProject | undefined {
    if (lang === Lang.ES) {
      return projects_es.find((project) => project.slug === slug);
    }
    return projects_en.find((project) => project.slug === slug);
  }
}
