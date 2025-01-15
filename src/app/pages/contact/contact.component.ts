import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { _, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '@/components/loader/loader.component';
import { Router } from '@angular/router';

type ContactFormData = 'email' | 'subject' | 'message';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe, ReactiveFormsModule, AsyncPipe, LoaderComponent],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);

  public loading = signal<boolean>(false);
  public sendSuccess = signal<boolean>(false);
  private formUrl = 'https://getform.io/f/bmddlxka';

  public contactForm = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    subject: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(100)],
    ],
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000),
      ],
    ],
  });

  get getEmailError(): Observable<string> {
    const control = this.contactForm.controls['email'];
    if (control.getError('required')) {
      return this.getLangError('emailErrorRequired');
    }
    if (control.getError('email')) {
      return this.getLangError('emailError');
    }
    return of('');
  }

  get getSubjectError() {
    const control = this.contactForm.controls['subject'];
    if (control.getError('required')) {
      return this.getLangError('subjectErrorRequired');
    }
    if (control.getError('minlength')) {
      return this.getLangError('subjectErrorMinLength');
    }
    if (control.getError('maxlength')) {
      return this.getLangError('subjectErrorMaxLength');
    }
    return of('');
  }

  get getMessageError() {
    const control = this.contactForm.controls['message'];
    if (control.getError('required')) {
      return this.getLangError('messageErrorRequired');
    }
    if (control.getError('minlength')) {
      return this.getLangError('messageErrorMinLength');
    }
    if (control.getError('maxlength')) {
      return this.getLangError('messageErrorMaxLength');
    }
    return of('');
  }

  private getLangError(key: string) {
    return this.translate.get(_(`contact.${key}`)).pipe(take(1));
  }

  isInvalid(campo: ContactFormData): boolean {
    return (
      this.contactForm.controls[campo].touched &&
      this.contactForm.controls[campo].invalid
    );
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      return this.contactForm.markAllAsTouched();
    }

    this.loading.set(true);

    const formData = new FormData();

    Object.keys(this.contactForm.controls).forEach((key) => {
      const control = this.contactForm.controls[key as ContactFormData];
      formData.append(key, control.value);
    });

    const headers = new HttpHeaders({ Accept: 'application/json' });

    this.http
      .post<{ success: boolean }>(this.formUrl, formData, { headers })
      .subscribe({
        next: (res) => {
          if (res.success) {
            // console.log('Submitted', res);
            this.contactForm.reset();
            this.loading.set(false);
            this.sendSuccess.set(true);
          } else {
            this.goHome();
          }
        },
        error: (err) => {
          console.log(err);
          this.goHome();
        },
      });
  }

  async goHome() {
    await this.router.navigate(['/']);
  }
}
