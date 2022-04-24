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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
