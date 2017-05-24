
/**
 * @license
 * @copyright SITA 2017  Inc. All Rights Reserved.
 *
 */

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShowPageComponent} from "./show-page/show-page.component";

const appRoutes: Routes = [
  {path:'publish', component: ShowPageComponent},
];

export const AppRouting: ModuleWithProviders =
  RouterModule.forRoot(appRoutes, {useHash: false});
