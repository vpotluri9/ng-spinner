import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-spinner',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.css']
})
export class LibComponent {
  @Input() display = false;
}
