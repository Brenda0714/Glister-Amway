import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'oral-system',
    loadComponent: () => import('./components/oral-system/oral-system.component').then(c => c.OralSystemComponent) 
  },
  {
    path: 'oral-system-game',
    loadComponent: () => import('./components/oral-system-intro/oral-system-intro.component').then(c => c.OralSystemIntroComponent) 
  },
  {
    path: 'oral-system-step/:step',
    loadComponent: () => import('./components/oral-system-steps/oral-system-steps.component').then(c => c.OralSystemStepsComponent) 
  },
  {
    path: 'oral-system-steps',
    loadComponent: () => import('./components/oral-system-all-steps/oral-system-all-steps.component').then(c => c.OralSystemAllStepsComponent) 
  },
  {
    path: 'doctor-glister',
    loadComponent: () => import('./components/doctor-glister/doctor-glister.component').then(c => c.DoctorGlisterComponent)
  },
  {
    path: 'doctor-glister-tips',
    loadComponent: () => import('./components/doctor-glister-tips/doctor-glister-tips.component').then(c => c.DoctorGlisterTipsComponent)
  },
  {
    path: 'traceability',
    loadComponent: () => import('./components/traceability/traceability.component').then(c => c.TraceabilityComponent)
  },
  {
    path: 'learn',
    loadComponent: () => import('./components/learn/learn.component').then(c => c.LearnComponent)
  },
  {
    path: 'buy/:from',
    loadComponent: () => import('./components/buy/buy.component').then(c => c.BuyComponent)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'oral-system'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
