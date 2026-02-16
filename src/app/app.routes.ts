import {Routes} from '@angular/router';
import {LandingPage} from './pages/landing-page/landing-page';
import {WhenDoesItRunPage} from './pages/when-does-it-run-page/when-does-it-run-page';
import {WhyDoesItRunPage} from './pages/why-does-it-run-page/why-does-it-run-page';
import {HowIsItRunningPage} from './pages/how-is-it-running-page/how-is-it-running-page';
import {MenstruationArchivePage} from './pages/menstruation-archive-page/menstruation-archive-page';
import {ImprintPage} from './pages/imprint-page/imprint-page';
import {BibliographyPage} from './pages/bibliography-page/bibliography-page';
import {environment} from '../environments/environment';

export const devRoutes: Routes = [
  {
    path: 'debug',
    loadComponent: () => import('./pages/debug-page/debug-page').then(m => m.DebugPage),
  }
]

export const routes: Routes = [
  {path: '', component: LandingPage, data: {showMenu: false}},
  {path: 'when-does-it-run', component: WhenDoesItRunPage, data: {showMenu: true, menuSrc: "menu_rosalie.png"}},
  {path: 'why-does-it-run', component: WhyDoesItRunPage, data: {showMenu: true, menuSrc: "menu_olivia.png"}},
  {path: 'how-is-it-running', component: HowIsItRunningPage, data: {showMenu: true, menuSrc: "menu_violet.png"}},
  {path: 'how-does-it-run', component: MenstruationArchivePage, data: {showMenu: true, menuSrc: "menu_celeste.png"}},
  {path: 'imprint', component: ImprintPage, data: {showMenu: true, menuSrc: "menu_ruby.png"}},
  {path: 'bibliography', component: BibliographyPage, data: {showMenu: true, menuSrc: "menu_ruby.png"}},

  ...(environment.production ? [] : devRoutes)
];
