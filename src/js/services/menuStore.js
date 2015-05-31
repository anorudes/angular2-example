/// <reference path="../../typings/angular2/angular2.d.ts"/>
export class menuStore {
  data: any[];
  constructor() {
    this.data = ['Главная', 'О компании', 'Контакты'];
  }
  public function getAll() {
    return this.data;
  }
}
