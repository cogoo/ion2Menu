import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }

  ionViewWillLoad() {
    this.menuCtrl.open();
  }

}
