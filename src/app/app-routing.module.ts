import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ProductComponent } from './pages/product/product.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsdetailComponent } from './pages/newsdetail/newsdetail.component';
import { WelcomeComponent } from './pages/home/welcome/welcome.component';
import { SettingComponent } from './pages/home/setting/setting.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { DatapatchComponent } from './pages/datapatch/datapatch.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent,
      },
      {
        path: 'setting',
        component: SettingComponent,
      },
      {
        path: '**',
        redirectTo: 'welcome',
      },
    ],
    data: {
      title: '首页',
    },
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
    path: 'animation',
    component: AnimationComponent,
  },
  {
    path: 'datapatch',
    component: DatapatchComponent,
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
