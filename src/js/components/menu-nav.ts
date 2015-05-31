/// <reference path="../../typings/angular2/angular2.d.ts"/>

import {Component, View, bootstrap, For} from 'angular2/angular2';
import {menuStore} from '../services/menuStore.js';

@Component({
  selector: 'menu-nav',
  injectables: [ menuStore ]
})

@View({
  template: `
  <ul>
    <li *for="#item of data">
      {{ item }
    </li>
  </ul>
  `,
  directives: [For]
})

export class menuNav {
  name: string;
  constructor(menuStore: menuStore) {
    this.data = menuStore.getAll();
  }
}
