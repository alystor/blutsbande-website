import {Routes} from '@angular/router';
import {LandingPage} from './pages/landing-page/landing-page';
import {WhenDoesItRunPage} from './pages/when-does-it-run-page/when-does-it-run-page';
import {WhyDoesItRunPage} from './pages/why-does-it-run-page/why-does-it-run-page';
import {HowIsItRunningPage} from './pages/how-is-it-running-page/how-is-it-running-page';
import {MenstruationArchivePage} from './pages/menstruation-archive-page/menstruation-archive-page';

export const routes: Routes = [
  {path: '', component: LandingPage},
  {path: 'when-does-it-run', component: WhenDoesItRunPage},
  {path: 'why-does-it-run', component: WhyDoesItRunPage},
  {path: 'how-is-it-running', component: HowIsItRunningPage},
  {path: 'menstruation-archive', component: MenstruationArchivePage}
];
