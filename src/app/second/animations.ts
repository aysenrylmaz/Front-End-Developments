import { trigger,transition,state,animate,style } from '@angular/animations';

export let del= trigger('del',[
    transition(':enter',[
      style({transform:'translateX(-100%)'}),
      animate(2000,style({background:'red'}))
    ]) ])

