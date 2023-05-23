import { trigger, style, animate, transition, query, group, animateChild } from '@angular/animations';

export const fadeInOutTransition = transition('* => *', [
  query(':enter, :leave',
    style({ position: 'fixed',  width: '100%' }), { optional: true }),
    group([
      query(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in',
        style({ opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        style({ opacity: 1 }),
        animate('0.5s ease-out',
        style({ opacity: 0 }))
      ], { optional: true }),
    ])
]);
