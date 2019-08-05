import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', { static: false }) txtProgress: ElementRef;

  // tslint:disable-next-line: no-input-rename
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 40;

  @Output() changeValue: EventEmitter<number> = new EventEmitter();



  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('progress', this.progreso);
  }

  ngOnInit() {
    // console.log('progress init', this.progreso);

  }

  onChanges(newValue: number): void {

/*     console.log('Newvalue', newValue);
    let elementHTML: any = document.getElementsByName('progreso')[0];
    console.log(elementHTML.value);
 */
    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    // elementHTML.value = this.progreso;
    // El viewChild auomaticamente toma el elemento html sin importar cuantos componentes iguales 
    //  hayan en la vista
    this.txtProgress.nativeElement.value = this.progreso;

    this.changeValue.emit(this.progreso);


  }

  cambiarValor(valor) {

    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso += valor;

    this.changeValue.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }
}
