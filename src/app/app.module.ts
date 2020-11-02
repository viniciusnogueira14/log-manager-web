import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { InsertPageComponent } from './pages/insert-page/insert-page.component';
import { ImportPageComponent } from './pages/import-page/import-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LogFormComponent } from './components/log-form/log-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuHeaderComponent,
    InsertPageComponent,
    ImportPageComponent,
    SearchPageComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
