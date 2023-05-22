import { trigger, style, animate, transition, query, group, animateChild } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('1s ease-in', style({ opacity: 1 })),
]);

const exitTransition = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('1s ease-out', style({ opacity: 0 })),
]);

export const fadeIn = trigger('fadeIn',[enterTransition]);
export const fadeOut = trigger('fadeOut',[exitTransition]);
export const slideInAnimation = trigger('routeAnimations', [
  transition('* => *', [
    query(':enter, :leave', 
      style({ position: 'fixed',  width: '100%' }), 
      { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }), 
        animate('0.5s ease-in-out', 
        style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', 
        style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ]),
  transition('HomePage <=> WorkPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%' }))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%' }))
      ]),
    ]),
  ]),
]);