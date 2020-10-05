import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Plastic',
      url: '/plastic',
      icon: 'basket'
    },
    {
      title: 'Cardboard',
      url: '/cardboard',
      icon: 'paper'
    },
    {
      title: 'Glass',
      url: '/glass',
      icon: 'pint'
    },
    {
      title: 'Metal',
      url: '/metal',
      icon: 'magnet'
    },    
    {
      title: 'Nearest Locations',
      url: '/nearestlocations',
      icon: 'walk'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
