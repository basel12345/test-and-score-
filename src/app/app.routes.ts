import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import("./features/layout/layout.routes").then(c => c.layoutRoutes),
    },
    {
        path: "login",
        loadComponent: () => import("./features/login/login.component").then(c => c.LoginComponent)
    }
];
