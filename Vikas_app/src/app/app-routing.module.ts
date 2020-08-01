import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',redirectTo: '/account', pathMatch: 'full'
  },
  {
    path: 'account', loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'login',loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule)
  },
  { path: 'studentregister', loadChildren: './pages/studentregister/studentregister.module#StudentregisterPageModule' },
  { path: 'selfattendance', loadChildren: './pages/selfattendance/selfattendance.module#SelfattendancePageModule' },
  { path: 'studentattendance', loadChildren: './pages/studentattendance/studentattendance.module#StudentattendancePageModule' },
  { path: 'feedback', loadChildren: './pages/feedback/feedback.module#FeedbackPageModule' },
  { path: 'mygoal', loadChildren: './pages/mygoal/mygoal.module#MygoalPageModule' },
  { path: 'reports', loadChildren: './pages/reports/reports.module#ReportsPageModule' },
  { path: 'request-raise', loadChildren: './pages/request-raise/request-raise.module#RequestRaisePageModule' },
  { path: 'training-diary', loadChildren: './pages/training-diary/training-diary.module#TrainingDiaryPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
