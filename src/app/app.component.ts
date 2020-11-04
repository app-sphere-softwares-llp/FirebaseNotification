import { Component } from '@angular/core';
import { PushnotificationserviceService } from './services/pushnotificationservice.service';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { title } from 'process';
import { SwUpdate, SwPush } from '@angular/service-worker';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirebaseCloudMessanging';
  //message;
  displayToken: string;

  constructor(updates: SwUpdate, push: SwPush) {
    updates.available.subscribe(_ => updates.activateUpdate().then(() => {
      console.log('reload for update');
      document.location.reload();
    }));
    push.messages.subscribe(msg => console.log('push message', msg));
    push.notificationClicks.subscribe(click => console.log('notification click', click));
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebase);
      navigator.serviceWorker.getRegistration().then(swr => firebase.messaging().useServiceWorker(swr));
    }
  }

  permitToNotify() {
    const messaging = firebase.messaging();
    messaging.requestPermission()
      .then(() => messaging.getToken().then(token => this.displayToken = token))
      .catch(err => {
        console.log('Unable to get permission to notify.', err);
      });
  }





  // constructor(
  //   private pushMessaging: PushnotificationserviceService,
  //   private afMessaging: AngularFireMessaging ){}

  // tslint:disable-next-line: use-lifecycle-interface
  // ngOnInit()
  // {
  //   // console.log('meenal');
  //   this.pushMessaging.requestPermission();
  //   this.pushMessaging.receiveMessage();
  //   this.message = this.pushMessaging.currentMessage;
  //   // this.afMessaging.messages
  //   //   .subscribe((message) => { console.log(message); });
  // }

  // listen() {
  //   this.afMessaging.messages
  //     .subscribe((message) => { console.log(message); });
  // }
}
