import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// 拦截器服务
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child2Component } from './components/child2/child2.component';
import { Child3Component } from './components/child3/child3.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TransitionComponent } from './components/transition/transition.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { DatapatchComponent } from './pages/datapatch/datapatch.component';
import { DetailComponent } from './pages/detail/detail.component';
import { FormComponent } from './pages/home/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { LearningComponent } from './pages/home/learning/learning.component';
import { SettingComponent } from './pages/home/setting/setting.component';
import { WelcomeComponent } from './pages/home/welcome/welcome.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsdetailComponent } from './pages/news/newsdetail/newsdetail.component';
import { ProductComponent } from './pages/product/product.component';
import { FormatterDatePipe } from './pipe/formatter-date.pipe';
import { FormatterSexPipe } from './pipe/formatter-sex.pipe';

// 引入service服务，并配置
import { EchartsComponent } from './components/charts/echarts/echarts.component';
import { LifedemoComponent } from './components/lifedemo/lifedemo.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { HttprequestComponent } from './pages/httprequest/httprequest.component';
import { LifecycleComponent } from './pages/lifecycle/lifecycle.component';
import { RegisterComponent } from './pages/register/register.component';
import { RxjslearnComponent } from './pages/rxjslearn/rxjslearn.component';
import { BasicKnowledgeComponent } from './pages/service/basic-knowledge/basic-knowledge.component';
import { ServiceComponent } from './pages/service/service.component';
import { TestComponent } from './pages/test/test.component';
import { StorageService } from './services/storage.service';

// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatTableModule } from '@angular/material/table';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle'
// import {materialimport} from 'src/materialimport';
import { MaterialModule } from '../material/material.module'
@NgModule({
  declarations: [
    // 组件
    AppComponent,
    HeaderComponent,
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
    TestComponent,
    RegisterComponent,
    ChartsComponent,
    EchartsComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ], // 模块
  providers: [StorageService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorInterceptor,
    multi: true,
  }], // 服务
  bootstrap: [AppComponent],
})
export class AppModule { }
