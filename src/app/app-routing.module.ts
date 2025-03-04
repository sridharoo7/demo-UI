import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'employee',
    loadChildren : () =>import("./employee/employee.module").then(x=>x.EmployeeModule)
  },
  {
    path: 'friend',
    loadChildren: () => import("./friend/friend.module").then(x => x.FriendModule)
  },
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
