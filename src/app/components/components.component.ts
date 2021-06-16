import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../models/item.model';

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

  public firstPart: Item;
  public secondPart: Item;
  public thirdPart: Item;
  public fourthPart: Item;

  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
    config.type = 'info';
  }

  ngOnInit() {
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');

    this.firstPart = new Item("item.headline1", "item.description1", "logo.png");
    this.secondPart = new Item("item.headline2", "item.description2", "logo.png");
    this.thirdPart = new Item("item.headline3", "item.description3", "logo.png");
    this.fourthPart = new Item("item.headline4", "item.description4", "logo.png");
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
