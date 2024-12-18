import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-scroll-top-btn',
  imports: [],
  templateUrl: './scroll-top-btn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onWindowScroll()',
    class: 'absolute left-0 right-0 bottom-0',
  },
  styles: `
    .pulse-button {
      position: fixed;
      right: 5%;
      padding: 10px 20px;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }

    .animation {
      animation: pulseAnimation 1.8s ease-out;
    }

    @keyframes pulseAnimation {
      0% {
        transform: scale(1);
        background-color: #e3e3e3;
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  `,
})
export class ScrollTopBtnComponent {
  public bottomValue = signal(10);
  private scrollBtnElement =
    viewChild<ElementRef<HTMLButtonElement>>('scrollBtn');

  private scrollThreshold = 700;

  onWindowScroll(): void {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      const footerRect = footerElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      let visibleHeight = Math.max(0, windowHeight - footerRect!.top!);

      if (visibleHeight > footerRect.height) {
        visibleHeight = footerRect.height;
      }

      if (visibleHeight > 10) this.bottomValue.set(visibleHeight);
    }

    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollPosition > this.scrollThreshold) {
      this.scrollBtnElement()?.nativeElement.classList.remove(
        'invisible',
        'opacity-0',
      );
      this.scrollBtnElement()?.nativeElement.classList.add('animation');
    } else {
      this.scrollBtnElement()?.nativeElement.classList.add(
        'invisible',
        'opacity-0',
      );
      this.scrollBtnElement()?.nativeElement.classList.remove('animation');
    }
  }

  toScrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
