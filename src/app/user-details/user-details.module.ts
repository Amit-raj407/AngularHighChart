import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TextMaskModule } from 'angular2-text-mask';

import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TextMaskModule,
    HttpClientModule
  ]
})
export class UserDetailsModule { }
