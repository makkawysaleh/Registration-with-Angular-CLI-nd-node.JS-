import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent, data: { title: 'sign in'}},
  { path: 'signup', component: SignupComponent, data: { title: 'sign up'}},
  { path: 'reset-password', component: ResetPasswordComponent, data: { title: 'reset password'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [SigninComponent, SignupComponent, ResetPasswordComponent]
})
export class AuthModule { }
