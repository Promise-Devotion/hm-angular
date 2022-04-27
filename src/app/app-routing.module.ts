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
import { LearningComponent } from './pages/home/learning/learning.component';
import { FormComponent } from './pages/home/form/form.component';
import { ServiceComponent } from './pages/service/service.component';
import { BasicKnowledgeComponent } from './pages/service/basic-knowledge/basic-knowledge.component';

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
        path: 'learn',
        component: LearningComponent,
      },
      {
        path: 'form',
        component: FormComponent,
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
    path: 'service',
    component: ServiceComponent,
    children: [
      {
        path: 'basic-knowledge',
        component: BasicKnowledgeComponent,
      },
      {
        path: '**',
        redirectTo: 'basic-knowledge',
      },
    ],
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
