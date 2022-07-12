import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutinModule } from './auth-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutinModule],
})
export class AuthModule {}
