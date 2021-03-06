import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgMaterialModule } from './ngmaterial.module';
import { NgxBootstrapModule } from './ngxbootstrap.module';
import { ToastComponent } from './toast/toast.component';
import { LoadingComponent } from './loading/loading.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMaterialModule,
    NgxBootstrapModule,
    RouterModule
  ],
  exports: [
    // Shared Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMaterialModule,
    NgxBootstrapModule,
    // Shared Components
    ToastComponent,
    LoadingComponent,
    NavComponent
  ],
  declarations: [
    ToastComponent,
    LoadingComponent,
    NavComponent
  ],
  providers: [
    ToastComponent
  ]
})
export class SharedModule { }
