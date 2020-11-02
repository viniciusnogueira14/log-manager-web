import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportPageComponent } from './pages/import-page/import-page.component';
import { InsertPageComponent } from './pages/insert-page/insert-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  { path: 'insert', component: InsertPageComponent },
  { path: 'import', component: ImportPageComponent },
  { path: 'search', component: SearchPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
