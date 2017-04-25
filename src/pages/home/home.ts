import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TextToSpeech} from '@ionic-native/text-to-speech'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text: string;

  constructor(private tts: TextToSpeech, public navCtrl: NavController) {
    
  }

  public read(){
    this.tts.speak(this.text)
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
  }
}
