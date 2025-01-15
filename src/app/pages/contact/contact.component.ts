import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  viewChild,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactComponent implements OnInit {
  private contactForm = viewChild<ElementRef<HTMLFormElement>>('form');

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.contactForm()?.nativeElement.reset();
  }
}
