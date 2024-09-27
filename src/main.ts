import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient()
  ]
}).catch((err) => console.error(err));

function moveBallRandomly(ball: HTMLElement) {
  const maxWidth = window.innerWidth - 30;
  const maxHeight = window.innerHeight - 30;

  const randomX = Math.random() * maxWidth;
  const randomY = Math.random() * maxHeight;

  ball.style.left = `${randomX}px`;
  ball.style.top = `${randomY}px`;
}

document.addEventListener('DOMContentLoaded', () => {
  const ballContainer = document.createElement('div');
  ballContainer.classList.add('ball-container');
  document.body.appendChild(ballContainer);

  const ballCount = 30;

  for (let i = 0; i < ballCount; i++) {
    const ball = document.createElement('div');
    ball.classList.add('ball');

    moveBallRandomly(ball);

    ball.addEventListener('click', () => {
      ball.classList.add('clicked');
    });

    setInterval(() => {
      moveBallRandomly(ball);
    }, Math.random() * 3000 + 3000);

    ballContainer.appendChild(ball);
  }
});
