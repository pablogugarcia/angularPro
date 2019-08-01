import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  // tslint:disable-next-line: variable-name
  constructor(@Inject(DOCUMENT) private _document) {
    this.loadSettings();
  }

  saveSettings(): void {

    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    console.log('Guardado en el localstorage');
  }

  loadSettings(): void {

    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log('Cargando el localstorage');
      this.applyTheme( this.ajustes.tema );
    } else {
      console.log('Cargando valores por defeco');
    }
  }

  applyTheme(tema: string): void {

    // tslint:disable-next-line: prefer-const
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('theme').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.saveSettings();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
