import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'huamao-angular';
  public showheader: boolean = true
  public currentRoute: string


  constructor(public router: Router) {
    /**
     * @param()
     * 监听router变化使用router.events 监听event，如果event instanceof NavigationEnd
     * 路由变化结束，判断event.url，这就是当前路由
     */
    this.currentRoute = ''
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Show progress spinner or progress bar
        console.log('Route change detected');
      }
      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        this.currentRoute = event.url;
        // if(this.currentRoute === '/register') {
        //   this.showheader = false
        // }
        console.log(this.currentRoute);
      }
    })
  }

  ngOnInit() {}
}
