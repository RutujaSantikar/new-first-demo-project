import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CalibrationComponent } from './calibration/calibration.component';
import { DriveComponent } from './drive/drive.component';
import { TableComponent } from './table/table.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [

   { path: '', component: LoginComponent },
   {path:'signup',component: SignupComponent },
    { path: 'calibration', component: CalibrationComponent },
    { path: 'drive', component: DriveComponent },
    { path: 'table', component: TableComponent },
    // {path : 'dashboard', component: HeaderComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
