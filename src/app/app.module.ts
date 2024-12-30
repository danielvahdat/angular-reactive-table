import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { SharedModule } from './shared/shared.module';
@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [provideHttpClient(withInterceptorsFromDi())],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule.forRoot(),
    ],
})
export class AppModule { }
