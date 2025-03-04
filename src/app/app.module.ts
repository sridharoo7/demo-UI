import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StudentModule } from './student/student.module';
import { FriendModule } from './friend/friend.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeModule } from './employee/employee.module';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './employee/store/employee.reducer';

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
    StoreModule.forRoot({ empReducer: employeeReducer })
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
