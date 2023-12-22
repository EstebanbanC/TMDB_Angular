import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkModeSubject = new BehaviorSubject<boolean>(this.getInitialMode());
  darkMode$ = this.darkModeSubject.asObservable();

  private backgroundImageSubject = new BehaviorSubject<string>(this.getInitialImage());
  backgroundImage$ = this.backgroundImageSubject.asObservable();

  getInitialMode() {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' ? true : false;
  }

  getInitialImage() {
    const savedMode = this.getInitialMode();
    return savedMode ? '../assets/darkhero.png' : '../assets/lighthero.png';
  }

  toggleDarkMode() {
    const currentMode = this.darkModeSubject.value;
    this.darkModeSubject.next(!currentMode);

    const newBackgroundImage = currentMode ? '../assets/lighthero.png' : '../assets/darkhero.png';
    this.backgroundImageSubject.next(newBackgroundImage);

    localStorage.setItem('darkMode', (!currentMode).toString());
  }
}