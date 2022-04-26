import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
})
export class AnimationComponent implements OnInit {
  @ViewChild('aside') aside: any;
  constructor() {}

  ngAfterViewInit() {
    let aside = this.aside.nativeElement;
    console.log(aside);
  }
  ngOnInit(): void {}
  hideaside() {
    let aside: any = this.aside.nativeElement;
    aside.style.transform = 'translate(100%, 0)';
  }
  showaside() {
    // this.aside
    let aside: any = this.aside.nativeElement;
    aside.style.transform = 'translate(0, 0)';
  }
  showtoggle() {
    let aside: any = this.aside.nativeElement;
    let nameArrr = aside.className.split(' ');

    if (nameArrr.indexOf('show') > -1) {
      aside.setAttribute('class', 'aside hide');
    } else {
      aside.setAttribute('class', 'aside show');
    }
    // if (aside.style.transform == 'translate(0px, 0px)') {
    //   aside.style.transform = 'translate(100%, 0px)';
    // } else {
    //   aside.style.transform = 'translate(0px, 0px)';
    // }
  }
}
