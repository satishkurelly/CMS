
/**
 * @license
 * @copyright SITA 2017  Inc. All Rights Reserved.
 *
 */

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  {path: '**', redirectTo: '/manage', pathMatch: 'full'},
];

export const AppRouting: ModuleWithProviders =
  RouterModule.forRoot(appRoutes, {useHash: false});
