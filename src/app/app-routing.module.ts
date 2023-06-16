import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PageCocktailsComponent } from './page-cocktails/page-cocktails.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: '', component: MenuComponent },
  {path: 'page-cocktails', component: PageCocktailsComponent},
  {path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
