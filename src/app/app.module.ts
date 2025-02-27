import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@anglar/material/icon';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EmployeeModule } from './employee/employee.module';
import { StudentModule } from './student/student.module';
import { FriendModule } from './friend/friend.module';
import { SharedModule } from './shared-module/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EmployeeModule,
    StudentModule,
    FriendModule,
    SharedModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
