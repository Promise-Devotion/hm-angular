import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaerComponent } from './components/heaer/heaer.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductComponent } from './pages/product/product.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsdetailComponent } from './pages/newsdetail/newsdetail.component';
import { WelcomeComponent } from './pages/home/welcome/welcome.component';
import { SettingComponent } from './pages/home/setting/setting.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { TransitionComponent } from './components/transition/transition.component';
import { DatapatchComponent } from './pages/datapatch/datapatch.component';
import { Child2Component } from './components/child2/child2.component';
import { Child3Component } from './components/child3/child3.component';
import { FormatterDatePipe } from './pipe/formatter-date.pipe';
import { FormatterSexPipe } from './pipe/formatter-sex.pipe';
import { LearningComponent } from './pages/home/learning/learning.component';
import { FormComponent } from './pages/home/form/form.component';

// 引入service服务，并配置
import { StorageService } from './services/storage.service';
import { ServiceComponent } from './pages/service/service.component';
import { BasicKnowledgeComponent } from './pages/service/basic-knowledge/basic-knowledge.component';
import { LifecycleComponent } from './pages/lifecycle/lifecycle.component';
import { LifedemoComponent } from './components/lifedemo/lifedemo.component';
import { HttprequestComponent } from './pages/httprequest/httprequest.component';
import { RxjslearnComponent } from './pages/rxjslearn/rxjslearn.component';

@NgModule({
  declarations: [
    // 组件
    AppComponent,
    HeaerComponent,
    HomeComponent,
    DetailComponent,
    FooterComponent,
    NavigationComponent,
    ProductComponent,
    NewsComponent,
    NewsdetailComponent,
    WelcomeComponent,
    SettingComponent,
    Demo1Component,
    AnimationComponent,
    TransitionComponent,
    DatapatchComponent,
    Child2Component,
    Child3Component,
    FormatterDatePipe,
    FormatterSexPipe,
    LearningComponent,
    FormComponent,
    ServiceComponent,
    BasicKnowledgeComponent,
    LifecycleComponent,
    LifedemoComponent,
    HttprequestComponent,
    RxjslearnComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule], // 模块
  providers: [StorageService], // 服务
  bootstrap: [AppComponent],
})
export class AppModule {}
