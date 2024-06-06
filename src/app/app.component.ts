import { Component } from '@angular/core';
import { RegistercarComponent } from './registercar/registercar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { RegisterService } from './services/registers.service';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise1';
       constructor(private _router: RouterModule,
    private _service:RegisterService ){}

// gotoPage(app-second:string):void{
//  this.router.navigate(['{app-second}']);

}
