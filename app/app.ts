import {Component, ViewChild} from '@angular/core';
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

  rootPage: any = TabsPage;

  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

}


ionicBootstrap(MyApp)