import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const layoutRoutes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "dashboard",
                loadComponent: () => import("./dashboard/dashboard.component").then(c => c.DashboardComponent)
            }
        ]
    }
];
