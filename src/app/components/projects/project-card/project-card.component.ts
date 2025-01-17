import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IProject } from '@/interfaces/project';
import {
  IMAGE_LOADER,
  ImageLoaderConfig,
  NgOptimizedImage,
} from '@angular/common';
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
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://res.cloudinary.com/dy7luvgd5/image/upload/v1735063243/portfolio/${config.src}`;
      },
    },
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
  public project = input.required<IProject>();
  public delay = input<number>(0);
}
