import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllCaseTableComponent } from './all-case-table/all-case-table.component';
import { AllcasetableEngComponent } from './allcasetable-eng/allcasetable-eng.component';
import { TypeSearchEngComponent } from './type-search-eng/type-search-eng.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TypeSearchHebComponent } from './type-search-heb/type-search-heb.component';
import { CaseDetailsEngComponent } from './case-details-eng/case-details-eng.component';
import { CaseDetailsHebComponent } from './case-details-heb/case-details-heb.component';
import { SearchIDhebComponent } from './search-idheb/search-idheb.component';
import { SearchIDEngComponent } from './search-ideng/search-ideng.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCaseTableComponent,
    AllcasetableEngComponent,
    TypeSearchEngComponent,
    TypeSearchHebComponent,
    CaseDetailsEngComponent,
    CaseDetailsHebComponent,
    SearchIDhebComponent,
    SearchIDEngComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
