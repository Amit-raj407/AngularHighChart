import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../route-guards/auth.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:
    [
      { path: '', redirectTo: 'charts', pathMatch: 'full' },
      { path: 'charts',  loadChildren: () => import('../charts/charts.module').then(m => m.ChartsModule) },
      { path: 'posts', canActivate: [AuthGuard],  loadChildren: () => import('../posts/posts.module').then(m => m.PostsModule) },
      { path: 'profile', canActivate: [AuthGuard],  loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule) },
      { path: 'contact', canActivate: [AuthGuard],  loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule) },
      { path: 'settings', canActivate: [AuthGuard],  loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule) },
      { path: 'user-details', loadChildren: () => import('../user-details/user-details.module').then(m => m.UserDetailsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
