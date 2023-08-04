import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ProductComponent } from './pages/product/product.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsdetailComponent } from './pages/news/newsdetail/newsdetail.component';
import { WelcomeComponent } from './pages/home/welcome/welcome.component';
import { SettingComponent } from './pages/home/setting/setting.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { DatapatchComponent } from './pages/datapatch/datapatch.component';
import { LearningComponent } from './pages/home/learning/learning.component';
import { FormComponent } from './pages/home/form/form.component';
import { ServiceComponent } from './pages/service/service.component';
import { BasicKnowledgeComponent } from './pages/service/basic-knowledge/basic-knowledge.component';
import { LifecycleComponent } from './pages/lifecycle/lifecycle.component';
import { HttprequestComponent } from './pages/httprequest/httprequest.component';
import { RxjslearnComponent } from './pages/rxjslearn/rxjslearn.component';
import { RegisterComponent } from './pages/register/register.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { EchartsComponent } from './components/charts/echarts/echarts.component';
import { BillComponent } from './pages/bill/bill.component';

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
    children: [],
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
    path: 'lifecycle',
    component: LifecycleComponent,
  },
  {
    path: 'rxjslearn',
    component: RxjslearnComponent,
  },
  {
    path: 'httpresuest',
    component: HttprequestComponent,
  },
  {
    path: 'charts',
    component: ChartsComponent,
    children: [
      {
        path: 'echarts',
        component: EchartsComponent,
      },
    ],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'bill',
    component: BillComponent,
    // loadChildren: () => import('./pages/bill/bill.component').then(m => m.BillComponent),
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
