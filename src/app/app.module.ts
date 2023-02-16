import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CalibrationComponent } from './calibration/calibration.component';
import { DriveComponent } from './drive/drive.component';
import { TableComponent } from './table/table.component';
import { GlobalVarComponent } from './global-var/global-var.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { EvenComponent } from './even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CalibrationComponent,
    DriveComponent,
    TableComponent,
    GlobalVarComponent,
    HeaderComponent,
    DialogExampleComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
