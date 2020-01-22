import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadCsvComponent } from './component/upload-csv/upload-csv.component';
import {CommonService} from './services/common.service'
import { NgxLoadingModule } from 'ngx-loading';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { TimelineComponent } from './timeline/timeline.component';
@NgModule({
  declarations: [
    AppComponent,
    UploadCsvComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FormsModule,
     NgxLoadingModule.forRoot({})
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
