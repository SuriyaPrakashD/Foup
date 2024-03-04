// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent} from './user/user.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { CycleComponent } from './cycle/cycle.component';
import { LoginComponent} from './login/login.component';

//import { AppRoutes } from './app.routes';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'cycle', component: CycleComponent },
  { path: 'login', component: LoginComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
