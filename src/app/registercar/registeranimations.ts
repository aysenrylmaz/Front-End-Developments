import { trigger,transition,state,animate,style } from '@angular/animations';

export let reganim=  trigger('buttonnEffect', [
    state('initial', style({
      transform: 'scale(1)'
     })),
    state('final', style({
      transform: 'scale(1.1)'
    })),
    transition('final=>initial', animate('1000ms')),
    transition('initial=>final', animate('1500ms'))
])

