import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
