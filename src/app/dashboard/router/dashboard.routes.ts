 /*!
 * @license
 * Copyright 2019 Alfresco, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Routes } from '@angular/router';
import { ProjectsLoaderGuard } from './guards/projects-loader.guard';
import { DashboardNavigationComponent } from '../components/dahboard-navigation/dashboard-navigation.component';
import { ProjectsListComponent } from '../components/projects-list/projects-list.component';
import { ReleaseListComponent } from '../components/releases-list/releases-list.component';

export const dashboardRoutes: Routes = [
    {
        path: 'projects',
        component: ProjectsListComponent,
        canActivate: [
            ProjectsLoaderGuard
        ]
    },
    {
        path: '',
        component: DashboardNavigationComponent,
        outlet: 'navigation'
    },
    { path: 'projects/:projectId/releases',
      component: ReleaseListComponent
    },
    { path: '', redirectTo: 'projects', pathMatch: 'full' }
];
