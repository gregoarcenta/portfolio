import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-project-slider',
  imports: [NgOptimizedImage],
  templateUrl: './project-slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectSliderComponent {
  public images = input.required<string[]>();
}
