import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  IMAGE_LOADER,
  ImageLoaderConfig,
  NgOptimizedImage,
} from '@angular/common';

@Component({
  selector: 'app-project-mobile-mockup',
  imports: [NgOptimizedImage],
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://res.cloudinary.com/dy7luvgd5/image/upload/v1735063243/portfolio/${config.src}`;
      },
    },
  ],
  templateUrl: './project-mobile-mockup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectMobileMockupComponent {
  public image = input.required<string>();
}
