import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  progreso1: number = 30;
  progreso2: number = 80;

  constructor() { }

  ngOnInit() {
  }

  actualizar(event: number) {

    console.log('Evento: ', event);
  }


}
