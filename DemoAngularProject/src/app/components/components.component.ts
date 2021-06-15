import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    animations: [
        trigger('widthGrow', [
            state('closed', style({
                opacity: 0,
            })),
            state('open', style({
                opacity: 1
            })),
            transition('* => *', animate(150))
        ])
    ]
})

export class ComponentsComponent implements OnInit, OnDestroy {
    public focus: boolean;
    public focus1: boolean;
    public focus2: boolean;

    public email: string;
    public contact: string;

    public next = 0;
    public staggeringApproaches = [];

    public state = "closed";

    constructor(config: NgbAccordionConfig, private translate: TranslateService, private elem: ElementRef) {
        config.closeOthers = true;
        config.type = 'info';
    }

    ngOnInit() {
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    }

    openMessage() {
        (this.state == "closed") ? this.state = "open" : this.state = "closed";
    }

    ngOnDestroy() {
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
  }

    scroll(el: string) {
        const element = document.getElementById(el);
        element.scrollIntoView({ behavior: 'smooth' });
    }

    isInView(el): boolean {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)

        );
    }
}
