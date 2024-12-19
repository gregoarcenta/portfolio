import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { initTooltips } from 'flowbite';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => initTooltips(), 500);
  }
}
