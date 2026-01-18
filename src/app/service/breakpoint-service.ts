import {inject, Injectable} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {

  breakpointObserver: BreakpointObserver = inject(BreakpointObserver)

  isLandscape$: Observable<boolean> = this.breakpointObserver
    .observe('(orientation: landscape)')
    .pipe(
      map((result: BreakpointState) => result.matches),
      shareReplay(1)
    );

}
