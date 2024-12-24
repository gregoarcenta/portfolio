import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import {
  IMAGE_LOADER,
  ImageLoaderConfig,
  NgOptimizedImage,
} from '@angular/common';

@Component({
  selector: 'app-certifications',
  imports: [TranslatePipe, NgOptimizedImage],
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://res.cloudinary.com/dy7luvgd5/image/upload/v1735063243/portfolio/${config.src}`;
      },
    },
  ],
  templateUrl: './certifications.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationsComponent {
  public certificates = signal([
    {
      name: 'Angular Pro',
      imageUrl: 'angular.webp',
      pdfUrl: 'https://cursos.devtalles.com/certificates/1h2qsyn0vq',
    },
    {
      name: 'RxJs',
      imageUrl: 'rxjs.webp',
      pdfUrl: 'https://cursos.devtalles.com/certificates/jcqu0uprib',
    },
    {
      name: 'Nest Js',
      imageUrl: 'nestjs.webp',
      pdfUrl: 'https://cursos.devtalles.com/certificates/kwufposps0',
    },
    {
      name: 'SQL de cero',
      imageUrl: 'sql.webp ',
      pdfUrl: 'https://cursos.devtalles.com/certificates/o7c6td1t9r',
    },
    {
      name: 'Docker',
      imageUrl: 'docker.webp',
      pdfUrl: 'https://cursos.devtalles.com/certificates/tdzancnnys',
    },
  ]);
}
