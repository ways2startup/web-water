import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardModule } from "./onboard/onboard.module";
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    OnboardModule,
    HeaderModule
  ]
})
export class CoreModule { }
