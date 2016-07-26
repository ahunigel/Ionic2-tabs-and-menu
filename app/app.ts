// import 'es6-shim';
import {Component,ViewChild} from '@angular/core';
import {Platform, MenuController, Nav, NavController, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login/login';


@Component({
  templateUrl: 'build/app.html',
  // config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  @ViewChild(Nav) nav: Nav;
  // make HelloIonicPage the root (or first) page
  rootPage: any = TabsPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    // private app: IonicApp,
    private platform: Platform,
    private menu: MenuController
    // private nav: NavController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HelloIonicPage },
      { title: 'List Example', component: ListPage },
      { title: 'Login', component: LoginPage },
      { title: 'Tabs', component: TabsPage }
    ];
  }
doRefresh(dom) {
  
}
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
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


ionicBootstrap(MyApp)