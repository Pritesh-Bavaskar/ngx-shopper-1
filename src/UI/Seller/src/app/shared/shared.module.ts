// angular
import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbTabsetModule,
} from '@ng-bootstrap/ng-bootstrap';

// 3rd party UI
import { TreeModule } from 'angular-tree-component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedRoutingModule } from '@app-seller/shared/shared-routing.module';
import { SearchComponent } from '@app-seller/shared/components/search/search.component';
import { SortColumnComponent } from '@app-seller/shared/components/sort-column/sort-column.component';
import { ModalComponent } from '@app-seller/shared/components/modal/modal.component';
import { CarouselSlideDisplayComponent } from '@app-seller/shared/components/carousel-slide-display/carousel-slide-display.component';
import { GenericBrowseComponent } from '@app-seller/shared/components/generic-browse/generic-browse.component';
import { UserTableComponent } from '@app-seller/shared/containers/user-table/user-table.component';
import { UserFormComponent } from '@app-seller/shared/components/user-form/user-form.component';
import { AddressTableComponent } from './containers/address-table/address-table.component';
import { AddressFormComponent } from '@app-seller/shared/components/address-form/address-form.component';
import { CategoryTableComponent } from './containers/category-table/category-table.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryDetailsComponent } from './containers/category-details/category-details.component';
import { ProductTableComponent } from '@app-seller/shared/containers/product-table/product-table.component';
import { ProductFormComponent } from '@app-seller/shared/components/products-form/product-form.component';
import { UserTableShowgroupsComponent } from './containers/user-table-showgroups/user-table-showgroups.component';
import { AssignedGroupsComponent } from './components/assigned-groups/assigned-groups.component';
import { AddressAssignmentComponent } from './components/address-assignment/address-assignment.component';
import { AssignedGroupsTableComponent } from './components/assigned-groups-table/assigned-groups-table.component';
import { AnnouncementTableComponent } from './containers/announcement-table/announcement-table.component';
import { AnnouncementFormComponent } from './components/announcement-form/announcement-form.component';
import { PriceSchedulerFormComponent } from './components/price-scheduler-form/price-scheduler-form.component';
import { PriceSchedulerTableComponent } from './containers/price-scheduler-table/price-scheduler-table.component';

@NgModule({
  imports: [
    SharedRoutingModule,
    // angular
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    // 3rd party UI
    TreeModule,
    FontAwesomeModule,
    FormsModule,
    NgbPaginationModule.forRoot(),
    NgbTabsetModule.forRoot(),
  ],
  exports: [
    // angular
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    // 3rd party UI
    TreeModule,
    FontAwesomeModule,
    NgbPaginationModule,
    NgbTabsetModule,

    // app components
    SearchComponent,
    SortColumnComponent,
    ModalComponent,
    CarouselSlideDisplayComponent,
    GenericBrowseComponent,
    UserTableComponent,
    UserFormComponent,
    AddressTableComponent,
    AddressFormComponent,
    CategoryTableComponent,
    CategoryFormComponent,
    CategoryDetailsComponent,
    ProductTableComponent,
    ProductFormComponent,
  ],
  declarations: [
    SearchComponent,
    SortColumnComponent,
    ModalComponent,
    CarouselSlideDisplayComponent,
    GenericBrowseComponent,
    UserTableComponent,
    UserFormComponent,
    AddressTableComponent,
    AddressFormComponent,
    CategoryTableComponent,
    CategoryFormComponent,
    CategoryDetailsComponent,
    ProductTableComponent,
    ProductFormComponent,
    UserTableShowgroupsComponent,
    AssignedGroupsComponent,
    AddressAssignmentComponent,
    AssignedGroupsTableComponent,
    AnnouncementTableComponent,
    AnnouncementFormComponent,
    PriceSchedulerFormComponent,
    PriceSchedulerTableComponent,
  ],
})
export class SharedModule { }
