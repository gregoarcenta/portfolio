import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IProject, technologyClasses } from '@/interfaces/project';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { TruncatePipe } from '@/pipes/truncate.pipe';
import { RouterLink } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { ProjectTechnologiesComponent } from '@/components/projects/project-technologies/project-technologies.component';

@Component({
  selector: 'app-project-card',
  imports: [
    NgOptimizedImage,
    TranslatePipe,
    TruncatePipe,
    RouterLink,
    ProjectTechnologiesComponent,
  ],
  templateUrl: './project-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInTop', [
      transition(
        ':enter',
        [
          style({ transform: 'translateY(30px)', opacity: 0 }),
          animate(
            '1s {{delay}}s ease',
            style({ transform: 'translateY(0px)', opacity: 1 }),
          ),
        ],
        { params: { delay: '0' } },
      ),
    ]),
  ],
  styles: `
    .app-shadow {
      -webkit-box-shadow: 13px 10px 9px -7px rgba(0, 0, 0, 0.06);
      -moz-box-shadow: 13px 10px 9px -7px rgba(0, 0, 0, 0.06);
      box-shadow: 13px 10px 9px -7px rgba(0, 0, 0, 0.06);
    }
  `,
})
export class ProjectCardComponent {
  protected readonly technologyClasses = technologyClasses;

  public project = input.required<IProject>();
  public delay = input<number>(0);
}
