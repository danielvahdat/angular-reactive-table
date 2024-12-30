import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModuleRoutingModule } from './table-module-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from '../app.component';
import { TableModuleComponent } from './table-module.component';


@NgModule({
  declarations: [
    TableModuleComponent
  ],
  bootstrap:[AppComponent],
  imports: [
    SharedModule.forRoot(),
    CommonModule,
    TableModuleRoutingModule,
  ]
})
export class TableModuleModule { }
