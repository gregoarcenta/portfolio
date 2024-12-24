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
import { IProject } from '@/interfaces/project';
import { ProjectNotFoundComponent } from '@/components/projects/project-not-found/project-not-found.component';
import { LoaderComponent } from '@/components/loader/loader.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { initCarousels } from 'flowbite';
import { BannerService } from '@/services/banner.service';
import { ProjectSliderComponent } from '@/components/projects/project-slider/project-slider.component';
import { ProjectTechnologiesComponent } from '@/components/projects/project-technologies/project-technologies.component';
import { ProjectMobileMockupComponent } from '@/components/projects/project-mobile-mockup/project-mobile-mockup.component';
import { FeaturedFunctionsComponent } from '@/components/projects/featured-functions/featured-functions.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  imports: [
    ProjectNotFoundComponent,
    LoaderComponent,
    TranslatePipe,
    ProjectSliderComponent,
    ProjectTechnologiesComponent,
    ProjectMobileMockupComponent,
    FeaturedFunctionsComponent,
  ],
  templateUrl: './project.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectComponent implements AfterViewInit {
  private readonly route = inject(ActivatedRoute);
  private readonly translateService = inject(TranslateService);
  private readonly bannerService = inject(BannerService);
  private readonly title = inject(Title);

  public project = signal<IProject | null>({} as IProject);
  public slug: string;

  constructor() {
    const currentLang = this.translateService.currentLang as Lang;
    this.slug = this.route.snapshot.params['slug'];

    const project = this.findProject(this.slug, currentLang) ?? null;

    this.setTitle(project?.name);
    this.project.set(project);

    this.translateService.onLangChange
      .pipe(takeUntilDestroyed())
      .subscribe(({ lang }) => {
        const project = this.findProject(this.slug, lang as Lang)!;
        this.setTitle(project.name);
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

  setTitle(title = 'Unknown') {
    this.title.setTitle('Project: ' + title);
  }
}
