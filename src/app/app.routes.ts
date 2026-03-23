import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'basic-reactive-form', pathMatch: 'full',
    },
    {
        path: 'basic-reactive-form', loadComponent: () => import('./component/reactive-form/reactive-form').then((c) => c.ReactiveForm)
    },
    {
        path: 'basic-add-remove-control-form', loadComponent: () => import('./component/basic-add-control-remove-control/basic-add-control-remove-control').then((c) => c.BasicAddControlRemoveControl)
    },
    {
        path: 'basic-value-change', loadComponent: () => import('./component/valuechange/valuechange').then((c) => c.Valuechange)
    },
    {
        path: 'basic-set-patch-value-form', loadComponent: () => import('./component/set-patch-value/set-patch-value').then((c) => c.SetPatchValue)
    },
    {
        path: 'basic-set-patch-value-form-validators', loadComponent: () => import('./component/set-remove-validators/set-remove-validators').then((c) => c.SetRemoveValidators)
    },
    {
        path: 'async-validators-form', loadComponent: () => import('./component/async-validator/async-validator').then((c) => c.AsyncValidator)
    }
];



