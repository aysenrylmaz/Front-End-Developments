import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TimelineservicesService } from '../services/timelineservices.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [RouterModule],
})
export class TableComponent {
  constructor(
    private _router: RouterModule,
    private _service: TimelineservicesService
  ) {}
}
