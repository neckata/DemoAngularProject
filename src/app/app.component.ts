import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  constructor(private renderer: Renderer2, private router: Router, private element: ElementRef, public location: Location) {
  }
  ngOnInit() {
    AOS.init();

    var navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(() => {
      if (window.outerWidth > 991) {
        window.document.children[0].scrollTop = 0;
      } else {
        window.document.activeElement.scrollTop = 0;
      }
      this.navbar.sidebarClose();

      this.renderer.listen('window', 'scroll', () => {
        const number = window.scrollY;
        var _location = this.location.path();
        _location = _location.split('/')[2];

        if (number > 150 || window.pageYOffset > 150) {
          navbar.classList.remove('navbar-transparent');
        } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {

          navbar.classList.add('navbar-transparent');
        }
      });
    });
  }
}
