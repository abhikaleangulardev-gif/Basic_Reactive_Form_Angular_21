import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'basic-reactive-form', pathMatch: 'full',
    },
    {
        path: 'basic-reactive-form', loadComponent: () => import('./component/reactive-form/reactive-form').then((c) => c.ReactiveForm)
    }
];
