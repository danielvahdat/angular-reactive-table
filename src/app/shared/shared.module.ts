import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AntDesignModule } from './ant-design/ant-design.module';
import { dataService } from './data.service';

// registerLocaleData(fa);

const IMPORTS = [
  AntDesignModule,
  CommonModule,
  ReactiveFormsModule,
  CommonModule,
  ReactiveFormsModule,
  FormsModule
];

// const Declarations = [
// ];

const EXPORT = [
  AntDesignModule,
  FormsModule,
  CommonModule,
  ReactiveFormsModule,
  CommonModule,
];

const PROVIDERS = [dataService];

const EntryComponents = [];

@NgModule({
  imports: IMPORTS,
  // declarations: Declarations,
  exports: EXPORT,
  providers: PROVIDERS,
  // entryComponents: EntryComponents
})

export class SharedModule {
  public static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
    };
  }
}
