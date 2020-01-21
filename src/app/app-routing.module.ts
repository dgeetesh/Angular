import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadCsvComponent } from './component/upload-csv/upload-csv.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './/dashboard/dashboard.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  { path: '', redirectTo: 'uploadCsv', pathMatch: 'full' },
  { path: '**', redirectTo: 'uploadCsv' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
