import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextFieldComponent } from './component/text-field/text-field.component';
import { TextFieldDirective } from './component/text-field/text-field.directive';
import { PageComponent } from './page/page.component';
import { ButtonComponent } from './component/button/button.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { CheckBoxComponent } from './component/check-box/check-box.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './component/table/table.component';
  
@NgModule({
  declarations: [
    AppComponent,
    TextFieldComponent,
    TextFieldDirective,
    PageComponent,
    ButtonComponent,
    TopBarComponent,
    CheckBoxComponent,
    TableComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
  ],
  exports:[MatRadioModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
  // exports: [MatButtonModule],
})
export class AppModule { }
 