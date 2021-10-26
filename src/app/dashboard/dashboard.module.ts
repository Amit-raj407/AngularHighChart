import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ChartsModule } from '../charts/charts.module';
import { PostsModule } from '../posts/posts.module';
import { ProfileModule } from '../profile/profile.module';
import { ContactModule } from '../contact/contact.module';
import { SettingsModule } from '../settings/settings.module';
import { UserDetailsModule } from '../user-details/user-details.module';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    PostsModule,
    ProfileModule,
    ContactModule,
    SettingsModule,
    UserDetailsModule
  ]
})
export class DashboardModule { }
