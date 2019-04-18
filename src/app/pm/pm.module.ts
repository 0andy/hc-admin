import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectService, CustomerService, EmployeeServiceProxy, DataDictionaryService, ProjectDetailService, ProductService, TenderService } from 'services'

import { PmRoutingModule } from './pm-routing.module';
import { ProjectComponent } from './project/project.component';
import { CreateOrUpdateProjectComponent } from './project/create-or-update-project/create-or-update-project.component';
import { DetailProjectComponent } from './project/detail-project/detail-project.component';
import { CreateOrUpdateProjectdetailComponent } from './project/create-or-update-projectdetail/create-or-update-projectdetail.component';
import { TenderComponent } from './tender/tender.component';
import { CreateOrUpdateTenderComponent } from './tender/create-or-update-tender/create-or-update-tender.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    ReactiveFormsModule,
    PmRoutingModule
  ],
  declarations: [
    ProjectComponent,
    CreateOrUpdateProjectComponent,
    DetailProjectComponent,
    CreateOrUpdateProjectdetailComponent,
    TenderComponent,
    CreateOrUpdateTenderComponent,
  ],
  entryComponents: [
    CreateOrUpdateProjectComponent,
    DetailProjectComponent,
    CreateOrUpdateProjectdetailComponent,
    CreateOrUpdateTenderComponent,
  ],
  providers: [ProjectService, CustomerService, EmployeeServiceProxy, DataDictionaryService, ProjectDetailService, ProductService, TenderService]
})
export class PmModule { }