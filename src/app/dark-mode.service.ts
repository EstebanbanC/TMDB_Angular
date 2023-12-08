import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkModeSubject.asObservable();

  private backgroundImageSubject = new BehaviorSubject<string>('../assets/lighthero.png');
  backgroundImage$ = this.backgroundImageSubject.asObservable();

  toggleDarkMode() {
    const currentMode = this.darkModeSubject.value;
    this.darkModeSubject.next(!currentMode);

    const newBackgroundImage = currentMode ? '../assets/lighthero.png' : '../assets/darkhero.png';
    this.backgroundImageSubject.next(newBackgroundImage);
  }
}
