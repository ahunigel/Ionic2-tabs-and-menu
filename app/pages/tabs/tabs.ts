import {Page, MenuController, NavController} from 'ionic-angular';
import {HelloIonicPage} from '../hello-ionic/hello-ionic';
import {LoginPage} from '../login/login';
import {ListPage} from '../list/list';

import {Type} from '@angular/core';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  tab1Root: any = HelloIonicPage;
  tab2Root: any = LoginPage;
  tab3Root: Type = ListPage;

  pages: Array<{ title: string, component: any }>;
  constructor(
    private menu: MenuController,
    private nav: NavController
  ) {

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HelloIonicPage },
      { title: 'List Example', component: ListPage },
      { title: 'Login', component: LoginPage },
      { title: 'Tabs', component: TabsPage }
    ];
  }

  doRefresh(refresher) {
    console.log('do nothing for now')
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    // this.menu.enable(false);
    this.menu.close();
    // navigate to the new page if it is not the current page
    // let nav = this.app.getComponent('nav');
    this.nav.setRoot(page.component);
  }
}
