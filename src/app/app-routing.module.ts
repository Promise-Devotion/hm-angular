import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ProductComponent } from './pages/product/product.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsdetailComponent } from './pages/newsdetail/newsdetail.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
  },
  {
    path: 'newsdetail/:id',
    component: NewsdetailComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
