import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-featured-functions',
  imports: [],
  templateUrl: './featured-functions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedFunctionsComponent {
  public featuredFunctions = input.required<string[]>();
}
