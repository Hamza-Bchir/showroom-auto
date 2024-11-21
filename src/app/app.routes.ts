import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListComponent } from './brand-list/brand-list.component';
import { CarListComponent } from './car-list/car-list.component';

export const routes: Routes = [
  { path: '', component: BrandListComponent },
  { path: 'cars/:brand', component: CarListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
