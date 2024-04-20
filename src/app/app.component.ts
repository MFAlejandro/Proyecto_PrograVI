import { Component, HostListener } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { routes } from './app-routing.module';

const firebaseConfig = {
  apiKey: "AIzaSyBzfruypBZcW4psA4gP7QharjBqaOrW9z8",
  authDomain: "flixangulardb.firebaseapp.com",
  projectId: "flixangulardb",
  storageBucket: "flixangulardb.appspot.com",
  messagingSenderId: "955931850721",
  appId: "1:955931850721:web:790cdcd2784c9cee9dc4a0"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showtime';
  navbg: any;

  @HostListener('document:scroll')
  onScroll() {
    console.log(window.scrollY, 'scrolllength#');

    if (window.scrollY > 0) {
      this.navbg = {
        'background-color': '#000000'
      };
    } else {
      this.navbg = {};
    }
  }
}

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
