import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  IMAGE_LOADER,
  ImageLoaderConfig,
  NgOptimizedImage,
} from '@angular/common';

@Component({
  selector: 'app-project-slider',
  imports: [NgOptimizedImage],
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://res.cloudinary.com/dy7luvgd5/image/upload/v1735063243/portfolio/${config.src}`;
      },
    },
  ],
  templateUrl: './project-slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectSliderComponent {
  public images = input.required<string[]>();
}
