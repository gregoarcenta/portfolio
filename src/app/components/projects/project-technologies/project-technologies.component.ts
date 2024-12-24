import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Technology, technologyClasses } from '@/interfaces/project';

@Component({
  selector: 'app-project-technologies',
  imports: [],
  templateUrl: './project-technologies.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectTechnologiesComponent {
  public technologies = input.required<Technology[]>();
  protected readonly technologyClasses = technologyClasses;
}
