import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const layoutRoutes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                component: DashboardComponent
            },
            {
                path: "dashboard",
                loadComponent: () => import("./dashboard/dashboard.component").then(c => c.DashboardComponent)
            }
        ]
    }
];
