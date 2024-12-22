import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lang } from '@/services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { projects_en, projects_es } from '@/data/projects';
import { IProject } from '@/interfaces/project';
import { ProjectNotFoundComponent } from '@/components/projects/project-not-found/project-not-found.component';
import { LoaderComponent } from '@/components/loader/loader.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-project',
  imports: [ProjectNotFoundComponent, LoaderComponent],
  templateUrl: './project.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly translateService = inject(TranslateService);

  public project = signal<IProject | null>({} as IProject);
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

  findProject(slug: string, lang: Lang): IProject | undefined {
    if (lang === Lang.ES) {
      return projects_es.find((project) => project.slug === slug);
    }
    return projects_en.find((project) => project.slug === slug);
  }
}
