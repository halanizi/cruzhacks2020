import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentScreenOrientation:string;
  constructor(private screenOrientation: ScreenOrientation) {
    
      this.currentScreenOrientation = this.screenOrientation.type;
      this.setPortrait();
  }

  setLandscape(){
    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
  
  setPortrait(){
    // set to portrait
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  unlockScreen(){
    // allow user rotate
    this.screenOrientation.unlock();
  }
}


