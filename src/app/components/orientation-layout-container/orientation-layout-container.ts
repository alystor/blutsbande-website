import {Component, inject} from '@angular/core';
import {BreakpointService} from '../../service/breakpoint-service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'bb-orientation-layout-container',
  imports: [
    AsyncPipe
  ],
  templateUrl: './orientation-layout-container.html',
  styleUrl: './orientation-layout-container.scss',
})
export class OrientationLayoutContainer {

  protected breakpointService: BreakpointService = inject(BreakpointService)

}
