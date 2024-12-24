import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-project-mobile-mockup',
  imports: [NgOptimizedImage],
  templateUrl: './project-mobile-mockup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectMobileMockupComponent {
  public image = input.required<string>();
}
