import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-project-not-found',
  imports: [RouterLink],
  templateUrl: './project-not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectNotFoundComponent {}
